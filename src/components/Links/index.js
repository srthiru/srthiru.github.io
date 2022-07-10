import React, {useEffect} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logo from '@site/static/img/pp.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import {useThemeConfig} from '@docusaurus/theme-common';

const linksList = [
  {
    name: 'github',
    link: 'https://github.com/srthiru',
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/srthiruvenkadam',
  },
  {
    name: 'mail',
    link: 'mailto:srthiruvenkadam@gmail.com',
  },
];

const hoverColor = (name) => {
    switch (name) {
        case 'github':
        return 'blue';
        case 'linkedin':
        return 'green';
        case 'mail':
        return 'brown';
        default:
        return '#24292e';
    }
}

export default function Links() {
    const { isDarkTheme } = useThemeConfig();
    return (
      <Col>
        {linksList.map(cn => {
          return (
            <a
              href={cn.link}
              key={cn.classname}
            >
              {cn.name}
            </a>
          );
        })}
      </Col>
    );
  };
