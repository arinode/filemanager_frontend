import { createContext, useContext } from 'react';

export interface UIShellWithSidebarContextProps {
  isSidebarToggled: boolean;
  setIsSidebarToggled: React.Dispatch<React.SetStateAction<boolean>>;
  isNarrowScreen: boolean;
}

export const UIShellWithSidebarContext = createContext<
  UIShellWithSidebarContextProps | null
>(
  null,
);

export const useUIShellWithSidebarContext =
  (): UIShellWithSidebarContextProps => {
    const context = useContext(UIShellWithSidebarContext);

    if (context === null) {
      throw new Error(
        'UIShellContext is null, did you forget to use Context.Provider?',
      );
    }

    return context;
  };
