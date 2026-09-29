---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.scrapers-self-propelled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自行式铲运机

## 1. 范围与适用性

本 PCR 适用于出厂时已验收的全新完整自行式铲运机。机器自带行走动力及铲运斗，可对土石等矿物材料进行铲削、装载、运送和卸料。应记录牵引车与铲运装置的实际配置、已安装发动机数量、斗型和验收时加注状态。卡特彼勒 657 手册显示了包含牵引车和铲运装置发动机、铲运斗、轮胎和液压系统的轮式铲运机；它仅用于说明产品边界，不代表全行业物料清单或质量数值（`cat-657-2020`）。

本规则规定从上游投入到工厂大门的前景数据：纳入外购材料和组件的上游数据集、实际发生的现场制造、总装，以及工厂测试消耗的燃料和排放。不纳入配送、客户工地运行、维护和报废；若编制全生命周期结果，应另行声明这些阶段的情景（`ec-pef-method-2021`）。联合国 CPC 3.0 将自行式铲运机与推土机、平地机、压路机、装载机、挖掘机和非公路自卸车分列（`un-cpc-3-2025`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.scrapers-self-propelled |
| classification_refs | CPC 3.0：44423，Scrapers, self-propelled（`un-cpc-3-2025`） |
| covered_products | 装有整体铲运斗的全新完整自行式轮式铲运机，包括已声明的单发动机或双发动机配置。 |
| excluded_products | 牵引式铲运机、平地机、推土机、挖掘机、前端装载机、自卸车、单独销售的推土铲刀或铲运斗、仅为组件的总成、二手或翻新机器。 |
| representative_product | 一台已验收、铲运斗及动力配置已声明的完整自行式铲运机（`cat-657-2020`）。 |
| production_route | 外购组件、按条件发生的现场钢结构制造、总装及工厂功能测试。 |
| market_state | 无运输包装、在工厂大门交付的全新完整验收机器。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台可铲削、装载、运送并卸载土石或矿物材料的已验收自行式机器。 |
| How much | 声明配置的一台完整机器；其验收净质量实测为 M kg。 |
| How well | 记录额定斗容、载荷或切削宽度、已安装发动机数量及适用的验收测试；不预设统一性能数值（`cat-657-2020`）。 |
| How long or cycle | 一次工厂大门交付；使用寿命和作业循环不在本声明结果范围内。 |
| reference_flow_link | `finished_scraper` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 自动推动铲土机 `42b7c34e-7d9d-4e3f-845b-0cd920105c35` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；序列号；铲运斗与动力配置；已安装发动机及轮胎数量；验收加注状态；工厂地点和期间；实测净质量 M |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

净质量记录排除运输包装、操作员和测试载荷，并记录燃油及工作液的加注状态。手册中包含满箱燃油的工作质量不能用作通用验收净质量（`cat-657-2020`）。所有投入和废物交换量均按同一配置的每台验收成品铲运机采集，不得以未经实测的样本手册质量代替。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢材和独立机器组件进入报告生产场址；须声明钢制铲运斗为现场制造还是外购。 |
| starting_condition_role | 前景制造边界的实物起始状态。 |
| product_classification_scope | 成品自行式铲运机对应 CPC 44423；上游零部件保留各自产品身份。 |
| recursive_input_rule | 外购完整铲运机进入工厂进行后续加工时，应单独披露该投入；不得递归替换为本 PCR 的产出。 |
| upstream_dataset_requirement | 每项外购材料、组件和燃料应连接材料、技术、地域与产品状态适配的上游数据集。 |
| disclosure | 披露场址、期间、配置、铲运斗采购或制造路径、纳入的测试、排除阶段及上游数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 制造边界 | 自组件进入场址至验收成品离厂，纳入制造与总装、制造废物及重要的厂内转运（`ec-pef-method-2021`）。 | `ec-pef-method-2021` |
| `boundary_route` | 制造路径 | 仅在现场实施切割、成形和焊接时纳入这些过程；否则将外购已制成铲运斗作为独立上游产品记录。不得对同一铲运斗重复计算两条路径（`epa-clean-lines-metal-fabrication-2007`；`cat-657-2020`）。 | `epa-clean-lines-metal-fabrication-2007`; `cat-657-2020` |
| `boundary_test` | 工厂测试 | 纳入验收前工厂测试燃料与直接尾气；不纳入客户使用及下游阶段（`ec-pef-method-2021`）。 | `ec-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 现场钢结构制造 | `conditional` | 报告场址切割、成形或焊接铲运机钢结构件时纳入。 | 前景制造和废钢产生。 | 每台验收成品铲运机 |
| `assembly_test` | 总装与工厂测试 | `required` | 所有覆盖的机器都进行最终总装和验收；按实际工厂测试路径纳入。 | 前景总装、已安装组件、燃料、直接测试排放和成品产出。 | 每台验收成品铲运机 |

### 过程：现场钢结构制造（`fabrication`）

#### 输入

##### 产品流

###### 进入切割和成形的钢板（`plate`）

现场切割或成形钢结构件时纳入；否则在总装记录外购已制成铲运斗。

- 选定流：热轧碳钢板（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_material 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-clean-lines-metal-fabrication-2007`


###### 制造过程消耗的钢制焊丝（`wire`）

现场进行电弧焊接时纳入。

- 选定流：钢制焊丝（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_material 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-clean-lines-metal-fabrication-2007`


###### 金属制造所用电网电力（`power`）

现场制造时纳入；包括计量的切割、成形和焊接用电。

- 选定流：中压电网电力（UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：采用 cp_energy 采集每台验收成品铲运机的实际 kWh 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ec-pef-method-2021`


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 离开制造过程的碳钢切割废料（`scrap`）

碳钢边角料或切屑离开制造过程时纳入，并记录实际去向。

- 选定流：碳钢切割废料（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-clean-lines-metal-fabrication-2007`


##### 基本流

### 过程：总装与工厂测试（`assembly_test`）

#### 输入

##### 产品流

###### 进入总装的外购已制成铲运斗（`purchased_bowl`）

仅在完整已制成铲运斗作为外购组件进入总装时纳入；不得重复记录该铲运斗的现场钢板和焊丝投入。

- 选定流：已制成的钢制铲运斗（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_components 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`cat-657-2020`


###### 安装于铲运机的柴油发动机（`engine`）

按验收配置中的每台已安装发动机记录；双发动机机型应记录实际数量和质量。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：采用 cp_engine_count 记录每台验收成品铲运机已安装柴油发动机的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_engine_count`
- 来源：`cat-657-2020`


###### 已安装的非道路机械充气轮胎（`tire`）

按轮式铲运机配置中的每条已安装轮胎记录实际数量和质量。

- 选定流：非道路机械用充气橡胶轮胎（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_components 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`cat-657-2020`


###### 加注于验收设备的矿物液压油（`hydraulic_oil`）

仅适用于矿物油液压系统和验收加注量；其他实际流体应另立并识别原子流。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_fluids 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluids`
- 来源：`cat-657-2020`


###### 工厂功能测试消耗的柴油（`test_diesel`）

已安装柴油发动机在出厂前运行时纳入；只计测试中实际燃烧的燃料，不计留存在验收设备内的燃油。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_test_fuel 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_fuel`
- 来源：`cat-657-2020`


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的完整自行式铲运机（`finished_scraper`）

所声明配置的一台完整验收机器；数量为实测净质量 M 千克。

- 选定流：自动推动铲土机 `42b7c34e-7d9d-4e3f-845b-0cd920105c35`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`; `cat-657-2020`


##### 废物流

##### 基本流

###### 工厂柴油测试产生的化石源二氧化碳（`test_co2`）

现场测试燃烧柴油时纳入；在数据包中使用实测尾气或有记录的燃油碳平衡计算。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_test_emission 采集每台验收成品铲运机的实际 kg 交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_emission`
- 来源：`ec-pef-method-2021`


## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | 共线制造或总装 | 优先将可直接计量的过程和批次拆分；可行时按实际机器及配置直接归属材料、电力、燃料、废料和排放。 | `ec-pef-method-2021` |
| `alloc_shared` | 不可拆分的场址公共投入 | 无法拆分时，采用有记录的因果物理驱动因子，例如计量的工时或组件质量；披露驱动因子、分母和敏感性。 | `ec-pef-method-2021` |
| `alloc_scrap` | 钢废料 | 单独记录碳钢切割废料及实际去向；不得将销售收入或假定回收抵扣额默默从毛材料投入中扣除。 | `epa-clean-lines-metal-fabrication-2007`; `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `assembly_test` | 验收机器质量 | 校准称重与验收记录 | 型号；配置；序列号；验收净质量 M；燃油与工作液加注状态 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机器 | 声明生产期间 | 报告场址 | 每台验收净质量 | 校准记录和签署的验收记录 |
| `cp_material` | `fabrication` | 钢板和焊丝投入 | 领料、采购及退料记录 | 材料牌号；领用 kg；退料 kg；机器或批次编号 | 将物料领用及退料与实际铲运机钢结构制造批次核对。 | kg | 每个制造批次 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 库存台账和批次流转卡 |
| `cp_energy` | `fabrication` | 电网电力 | 分表及生产日志 | kWh；电表编号；机器工时；配置 | 读取制造过程分表；共用时采用所披露的物理分配驱动因子。 | kWh | 每批次或班次 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 电表和分配记录 |
| `cp_waste` | `fabrication` | 碳钢废料 | 称重转运记录 | kg；牌号；去向；批次编号 | 对碳钢边角料及切屑单独称重，并记录去向。 | kg | 每次转运 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 称重单与转运记录 |
| `cp_components` | `assembly_test` | 已安装组件 | 物料清单与供应商收货记录 | 组件身份；已安装数量；净 kg；序列号 | 将实际已安装铲运斗和轮胎与验收配置及供应商收货单核对。 | kg | 每台验收机器 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 物料清单和收货单 |
| `cp_engine_count` | `assembly_test` | 已安装柴油发动机数量 | 发动机序列号及装配记录 | 发动机型号；序列号；已安装数量；用于核对的净 kg | 统计实际安装在验收机器上的柴油发动机，核对采购及装配记录。 | Item(s) | 每台验收机器 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 发动机收货单和签署的装配记录 |
| `cp_fluids` | `assembly_test` | 液压油加注 | 加注与库存日志 | 油品等级；领用 kg；回收 kg；加注状态 | 核对验收液压系统的加注量与回收或排出的油量。 | kg | 每台验收机器 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 加注日志和采购规格 |
| `cp_test_fuel` | `assembly_test` | 测试燃烧柴油 | 燃油计量和测试日志 | 测试前 kg；测试后 kg；燃油等级；测试编号 | 计量工厂测试中实际燃烧的柴油，并与验收时留存燃油分开。 | kg | 每次工厂测试 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 校准计量表和测试报告 |
| `cp_test_emission` | `assembly_test` | 排入空气的化石源二氧化碳 | 尾气实测或碳平衡工作表 | 实测二氧化碳 kg，或燃油 kg 与有记录的碳因子；测试编号 | 优先使用实测测试尾气；否则按记录的燃油碳平衡计算，并在数据包中披露因子。 | kg | 每次工厂测试 | 声明生产期间 | 报告场址 | 每台验收成品机器 | 测量报告或可审计的平衡表 |

### 计算规则

本 PCR 不提供数值化的机器质量或跨产品平均值。数据生产者可依据上述协议计算场址特定分配量，但必须保持每台机器为分母，并记录每项物理驱动因子。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_configuration` | 参考产品和组件 | 在 M 和所有清单行中核对型号、序列号、铲运斗路径、发动机、轮胎及加注状态。 | 验收记录和物料清单 |
| `dq_temporal` | 所有前景流 | 使用所声明生产期间和场址的数据，并指出非同期的供应商数据。 | 日期记录及供应商元数据（`ec-pef-method-2021`） |
| `dq_mass_balance` | 材料和废料 | 核对钢材领用、机器中留存的钢材和单独称重的钢废料；解释未平衡差额。 | 库存台账、物料清单及称重单（`epa-clean-lines-metal-fabrication-2007`） |
| `dq_no_default_weight` | 参考质量 | 不得用样本机型手册工作质量或不同加注状态代替实测 M。 | 校准称重记录（`cat-657-2020`） |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考产品 | 成品铲运机 UUID、准确配置和实测 M kg 必须与验收机器一致；不得以仅为组件的流代替产出。 | `un-cpc-3-2025`; `cat-657-2020` |
| `val_basis` | 所有清单行 | 所有材料、能源、废物及测试排放均以每台验收成品铲运机为分母；测试燃烧燃油与留存燃油分开。 | `ec-pef-method-2021` |
| `val_route` | 制造和外购铲运斗 | 必须有路径证据，禁止通过现场钢结构制造与外购完整铲运斗重复计算同一铲运斗。 | `epa-clean-lines-metal-fabrication-2007`; `cat-657-2020` |
| `val_gaps` | 未解决的身份与范围 | 披露未解决的流 UUID 与独立范围证据缺口；不得用代理 UUID 或特定机型手册数值代替。 | `ec-pef-method-2021` |

## 10. 已发布数据集描述

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造一台已验收全新自行式铲运机的原始前景数据包。 |
| downstream_use | 经审查后发布 process 和 lifecyclemodel 投影；可作为次级或背景数据集使用。 |
| allowed_use | 仅在配置、边界、质量和数据质量协调一致时作从上游投入到工厂大门的比较。 |
| excluded_use | 未限定的使用寿命、土方生产率或运行燃油比较。 |
| required_metadata | 型号；序列号/配置；场址；期间；M 与加注状态；铲运斗路径；测试路径；分配驱动因子；上游数据集 |
| required_quality_disclosure | 实测与估算记录；来源地域/技术；缺失 UUID；未解决经验范围；质量平衡差额；排除项 |
| update_trigger | 机器配置、场址路径、组件供应、燃料或电力结构、或材料前景记录发生变化 |

## 11. 数据来源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | CPC Version 3.0 Structure，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-26 检索） | 仅用于官方分类身份 |
| `cat-657-2020` | `handbook` | 657 WHEEL TRACTOR-SCRAPER，卡特彼勒 AEXQ2604-00，https://s7d2.scene7.com/is/content/Caterpillar/CM20200825-44b60-322ae（2026-09-26 检索） | 完整机器边界、组件和特定机型质量的限制 |
| `epa-clean-lines-metal-fabrication-2007` | `official_guidance` | Clean Lines: Strategies for Reducing Your Environmental Footprint — Metal Fabrication Operations，美国环保署，https://www.epa.gov/sites/default/files/2015-03/documents/fabrication.pdf（2026-09-26 检索） | 切割、焊接过程及废料/流体清单 |
| `ec-pef-method-2021` | `official_guidance` | Annex I. Product Environmental Footprint Method，欧盟委员会 2021，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（2026-09-26 检索） | 功能参考、阶段边界、分配顺序和原始数据采集 |
