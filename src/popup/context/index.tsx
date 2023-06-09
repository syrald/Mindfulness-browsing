import React, { createContext, useState } from 'react';

type RuleState =
  | 'LOADING'
  | 'RULE'
  | 'CONNECTION_ISSUE'
  | 'NO_RULE'
  | 'NOT_AN_URL';

type AppContextProps = {
  host: string;
  setHost: (host: string) => void;
  state: RuleState;
  setState: (state: RuleState) => void;
};

const initialAppContext: AppContextProps = {
  host: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHost: () => {},
  state: 'LOADING',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
};

export const AppContext = createContext<AppContextProps>(initialAppContext);

type AppContextProviderProps = {
  children: React.ReactElement;
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps) => {
  const [host, setHost] = useState<string>('');
  const [state, setState] = useState<RuleState>('LOADING');

  return (
    <AppContext.Provider value={{ host, setHost, state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
