import ExperimentTrackingRoutes from '../../experiment-tracking/routes';
import { Link, Location, matchPath, useLocation } from '../utils/RoutingUtils';
import logo from '../../common/static/home-logo.png';
import { ModelRegistryRoutes } from '../../model-registry/routes';
import { HomePageDocsUrl, Version } from '../constants';
import { DarkThemeSwitch } from '@mlflow/mlflow/src/common/components/DarkThemeSwitch';
import { useState, type ReactElement } from "react";
import { NavigationItem, StackLayout } from "@salt-ds/core";
import { size } from 'lodash';
import { UserBadgeIcon } from "@salt-ds/icons";


const colors = {
  //todo: Rajesh
  // headerBg: '#0b3574',
  headerBg: 'black',
  headerText: '#e7f1fb',
  headerActiveLink: '#43C9ED',
};

const classNames = {
  activeNavLink: { borderBottom: `4px solid ${colors.headerActiveLink}` },
};

const isExperimentsActive = (location: Location) => matchPath('/experiments/*', location.pathname);
const isModelsActive = (location: Location) => matchPath('/models/*', location.pathname);


export const MlflowHeader = ({
  isDarkTheme = false,
  setIsDarkTheme = (val: boolean) => {},
}: {
  isDarkTheme?: boolean;
  setIsDarkTheme?: (isDarkTheme: boolean) => void;
}) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <header
      css={{
        backgroundColor: colors.headerBg,
        height: '60px',
        color: colors.headerText,
        display: 'flex',
        gap: 24,
        a: {
          color: colors.headerText,
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <Link to={ExperimentTrackingRoutes.rootRoute}>
          <img
            css={{
              height: 40,
              marginLeft: 24,
              marginTop: 30,
              marginBottom: 10,
              fontSize: 25,
            }}
            alt=""
            />
            <span css= {{
              height: 40,
              marginLeft: 24,
              marginTop: 30,
              marginBottom: 10,
              fontSize: 25,
              alignItems: "baseline",
              fontStyle: "italic"
            }}>J.P Morgan</span>
            
        </Link>

      </div>
      <div
        css={{
          display: 'flex',
          paddingTop: 20,
          fontSize: 16,
          gap: 24,
        }}
      >
        
        <Link
          to={ModelRegistryRoutes.modelListPageRoute}
          style={isModelsActive(location) ? classNames.activeNavLink : undefined}
        >
          RAI Flow
        </Link>
        <NavigationItem
            expanded={expanded}
            level={0}
            onExpand={() => setExpanded(!expanded)}
            orientation="vertical"
            parent={true}
            render={(props) => <button {...props} />}
          >
            Catalog
          </NavigationItem>

          <NavigationItem
            expanded={expanded}
            level={0}
            onExpand={() => setExpanded(!expanded)}
            orientation="vertical"
            parent={true}
            render={(props) => <button {...props} />}
          >
            Solutions
          </NavigationItem>
          <NavigationItem
            expanded={expanded}
            level={0}
            onExpand={() => setExpanded(!expanded)}
            orientation="vertical"
            parent={true}
            render={(props) => <button {...props} />}
          >
            Apps
          </NavigationItem>

          <NavigationItem
            expanded={expanded}
            level={0}
            onExpand={() => setExpanded(!expanded)}
            orientation="vertical"
            parent={true}
            render={(props) => <button {...props} />}
          >
            Resources
          </NavigationItem>
       
      </div>
    <div css={{ display: 'flex', gap: 24, paddingTop: 12, fontSize: 16, marginRight: 24, position:"absolute", right:0, paddingRight: 20 }}>
        <a> <UserBadgeIcon size={3}></UserBadgeIcon></a>
      </div>
    </header >
  );
};
