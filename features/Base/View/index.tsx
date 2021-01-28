import React from 'react';
import { useQuery } from 'react-query';
import { Link, Route, Switch } from "wouter";

import { TaskCollection, TaskInput } from '@/Task/View';
import { Task } from '@/Task/Shape';

const toJSON = (response: Response) => response.json();
const request = () => fetch('/_api/task').then(toJSON);

const Container: React.FC<{}> = ({ children }) =>
  <div className="h-screen flex overflow-hidden bg-gray-50">
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="px-3 mt-6">
            <div className="space-y-1">
              <Link href="/">
                <a className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Inbox
                </a>
              </Link>
              <Link href="/about">
                <a href="#" className="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  About
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="px-4 mt-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  </div>

const App: React.FC<{}> = () => {
  const { data, isLoading, error } = useQuery<Task[], Error>('tasks', request);

  if (!data) return <div></div>
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <Container>

      <Switch>
        <Route path="/">
          <TaskInput />
          <TaskCollection collection={data} />
        </Route>

        <Route path="/about">
          This is an example of an app
        </Route>
        <Route>Not found</Route>
      </Switch>

    </Container>
  );
}

export { App };
