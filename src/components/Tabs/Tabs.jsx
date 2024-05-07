import { Fragment } from "react";

export default function ({ children, buttons, TabsContainer }) {
    return (
        <Fragment>
            <TabsContainer>
                {buttons}
            </TabsContainer>
            {children}
        </Fragment>
    );
}