from selenium.webdriver.common.by import By

from .base_element import BaseElement
from .base_page import BasePage
from .locator import Locator

class ToursPage(BasePage):

    @property
    def tour(self):
        return BaseElement(self.driver, locator=Locator(By.CSS_SELECTOR, 'article'))