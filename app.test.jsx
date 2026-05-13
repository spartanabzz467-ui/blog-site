// @vitest-environment jsdom
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("renders blog name in header", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
});

test("renders articles", () => {
  render(<App />);
  const articles = screen.getAllByRole("article");
  expect(articles.length).toBeGreaterThan(0);
});