import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import menus from './menu';
import { useSubmenuStore } from '../CreateStore';

const CommingSoon = () => {
  const submenuStore = useSubmenuStore((state) => state.submenus);

  const btnList = [
    {
      name: 'Marketplace',
      btn: [
        'Marketplace',
      ],
    },
    {
      name: 'Arcade',
      btn: ['Games'],
    },
    {
      name: 'Education Center',
      btn: ['Classes and Study Center', 'Educational Services','Library'],
    },
    {
      name: 'Business Center',
      btn: [
        'Business Cunsulting and Planning',
        'Business Marketing',
        'Business Survey',
        'Accounting and Legal',
        'Job Center & Freelancers Hub',
        'Confrence Hall & Trade',
      ],
    },
    {
      name: 'Entertaiment Center',
      btn: [
        'Music and Concert',
        'Video Center',
        'Theater',
        'Podcast',
        'Story Laine',
        'Buzz Worthty',
      ],
    },
    {
      name: 'Meet Up Center',
      btn: [
        'Cupid Hall',
        'Be My BFF',
        'Culturtal Center',
        'I just moved',
      ],
    },

    {
      name: 'Fainancial center',
      btn: ['Fainancial center'],
    },
    {
      name: 'Creative Center',
      btn: [
        'Recording Studio',
        'Movie Studio',
        'Publiciation & Blogs',
        'Creative Art',
      ],
    },
  ];

  return (
    <div className="authors-2">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row py-5">
            <div className="col-md-12 py-5">
              <div className="page-title-heading mg-bt-12 py-5">
                <h1 className="heading text-center py-5">
                  {' '}
                  <div className="py-5">
                    <h1>Comming Soon</h1>
                    {menus.map((item) => {
                      return item.namesub
                        ? item.namesub.map((value) => {
                            return value.sub == submenuStore
                              ? btnList.map((btnLists) => {
                                  return btnLists.name == submenuStore
                                    ? btnLists.btn.map(
                                        (each, step) => {
                                          return (
                                            <button
                                              className="mx-2"
                                              key={step}
                                            >
                                              {each}
                                            </button>
                                          );
                                        }
                                      )
                                    : null;
                                })
                              : null;
                          })
                        : null;
                    })}
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommingSoon;
