import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="team">
          <ul className="footer-list">
            <li className="footer-item">
              <a href="https://github.com/MielomankA" className="list-link" target="_blank" rel="noreferrer noopener">
                <svg
                  className="github-pic"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="-74.4 -120.90175 644.8 725.4105"
                >
                  <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                Nataliya Belyaeva
              </a>
            </li>
            <li className="footer-logo">
              <a href="https://rs.school/" target="_blank" rel="noreferrer noopener" className="logo-link">
                <svg className="logo-pic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552.85 198.67">
                  <title>rs_school</title>
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M275.36 61.37l26.29-1.65q.86 6.41 3.48 9.76 4.28 5.43 12.2 5.43 5.91 0 9.12-2.77a8.34 8.34 0 0 0 3.2-6.44 8.18 8.18 0 0 0-3-6.22q-3-2.74-14.15-5.19-18.18-4.08-25.93-10.86a21.84 21.84 0 0 1-7.81-17.26 23.44 23.44 0 0 1 4-13 26.47 26.47 0 0 1 12-9.64q8-3.51 22-3.51 17.14 0 26.14 6.38t10.71 20.28l-26.05 1.52q-1-6-4.36-8.78t-9.2-2.77c-3.21 0-5.63.69-7.25 2.05a6.25 6.25 0 0 0-2.44 5 5 5 0 0 0 2 3.84q1.95 1.77 9.27 3.3 18.12 3.9 26 7.9t11.4 9.91a25.12 25.12 0 0 1 3.57 13.24 28.37 28.37 0 0 1-4.75 15.86 29.83 29.83 0 0 1-13.3 11q-8.55 3.75-21.54 3.75-22.81 0-31.6-8.78t-10-22.35zM6.27 91V1.53h46.06q12.81 0 19.58 2.19a20.93 20.93 0 0 1 10.92 8.14A24.75 24.75 0 0 1 87 26.35a24.8 24.8 0 0 1-3.2 12.84A24.91 24.91 0 0 1 75.07 48a33.63 33.63 0 0 1-9.7 3.54 27.79 27.79 0 0 1 7.19 3.29A27.79 27.79 0 0 1 77 59.49 35.16 35.16 0 0 1 80.85 65l13.38 26H63L48.24 63.63q-2.81-5.31-5-6.9a11.63 11.63 0 0 0-6.78-2.07H34V91zM34 37.76h11.68A41 41 0 0 0 53 36.54a7.3 7.3 0 0 0 4.48-2.81 8.24 8.24 0 0 0 1.74-5.18 8.23 8.23 0 0 0-2.75-6.65q-2.74-2.32-10.31-2.32H34zM0 167.56l26.29-1.64q.86 6.41 3.48 9.76Q34 181.11 42 181.11q5.91 0 9.12-2.78a8.34 8.34 0 0 0 3.2-6.44 8.2 8.2 0 0 0-3-6.22q-3-2.74-14.15-5.18-18.18-4.1-25.93-10.86a21.87 21.87 0 0 1-7.81-17.27 23.49 23.49 0 0 1 4-13 26.47 26.47 0 0 1 12-9.64q8-3.51 22-3.51 17.14 0 26.14 6.38t10.71 20.28l-26 1.53q-1-6-4.36-8.79t-9.19-2.74q-4.81 0-7.25 2a6.25 6.25 0 0 0-2.44 5 5 5 0 0 0 2 3.85q1.95 1.77 9.27 3.29 18.12 3.9 26 7.9t11.4 9.91a25.15 25.15 0 0 1 3.57 13.24 28.35 28.35 0 0 1-4.75 15.86 29.83 29.83 0 0 1-13.3 11q-8.55 3.75-21.54 3.75-22.81 0-31.6-8.78T0 167.56zm163-7.01l24.22 7.32a44.72 44.72 0 0 1-7.69 17 33.46 33.46 0 0 1-13 10.31q-7.78 3.47-19.8 3.47-14.58 0-23.82-4.23t-16-14.91q-6.72-10.67-6.71-27.31 0-22.18 11.8-34.11t33.4-11.92q16.91 0 26.57 6.84t14.36 21l-24.4 5.43a21 21 0 0 0-2.68-6 16 16 0 0 0-5.67-4.88 16.31 16.31 0 0 0-7.51-1.71q-9.39 0-14.39 7.56-3.8 5.61-3.79 17.61 0 14.86 4.52 20.38t12.69 5.51q7.92 0 12-4.45t5.9-12.91zm45.51-52.83h27.63V139h30.2v-31.28h27.75v89.43h-27.75V161h-30.2v36.18h-27.63zm102.78 44.77q0-21.88 12.2-34.1t34-12.2q22.32 0 34.4 12T404 151.76q0 15.69-5.28 25.72a37.54 37.54 0 0 1-15.25 15.61q-10 5.58-24.86 5.58-15.12 0-25-4.82a37.59 37.59 0 0 1-16.07-15.25q-6.26-10.42-6.25-26.11zm27.63.13q0 13.55 5 19.46t13.7 5.91q8.91 0 13.79-5.79t4.88-20.8q0-12.63-5.1-18.46t-13.82-5.82A16.78 16.78 0 0 0 344 133q-5.07 6-5.08 19.62z" />
                      <path d="M392.28 152.49q0-21.88 12.2-34.1t34-12.2q22.34 0 34.41 12t12.07 33.58q0 15.69-5.27 25.72a37.6 37.6 0 0 1-15.25 15.61q-10 5.58-24.86 5.58-15.13 0-25-4.82a37.67 37.67 0 0 1-16.08-15.25q-6.22-10.43-6.22-26.12zm27.64.13q0 13.55 5 19.46t13.72 5.92q8.91 0 13.79-5.79t4.88-20.8q0-12.63-5.09-18.46t-13.82-5.82A16.77 16.77 0 0 0 425 133q-5.09 6-5.08 19.62z" />
                      <path d="M482.08 107.72h27.64v67.41h43.13v22h-70.77z" />
                    </g>
                  </g>
                </svg>
                <span className="year">&apos;22</span>
              </a>
            </li>
            <li className="footer-item">
              <a href="https://github.com/hotlovestl" className="list-link" target="_blank" rel="noreferrer">
                <svg
                  className="github-pic"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="-74.4 -120.90175 644.8 725.4105"
                >
                  <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                Artiom Uradau
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
