import React from 'react';
import {
  Button,
  Tabs,
  Tab,
  InlineNotification,
  NotificationActionButton,
  ProgressIndicator,
  ProgressStep,
} from 'carbon-components-react';
import HolidayForm from './HolidayForm';


const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const HolidayPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width holiday-page">
      <div className="bx--row holiday-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="holiday-page__heading">Hhhhhhhhhhhhhhhhhhhhhhh</h1>
        </div>
      </div>
      <div className="bx--row holiday-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Summary">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row holiday-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="holiday-page__subheading">
                      What is Carbon?
                    </h2>
                    <p className="holiday-page__p">
                      Carbon is IBM’s open-source design system for digital
                      products and experiences. With the IBM Design Language
                      as its foundation, the system consists of working code,
                      design tools and resources, human interface guidelines,
                      and a vibrant community of contributors.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Booking">
              <div>
                <ProgressIndicator
                  currentIndex={0}
                  style={{
                    marginTop: '1rem',
                    marginBottom: '3rem',
                    justifyContent: 'center'
                  }}>
                  <ProgressStep
                    current
                    label="Step 1"
                    secondaryLabel="Form"
                  />
                  <ProgressStep
                    label="Step 2"
                    secondaryLabel="Waiting"
                  />
                  <ProgressStep
                    label="Step 3"
                    secondaryLabel="Complete"
                  />
                  <ProgressStep
                    invalid
                    label="Step 4"
                    secondaryLabel="Reconsider"
                  />
                </ProgressIndicator>
              </div>
              <div>
                <HolidayForm />
              </div>
              <div>
                <div>
                  <InlineNotification
                    style={{
                      position:'fixed',
                      bottom: '0',
                      left: '0',
                      margin: '16px'
                    }}
                    kind="info"
                    actions={<NotificationActionButton>Summary</NotificationActionButton>}
                    iconDescription="Day remains"
                    subtitle={<span>14</span>}
                    title="Day remains"
                  />
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Status">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row holiday-page__tab-content">
                  <div className="bx--col-lg-16">
                    Carbon provides styles and components in Vanilla, React, Angular,
                    and Vue for anyone building on the web.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HolidayPage;