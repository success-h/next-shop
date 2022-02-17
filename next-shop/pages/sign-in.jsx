import React from "react";
import Page from "../components/Page";
import Input from "../components/Input";

export default function SignInPage() {
  return (
    <Page title="Sign In">
      <form>
        <label>
          Email
          <Input type="email" required className="border" />
        </label>
        <label>
          Password
          <Input type="password" required className="" />
        </label>
      </form>
    </Page>
  );
}
