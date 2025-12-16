import { ChangeEvent, JSX, useEffect, useState } from "react";
import {
  Link,
  Location,
  NavigateFunction,
  NavigateOptions,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router";
import useAppHistory from "~/AppHistory";
import CustomSVG from "~/components/CustomSVG";

function Header({ menuOpen, menuOpenSetter }): JSX.Element {
  const appHistory: object = useAppHistory();

  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const urlQuery: string = new URLSearchParams(location.search).get("q") || "";
  const [query, setQuery] = useState<string>("");

  useEffect((): void => {
    setQuery(urlQuery);
  }, [urlQuery]);

  function handleSubmitSearch(event: SubmitEvent): boolean {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const formData: FormData = new FormData(form);
    const query: string = formData.get("q") as string;

    const options: NavigateOptions = {
      state: {
        q: query,
      },
    };
    navigate(form.action + `?q=${encodeURIComponent(query)}`, options);
    return false;
  }

  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "10px 16px",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ justifyContent: "flex-start" }}>
          <NavLink
            className={
              menuOpen
                ? "hoverHeaderButtonFill menu-open"
                : "hoverHeaderButtonFill"
            }
            onClick={(): void => {
              menuOpenSetter(!menuOpen);
            }}
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "1.5rem",
              display: "inline-block",
              height: "40px",
              textAlign: "center",
              verticalAlign: "middle",
              marginRight: "10px",
              width: "40px",
            }}
            to={null}
          >
            <CustomSVG
              icon="menu"
              viewBox="0 0 24 24"
              style={{ height: "16px", padding: "12px 0" }}
            />
          </NavLink>
          <Link
            className="hoverHeaderButton"
            style={{ fill: "white", margin: "0 10px", textDecoration: "none" }}
            to="/"
          >
            <CustomSVG
              icon="logo"
              style={{ height: "40px", verticalAlign: "middle", width: "40px" }}
              viewBox="0 0 322 254"
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginLeft: "10px",
                verticalAlign: "middle",
              }}
            >
              LBRY Web
            </span>
          </Link>
        </div>
        <div style={{ justifyContent: "center" }}>
          <NavLink
            className="hoverHeaderButtonFill"
            disabled={appHistory.getPrevious().length === 0}
            onClick={
              appHistory.getPrevious().length > 0
                ? (): void => {
                    navigate(-1);
                  }
                : null
            }
            to={null}
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "1.5rem",
              display: "inline-block",
              height: "40px",
              marginRight: "10px",
              textAlign: "center",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <CustomSVG
              icon="arrow-left"
              viewBox="0 0 24 24"
              style={{ height: "18px", padding: "11px 0" }}
            />
          </NavLink>
          <NavLink
            className="hoverHeaderButtonFill"
            disabled={appHistory.getNext().length === 0}
            onClick={
              appHistory.getNext().length > 0
                ? (): void => {
                    navigate(1);
                  }
                : null
            }
            to={null}
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "1.5rem",
              display: "inline-block",
              height: "40px",
              marginRight: "10px",
              textAlign: "center",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <CustomSVG
              icon="arrow-right"
              viewBox="0 0 24 24"
              style={{ height: "18px", padding: "11px 0" }}
            />
          </NavLink>
          <div style={{ display: "inline-block", height: "40px" }}>
            <form
              action="/search"
              onSubmit={handleSubmitSearch}
              style={{
                height: "100%",
                marginRight: "10px",
                position: "relative",
              }}
            >
              <CustomSVG
                icon="search"
                style={{
                  fill: "transparent",
                  height: "100%",
                  left: "10px",
                  position: "absolute",
                  stroke: "white",
                  strokeWidth: "2px",
                  verticalAlign: "middle",
                  width: "16px",
                }}
                viewBox="0 0 24 24"
              />
              <input
                name="q"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setQuery(e.target.value)
                }
                placeholder="Search"
                style={{
                  backgroundColor: "rgba(45, 45, 45, 0.7)",
                  border: "none",
                  borderRadius: "6px",
                  color: "rgb(253, 253, 253)",
                  fontSize: "13px",
                  height: "38px",
                  paddingLeft: "35px",
                  paddingRight: "10px",
                  verticalAlign: "middle",
                  width: "480px",
                }}
                value={query}
              />
            </form>
          </div>
          <NavLink
            className="hoverHeaderButtonFill"
            to={null}
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "1.5rem",
              display: "inline-block",
              height: "40px",
              marginRight: "10px",
              textAlign: "center",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <CustomSVG
              icon="publish"
              viewBox="0 0 24 24"
              style={{ height: "18px", padding: "11px 0", strokeWidth: "2px" }}
            />
          </NavLink>
          <NavLink
            className="hoverHeaderButtonFill"
            to={null}
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "1.5rem",
              display: "inline-block",
              height: "40px",
              marginRight: "10px",
              textAlign: "center",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <CustomSVG
              icon="settings"
              viewBox="0 0 24 24"
              style={{
                height: "18px",
                padding: "11px 0",
                fill: "transparent",
                strokeWidth: "2px",
              }}
            />
          </NavLink>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          <Link
            className="hoverHeaderButton"
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "6px",
              display: "inline-block",
              height: "40px",
              margin: "0 10px",
              padding: "0 10px",
              textDecoration: "none",
              verticalAlign: "middle",
            }}
            to="/wallet"
          >
            <CustomSVG
              icon="lbc"
              viewBox="0 0 24 24"
              style={{
                height: "16px",
                padding: "12px 0",
                verticalAlign: "middle",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginLeft: "6px",
                verticalAlign: "middle",
              }}
            >
              0.10
            </span>
          </Link>
          <Link
            className="hoverHeaderButtonFill"
            to="/settings"
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.7)",
              borderRadius: "1.5rem",
              display: "inline-block",
              height: "40px",
              textAlign: "center",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <CustomSVG
              icon="account"
              viewBox="0 0 24 24"
              style={{
                fill: "transparent",
                height: "18px",
                padding: "11px 0",
                strokeWidth: "2px",
              }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
