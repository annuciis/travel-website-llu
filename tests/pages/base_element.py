from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class BaseElement(object):
    def __init__(self, driver, locator):
        self.driver = driver
        self.locator = locator
        self.element = None
        self.elements = None

        elements = WebDriverWait(self.driver, 10).until(EC.visibility_of_all_elements_located(locator=self.locator))
        if len(elements) > 1:
            self.find_multiple()
        else:
            self.find()
        

    def find(self):
        element = WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located(locator=self.locator))
        self.element = element
        return None

    def find_multiple(self):
        elements = WebDriverWait(self.driver, 10).until(EC.visibility_of_all_elements_located(locator=self.locator))
        self.elements = elements
        return None
    
    def click(self):
        element = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable(self.locator))
        element.click()
        return None

    def input_text(self, txt):
        self.element.send_keys(txt)
        return None

    @property
    def text(self):
        text = self.element.text
        return text

    def count(self):
        return len(self.elements)
        