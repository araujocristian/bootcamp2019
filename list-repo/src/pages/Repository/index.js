import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Loading, Owner, IssueList, Selector, Pagination } from './styles';
import Container from '../../Components';
import { Link } from 'react-router-dom';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    issueState: 'all',
    page: 1,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const repoName = decodeURIComponent(params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'all',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleSelector = async e => {
    e.persist();

    const {
      match: { params },
    } = this.props;

    const repoName = decodeURIComponent(params.repository);

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: e.target.value,
        per_page: 5,
      },
    });

    this.setState({
      issueState: e.target.value,
      issues: issues.data,
      page: 1,
    });
  };

  handlePage = async value => {
    const {
      match: { params },
    } = this.props;

    const { page, issueState } = this.state;

    const nextPage = page + value;

    const repoName = decodeURIComponent(params.repository);

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: issueState,
        per_page: 5,
        page: nextPage < 0 ? 0 : nextPage,
      },
    });

    this.setState({
      issues: issues.data,
      page: nextPage < 0 ? 0 : nextPage,
    });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) return <Loading>Carregando...</Loading>;

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.name} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <Selector onChange={this.handleSelector}>
            <option value="all">Todos</option>
            <option value="open">Abertos</option>
            <option value="closed">Fechados</option>
          </Selector>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Pagination>
          <button
            type="button"
            onClick={() => this.handlePage(-1)}
            disabled={page === 1}
          >
            {'<'}
          </button>
          <button onClick={() => this.handlePage(1)} type="button">
            {'>'}
          </button>
        </Pagination>
      </Container>
    );
  }
}
