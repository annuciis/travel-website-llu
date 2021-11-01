from selenium.webdriver.common.by import By

from .base_element import BaseElement
from .base_page import BasePage
from .locator import Locator

class ToursPage(BasePage):

    @property
    def tour(self):
        return BaseElement(self.driver, locator=Locator(By.CSS_SELECTOR, 'article'))

    @property
    def tour_remove_button(self):
        return BaseElement(self.driver, locator=Locator(By.XPATH, '//button[contains(text(),"not interested")]'))

    def remove_all_tours(self):
        for x in range(0,self.tour_remove_button.count()):
            self.tour_remove_button.click()
        return None
    
    @property
    def refresh_tours_button(self):
        return BaseElement(self.driver, locator=Locator(By.ID, 'refresh-button'))
    

       
