import React from 'react';

// import { Container } from './styles';

export default function Repository({ match: { params } }) {
  return <div>Repo: {decodeURIComponent(params.repository)}</div>;
}
