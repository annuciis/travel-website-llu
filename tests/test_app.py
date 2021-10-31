from selenium import webdriver
import unittest

from pages.title_page import TitlePage
from pages.tours_page import ToursPage


class AppTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get('http://localhost:3000')

    def test_title_page_go_to_tours(self):
        self.title_page = TitlePage(driver=self.driver)
        self.title_page.explore_button.click()
        assert self.driver.current_url == 'http://localhost:3000/tours', "Didn't navigate to tours page"
        self.tour_page = ToursPage(driver=self.driver)
        assert self.tour_page.tour.count() == 5

    def exit(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()

