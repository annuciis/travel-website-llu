
from selenium import webdriver

from pages.title_page import TitlePage
from pages.tours_page import ToursPage
browser = webdriver.Chrome()

browser.get('http://localhost:3000')

#Title page
title_page = TitlePage(driver=browser)
title_page.explore_button.click()
assert browser.current_url == 'http://localhost:3000/tours', "Didn't navigate to tours page"

#Tour page
tour_page = ToursPage(driver=browser)
assert tour_page.tour.count() == 5
browser.quit()

