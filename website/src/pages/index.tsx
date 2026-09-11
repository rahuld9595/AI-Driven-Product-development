import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * The course is the site. Rather than maintain a separate landing page that
 * can drift from the training content, the root route sends visitors to the
 * Welcome page. This also gives `/` a real route, without which the navbar
 * home link is a broken link on every page.
 */
export default function Home(): JSX.Element {
  return <Redirect to={useBaseUrl('/docs/intro')} />;
}
