import Container from './container';
import {EXAMPLE_PATH} from '../lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="mx-auto flex flex-row max-w-lg justify-around text-blue-400 py-2">
          <div>
            <a href="https://efcmartialartsbilling.com/" target="_blank">
              Educational Funding Company
            </a>{' '}
          </div>
          <div>TAP</div>
          <div>©2021</div>
        </div>
      </Container>
    </footer>
  );
}
