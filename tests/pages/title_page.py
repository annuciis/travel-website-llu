from selenium.webdriver.common.by import By

from .base_element import BaseElement
from .base_page import BasePage
from .locator import Locator


class TitlePage(BasePage):
    @property
    def explore_button(self):
        return BaseElement(driver=self.driver, locator=Locator(By.ID, 'explore-now-btn'))
