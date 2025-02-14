#pragma once

#include <fbjni/fbjni.h>
#include <jni.h>
#include <memory>
#include "AndroidScheduler.h"
#include "ErrorHandler.h"
#include "Logger.h"
#include "Scheduler.h"

namespace reanimated {

class AndroidErrorHandler : public JavaClass<AndroidErrorHandler>,
                            public ErrorHandler {
  std::shared_ptr<ErrorWrapper> error;
  std::shared_ptr<Scheduler> scheduler;
  void raiseSpec() override;

 public:
  static auto constexpr kJavaDescriptor =
      "Lcom/swmansion/reanimated/AndroidErrorHandler;";
  AndroidErrorHandler(std::shared_ptr<Scheduler> scheduler);
  std::shared_ptr<Scheduler> getScheduler() override;
  std::shared_ptr<ErrorWrapper> getError() override;
  void setError(std::string message) override;
  virtual ~AndroidErrorHandler() {}
};

} // namespace reanimated
