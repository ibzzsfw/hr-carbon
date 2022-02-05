import React from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from 'carbon-components-react';

import {
    AppSwitcher20,
    Notification20,
    UserAvatar20,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const UI = () => (
    <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="Carbon Tutorial">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <HeaderName element={Link} to="/" prefix="FallenAngel">
                    [Human Resources]
                </HeaderName>
                <HeaderNavigation aria-label="Carbon Tutorial">
                    <HeaderMenuItem>Daily time</HeaderMenuItem>
                    <HeaderMenuItem>Deduction</HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="/holiday">
                        Holiday
                    </HeaderMenuItem>
                    <HeaderMenuItem>Payment</HeaderMenuItem>
                </HeaderNavigation>
                <SideNav
                    aria-label="Side navigation"
                    expanded={isSideNavExpanded}
                    isPersistent={false}>
                    <SideNavItems>
                        <HeaderSideNavItems>
                            <HeaderMenuItem>Daily time</HeaderMenuItem>
                            <HeaderMenuItem>Deduction</HeaderMenuItem>
                            <HeaderMenuItem element={Link} to="/holiday">
                                Holiday
                            </HeaderMenuItem>
                            <HeaderMenuItem>Payment</HeaderMenuItem>
                        </HeaderSideNavItems>
                    </SideNavItems>

                </SideNav>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications">
                        <Notification20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar">
                        <UserAvatar20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App Switcher">
                        <AppSwitcher20 />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />
);

export default UI;