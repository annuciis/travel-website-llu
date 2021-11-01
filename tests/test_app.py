from selenium import webdriver
import unittest
import time

from selenium.webdriver.support import wait

from pages.title_page import TitlePage
from pages.tours_page import ToursPage


class AppTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        
    def test_title_page_go_to_tours(self):
        self.driver.get('http://localhost:3000')
        self.title_page = TitlePage(driver=self.driver)
        self.title_page.explore_button.click()
        assert self.driver.current_url == 'http://localhost:3000/tours', "Didn't navigate to tours page."
        self.tour_page = ToursPage(driver=self.driver)
        assert self.tour_page.tour.count() == 5, "No tours are found after navigation to tours page"

    def test_tours_remove_and_refresh(self):
        self.driver.get('http://localhost:3000/tours')
        self.tour_page = ToursPage(driver=self.driver)
        assert self.tour_page.tour.count() == 5, "No tours are found on upload the page"
        self.tour_page.remove_all_tours()
        self.tour_page.refresh_tours_button.click()
        assert self.tour_page.tour.count() == 5, "No tours are found after refresh"
        
        

    def exit(self):
        self.driver.quit()
        

if __name__ == "__main__":
    unittest.main()

