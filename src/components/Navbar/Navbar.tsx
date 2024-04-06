import Link from "next/link";
import { Logo } from "../Logo/Logo";

export function Navbar() {
  return (
    <div className="navbar bg-base-100  fixed px-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
            <Logo />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <details>
              <summary>Serviços</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Desenvolvimento</a>
                </li>
                <li>
                  <a>Engenharia de Dados</a>
                </li>
                <li>
                  <a>Engenharia de Software</a>
                </li>
                <li>
                  <a>Ciência de Dados</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Portfólio</a>
          </li>

        </ul>
      </div>
      <div className="flex-none w-32 justify-end">
        <input type="checkbox" className="toggle toggle-warning" />
      </div>
    </div>
  );
}
