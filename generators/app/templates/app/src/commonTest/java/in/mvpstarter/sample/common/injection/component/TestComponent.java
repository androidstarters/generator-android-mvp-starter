package <%= appPackage %>.common.injection.component;

import javax.inject.Singleton;

import dagger.Component;
import <%= appPackage %>.common.injection.module.ApplicationTestModule;
import <%= appPackage %>.injection.component.ApplicationComponent;

@Singleton
@Component(modules = ApplicationTestModule.class)
public interface TestComponent extends ApplicationComponent {

}