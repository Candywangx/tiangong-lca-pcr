---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.automatic-goods-vending-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自动售货机

## 1. 范围与适用性

本 PCR 适用于全新完整自动售货机的工厂门生产。该机器接受付款或其他授权交易，并在无现场人员干预的情况下发放已包装商品。适用配置包括常温型、加热型、制冷型及组合型，但必须声明具体配置。前景边界包括外购总成接收、最终机械与电气装配、型号特定出厂验收测试、适用时的制冷剂充注，以及出厂包装。

本 PCR 不包括仅发放现金、票据或服务的机器、自动柜员机、有人值守零售柜、主要功能为加工而非发放预包装商品的饮料制备或食品加工设备、单独销售的备件，以及再制造、维修或翻新的机器。外购组件制造由供应商特定上游数据集表示。工厂门后的配送、商品补货、安装、使用、维护和报废不属于所声明的产品系统；研究若纳入这些阶段，必须作为单独模块披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.automatic-goods-vending-machines |
| classification_refs | CPC 3.0：43934，Automatic goods vending machines（自动售货机）（`un-cpc-3-0-structure-2025`） |
| covered_products | 用于预包装食品、饮料或非食品商品的全新完整自动售货机；常温型、加热型、制冷型及组合型 |
| excluded_products | 现金发放机和自动柜员机；仅出票或仅提供服务的终端；有人值守柜；以食品加工为主要功能的机器；单独销售的零件；再制造、维修或翻新机器 |
| representative_product | 一个验收合格的完整自动售货机生产型号 |
| production_route | 模块化接收外购机柜、机械、电气和可选制冷总成；最终装配；测试；可选制冷剂充注；出厂包装 |
| market_state | 全新、功能完整且通过验收测试的工厂门机器；出厂包装与机器净质量分开声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台完整自动机器，能够接受所声明的付款或授权方式，并在无现场人员干预的情况下发放所声明的预包装商品 |
| How much | 所声明型号的一台验收合格成品机器 |
| How well | 满足制造商声明的可售商品容量、出货可靠性、电气安全、适用时的温度功能及最终验收准则 |
| How long or cycle | 一台具有声明设计使用寿命的机器；该声明描述功能和耐久性，本 PCR 仅量化工厂门生产 |
| reference_flow_link | 过程 `machine_assembly_testing_packaging` 的输出行 `finished_vending_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台验收合格成品机器的实测净质量（kg），不含出厂包装 |
| 参考产品流 | 自动售货机 `0b858929-f07a-4c83-b3f7-fa69f1fa8e0d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号标识；制造地域和基准年；机器净质量；机柜与出货配置；预包装商品类型；可售商品容量；付款或授权技术；常温、加热、制冷或组合配置；各间室温度；额定电压和频率；实测验收测试能耗；适用时的制冷剂种类和工厂充注量；设计使用寿命；出厂包装；分配方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或以其他方式核实一台验收合格机器不含出厂包装的净质量；包装必须作为单独输入行报告，不得以运输质量替代参考质量。 |
| `batch_to_machine` | 批次生产记录 | 记录所采用的质量、能量或件数 | kg、MJ 或件 | 使用型号特定批次。批次总量只能除以同一声明型号的合格机器数，并保留不合格机和在制品对账。 |
| `electricity_conversion` | 装配和验收测试电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留 kWh 电表读数并按 1 kWh = 3.6 MJ 转换；声明电压、电网地域和计量边界。 |
| `refrigerant_species_mass` | 制冷剂充注及充注损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种制冷剂必须使用单独行。对采购、退回、回收、库存变化、机器内充注量和实测释放质量进行对账；不得报告合并制冷剂量。 |

## 5. 系统边界

前景边界始于外购机柜、机械、电子、制冷及包装物品和工厂公用工程进入最终机器装配，止于合格机器及单独记录的出厂包装在工厂门准备完毕。外购物品生产属于上游；使用和报废属于下游，不计入核心结果。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购机柜/框架、机械与电子总成、可选制冷设备与制冷剂、包装、电力和有条件使用的清洗水已进入最终装配场址 |
| starting_condition_role | 工厂门模块化装配起点 |
| product_classification_scope | 全新完整自动售货机；零件和再制造机器不属于本产品身份 |
| recursive_input_rule | 进入再制造的完整旧售货机不得递归视作全新机器的外购输入；该路线应在单独披露的再制造数据集中建模 |
| upstream_dataset_requirement | 对每个外购组件、制冷剂、公用工程和包装物使用供应商和地域特定上游数据集；披露代理数据及供应商数据缺口 |
| disclosure | 声明组件供应状态、自制或外购工序、配置、制冷剂种类与充注量、测试边界、不合格机、包装状态、地域、年份和排除项 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_complete_machine` | 产品身份 | 参考输出只能是完整验收合格机器；机柜、框架、出货、支付、制冷和显示物品均为组件输入。 | `un-cpc-3-0-structure-2025` |
| `sb_factory_gate` | 核心产品系统 | 纳入最终装配、接线、场址实施的固件加载、验收测试、有条件的制冷剂充注，以及到工厂门就绪状态的出厂包装。 | `ec-jrc-eup-lot12-2007` |
| `sb_refrigerated_route` | 制冷型和组合型配置 | 仅当机器采用相应制冷路线时纳入冷凝设备、所声明制冷剂输入和分物种充注损失；披露间室温度和能耗测试方法。 | `eu-2019-2024-direct-sales-refrigeration`; `us-epa-energy-star-vending-v4-2019` |
| `sb_downstream_modules` | 配送、使用、维护和报废 | 这些阶段不计入核心工厂门结果。如纳入，应作为单独模块报告，并声明使用寿命、可售商品容量、运行模式、日能耗、制冷剂泄漏、维修及回收假设。 | `eu-2019-2024-direct-sales-refrigeration` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machine_assembly_testing_packaging` | 机器装配、验收测试、制冷剂充注及包装 | required | 所有记录；制冷和用水行仅在其声明路线条件成立时适用 | 前景生产 | 一台验收合格成品机器，以其实测净质量表示 |

### 过程：机器装配、验收测试、制冷剂充注及包装（`machine_assembly_testing_packaging`）

#### 输入

##### 产品流

###### 外购机柜和框架（`cabinet_frame`）

记录进入最终装配的外购机柜和框架总成质量。

- 选定流：自动售货机机柜和框架 `14ae5c6a-36b0-4dbd-933f-8021dc4242bf`
- 流属性/单位：Mass / kg
- 数量规则：所声明型号合格机器应分摊的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 制冷冷凝机组（`refrigeration_condensing_unit`）

仅制冷型或组合型型号记录一个外购冷凝机组总成；其 UUID 尚未解决。

- 选定流：制冷冷凝机组
- 流属性/单位：Mass / kg
- 数量规则：安装整体式冷凝机组时记录实测接收质量，否则记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格制冷型或组合型机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`eu-2019-2024-direct-sales-refrigeration`

###### 出货驱动电动机（`electric_motor`）

记录用于出货或风机功能的所声明电动机安装质量；原始物料清单中先区分多台电动机，再汇总至本同一流行。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：合格机器内电动机安装质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 主印制线路板（`printed_wire_board`）

记录主印制线路板的安装质量；在组件元数据中声明已装配或未装配电子元器件的供应状态。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：合格机器内所安装线路板质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 用户显示模组（`lcd_module`）

仅当所声明型号采用该显示技术时记录已组装 LCD 模组。

- 选定流：组装LCD模组 `daedcb7b-760e-4acf-9a1c-3adb472c4eba`
- 流属性/单位：Mass / kg
- 数量规则：安装 LCD 模组时记录其实测安装质量，否则记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 出货机构总成（`dispensing_mechanism`）

记录型号特定的螺旋、输送、柜门或其他单一出货机构总成；其 UUID 尚未解决。

- 选定流：自动售货机出货机构总成
- 流属性/单位：Mass / kg
- 数量规则：合格机器内该总成的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 支付模块总成（`payment_module`）

记录所声明型号安装的单一嵌入式支付或授权模块；其 UUID 尚未解决。

- 选定流：自动售货机支付模块总成
- 流属性/单位：Mass / kg
- 数量规则：合格机器内该模块的实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 装配与验收测试电力（`assembly_electricity`）

记录最终装配、固件加载和工厂验收测试的计量电力；上游电网排放不是本过程的直接基本流输出。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：型号特定批次应分摊的实测 kWh 乘以 3.6 MJ/kWh，再除以合格机器数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_and_test_records`
- 来源：

###### 装配清洗水（`assembly_process_water`）

仅当机器或测试工装清洗用水跨越前景边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：型号特定批次应分摊的实测供水量，否则记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：

###### R404A 制冷剂充注（`r404a_charge`）

仅当合格机器充注 R404A 时记录；不得与其他制冷剂合并。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：R404A 机器应分摊的钢瓶质量减少量，并与安装充注量、回收量和库存变化对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格 R404A 机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`us-epa-energy-star-vending-v4-2019`

###### R134a 制冷剂充注（`r134a_charge`）

仅当合格机器充注 R134a 时记录；不得与其他制冷剂合并。

- 选定流：制冷剂R134a `1ed335ef-341f-46cc-be90-6bf805244f28`
- 流属性/单位：Mass / kg
- 数量规则：R134a 机器应分摊的钢瓶质量减少量，并与安装充注量、回收量和库存变化对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格 R134a 机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`us-epa-energy-star-vending-v4-2019`

###### 丙烷 R290 制冷剂充注（`propane_r290_charge`）

仅当充注制冷剂级 R290 时记录丙烷；在前景记录中保留纯度和安全分类。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：Mass / kg
- 数量规则：R290 机器应分摊的钢瓶质量减少量，并与安装充注量、回收量和库存变化对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格 R290 机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`us-epa-energy-star-vending-v4-2019`

###### 欧标木质出厂托盘（`euro_wooden_pallet`）

仅当随机器提供欧标木托盘时记录；声明新托盘、重复使用托盘或可回收托盘状态。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量乘以每台包装机器应分摊的托盘比例，否则记录不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格包装机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

###### 瓦楞纸板出厂纸箱（`corrugated_board_boxes`）

记录随包装机器提供的成型瓦楞纸箱质量，包括附件纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：每台验收合格包装机器应分摊的实测瓦楞纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格包装机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_mass`
- 来源：`ec-jrc-eup-lot12-2007`

##### 废物流

无废物流进入最终装配过程。

##### 基本流

无基本流进入最终装配过程。

#### 输出

##### 产品流

###### 验收合格的自动售货机成品（`finished_vending_machine`）

按出厂包装前净质量记录验收合格的完整机器。

- 选定流：自动售货机 `0b858929-f07a-4c83-b3f7-fa69f1fa8e0d`
- 流属性/单位：Mass / kg
- 数量规则：一台验收合格成品机器的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_machine_acceptance`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 装配清洗废水（`assembly_wastewater`）

仅当使用工艺水时记录送往场内或场外处理的废水；保留水质组成和处理去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：型号特定批次应分摊的实测废水质量，否则记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：

##### 基本流

###### R404A 充注损失至大气（`r404a_charging_loss`）

仅 R404A 路线记录 R404A 直接释放；该基本流 UUID 尚未解决。

- 选定流：R404A制冷剂排放至未指定大气
- 流属性/单位：Mass / kg
- 数量规则：分物种充注平衡中扣除已收集物质后的 R404A 正值未核销质量，否则记录不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格 R404A 机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-2019-2024-direct-sales-refrigeration`

###### HFC-134a 充注损失至大气（`r134a_charging_loss`）

仅 R134a 路线记录 HFC-134a 直接释放。TianGong 未为该 UUID 提供中文 `baseName`，因此保留英文正式名称。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分物种充注平衡中扣除已收集物质后的 R134a 正值未核销质量，否则记录不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格 R134a 机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-2019-2024-direct-sales-refrigeration`

###### 丙烷 R290 充注损失至大气（`propane_charging_loss`）

仅 R290 路线记录丙烷直接释放；该基本流 UUID 尚未解决。

- 选定流：丙烷（R290）排放至未指定大气
- 流属性/单位：Mass / kg
- 数量规则：分物种充注平衡中扣除已收集物质后的丙烷正值未核销质量，否则记录不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格 R290 机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-2019-2024-direct-sales-refrigeration`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_models` | 混合型号生产 | 优先采用型号特定生产订单、计量表、工作中心和物料清单，避免在归一化前汇总不同机器。 |  |
| `al_shared_operations` | 共用装配、测试及包装负荷 | 按有记录的物理因果驱动因素分配共用负荷，例如型号特定周期时间、实测测试电力、组件质量或包装件数。仅当不同型号消耗实质相同工序时，才可按合格件数分配。 |  |
| `al_rejected_units` | 不合格及返工机器 | 将返工和不合格机负荷归入导致这些负荷的生产批次；不得在无披露的情况下从合格产出中移除。 |  |
| `al_no_recycling_credit` | 废料、可回收包装和回收制冷剂 | 存在回收物跨越边界时应单独报告。除非另行声明的研究方法要求，否则核心工厂门数据集内不得赋予避免负荷或回收信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_and_packaging_mass` | `machine_assembly_testing_packaging` | 外购组件及出厂包装 | 物料清单、收货单、称量记录 | model_id; component_id; flow_name; supplier; supply_state; quantity; unit_mass; total_mass; pallet_share; reuse_state | 将受控物料清单与收货记录对账，并称量代表性组件或包装单元 | kg 和件 | 每次型号修订；每月对账 | 当前型号修订及报告年 | 最终装配场址及所声明供应商 | 对合格型号机器汇总同一流质量；不同组件身份保持分开 | 校准秤记录、供应商规格、收货单及版本受控物料清单 |
| `cp_utility_and_test_records` | `machine_assembly_testing_packaging` | 装配及测试电力 | 分表和测试日志 | meter_id; start_kWh; end_kWh; model_id; accepted_units; rejected_units; test_mode; voltage; timestamp | 读取专用电表，或按有日志的型号特定周期时间分配共用电表 | kWh | 每个生产批次 | 代表性生产期，通常至少连续 12 个月 | 最终装配及验收测试边界 | 扣除已核实的非生产负荷，kWh 转换为 MJ，并除以合格型号机器数 | 电表校准、时间日志、生产订单及对账记录 |
| `cp_water_balance` | `machine_assembly_testing_packaging` | 工艺水和废水 | 计量表、发票及排放记录 | inlet_mass_or_volume; wastewater_mass_or_volume; density; batch_id; model_id; treatment_destination; composition | 仅计量工艺用水和废水，或对校准储罐/称量记录进行对账；生活用水在边界外 | kg，体积转换采用实测密度 | 每批或每月 | 与生产清单相同期间 | 最终装配及测试工装清洗边界 | 仅将装配或测试工装清洗记录归入型号特定批次 | 计量表校准、发票、采样结果及排放联单 |
| `cp_refrigerant_mass_balance` | `machine_assembly_testing_packaging` | 制冷剂充注及释放 | 钢瓶称量、充注站及回收日志 | species; cylinder_open_mass; cylinder_close_mass; purchased_mass; returned_mass; recovered_mass; inventory_change; accepted_installed_charge; rejected_unit_charge; captured_loss; measured_release | 使用校准秤和充注站记录，分别对 R404A、R134a 和丙烷 R290 进行闭合质量平衡 | kg | 每个钢瓶和生产批次 | 与制冷型号生产相同期间 | 最终制冷剂充注及回收边界 | 分物种对账；安装充注量归入合格机器，正值未捕集差额归入相应基本流排放行 | 秤校准、钢瓶编号、机器序列号、检漏及回收记录 |
| `cp_finished_machine_acceptance` | `machine_assembly_testing_packaging` | 验收合格参考产品 | 称量、序列号及验收记录 | model_id; serial_number; net_mass; packaged_mass; vendible_capacity; configuration; temperature_class; voltage; frequency; test_energy; refrigerant; charge; acceptance_result | 每台称量，或对型号采用有依据的抽样，并将验收结果关联生产订单 | kg 和声明性能单位 | 每台合格机器或受统计控制批次 | 当前型号修订及报告年 | 最终装配及验收测试边界 | 仅在实质未变的同一型号内平均净质量；参考数量采用声明型号值 | 校准秤、验收清单、安全测试及型号规格 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | 批次组件、公用工程、水和废物总量 | 归一化量 = 应归属批次量 / 同型号合格机器数；保留不合格机和在制品对账 | 应归属批次量；同型号合格机器数；不合格机器；在制品 | 每台验收合格成品机器的数量 |  |
| `calc_electricity_mj` | `assembly_electricity` | electricity_MJ = 净计量 kWh × 3.6 / 同型号合格机器数 | 起止 kWh；排除负荷；同型号合格机器数 | 每台验收合格成品机器的 MJ |  |
| `calc_refrigerant_charge_and_loss` | 制冷剂输入及分物种充注损失行 | 制冷剂净用量 = 期初库存 + 采购 - 期末库存 - 退回；未捕集损失 = 净用量 - 合格机安装充注量 - 不合格机充注量 - 回收或捕集质量。负值或重大不平衡结果必须调查。 | 分物种钢瓶、库存、安装充注、回收及释放记录 | 每台验收合格机器的安装充注量和未捕集损失（kg） | `eu-2019-2024-direct-sales-refrigeration` |
| `calc_reference_mass_reconciliation` | 参考输出及包装 | 包装质量校验 = 机器净质量 + 木托盘分摊量 + 瓦楞纸箱 + 其他单独声明包装；无法解释的差异必须更正或披露 | 净质量和包装质量称量记录；各包装行 | 对账后的参考质量和包装披露 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 将产品名称、型号标识、序列号或批次、可售商品容量、配置和验收结果关联到称量后的参考输出。 | 型号规格、生产订单及验收记录 |
| `dq_completeness` | 前景清单 | 将所有接收的组件、公用工程、制冷剂、包装和废物记录与型号特定生产订单对账；解释排除项和数据缺口。 | 物料清单对账及质量/能量平衡 |
| `dq_temporal` | 报告期间 | 使用代表所声明生产年份和当前型号修订的数据；披露停产、样机和异常返工期。 | 有日期计量表、订单及修订历史 |
| `dq_geography_technology` | 上游输入 | 匹配供应商地域、组件供应状态、电网、制冷技术和包装重复使用状态；披露所有代理数据。 | 供应商声明及数据集元数据 |
| `dq_refrigerant` | 制冷路线 | 保留制冷剂种类、纯度/等级、钢瓶身份、安装充注量和直接充注损失；不得跨物种汇总。 | 充注站及校准秤对账 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | 参考流 | 确认输出 UUID 是 CPC 43934 完整机器而非机柜、框架或机械零件，并确认参考数量等于所声明型号的实测净质量。 | `un-cpc-3-0-structure-2025` |
| `vr_atomic_inventory` | 每个清单行 | 拒绝集合标签和合并的公用工程、组件、制冷剂、废物或排放；每行必须识别一个物理交换及一个适用属性/单位。 |  |
| `vr_component_completeness` | 外购总成 | 将机柜、适用时的冷凝机组、电动机、线路板、显示模组、出货机构和支付模块与型号物料清单对账；新增材料组件必须披露，不得隐藏在合并行中。 | `ec-jrc-eup-lot12-2007` |
| `vr_energy` | `assembly_electricity` | 核实计量边界、kWh 至 MJ 转换、型号特定分配，以及使用阶段电力的排除。 | `eu-2019-2024-direct-sales-refrigeration` |
| `vr_refrigerant_route` | 制冷剂输入和输出 | 每个制冷型号只能采用与声明物种一致的制冷剂行，对充注和损失进行对账，并拒绝合并制冷剂行或分配至错误大气区室的排放。 | `us-epa-energy-star-vending-v4-2019` |
| `vr_bilingual_uuid` | 带 UUID 的行 | 确认中英文使用相同 UUID，且中文使用 TianGong 直读 `baseName`；HFC-134a 因 TianGong 未提供中文 `baseName` 而保留英文名称。 |  |
| `vr_range_evidence` | 数量范围 | 外部推断范围必须至少有两个独立原始来源，且系统边界、功能单位和产品状态兼容；规格限值不得作为经验范围。 |  |
| `vr_boundary_disclosure` | 数据集画像 | 确认核心结果止于工厂门就绪状态，任何配送、使用、维护或报废情景均作为单独模块披露。 | `eu-2019-2024-direct-sales-refrigeration` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由经核实前景生产记录生成的产品特定工厂门二手数据集 |
| downstream_use | 所声明自动售货机制造的背景数据集；输入至另行参数化的配送、使用、维护和报废生命周期模型 |
| allowed_use | 在完整机器范围、型号配置、参考质量、地域、年份、分配规则和包装边界相同的条件下比较；以单独披露的下游模块开展情景建模 |
| excluded_use | 通用使用能耗主张；归用于再制造机器或零件；未归一化情况下比较不同出货、容量或温度功能；供应状态不同时替代供应商组件数据 |
| required_metadata | PCR id 和版本；型号及配置；地域及年份；净质量和包装质量；可售商品容量；出货及支付技术；温度功能；电压/频率；测试能耗；制冷剂及充注量；设计寿命；上游数据集清单；分配；排除项；数据所有者 |
| required_quality_disclosure | 一手数据覆盖率；计量表和秤校准；型号/批次对账；供应商数据占比；代理数据；制冷剂平衡；不合格机；缺失范围；不确定性及审查状态 |
| update_trigger | 型号或物料清单修订；新出货/支付/制冷技术；制冷剂替代；净质量、制造电力或主要组件质量变化超过 10%；供应商地域变化；包装变化；新审查 UUID；或新增独立范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-06） | CPC 43934 正式产品身份及完整机器分类措辞 |
| `samr-gbt-4706-72-2024` | standard | 国家市场监督管理总局，GB/T 4706.72-2024《家用和类似用途电器的安全 第72部分：商用售卖机的特殊要求》。https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=4BD2A369B6E03605A53E8E812ECE4B1E（检索日期 2026-09-06） | 专业中文售卖机术语及商用售卖机范围背景 |
| `eu-2019-2024-direct-sales-refrigeration` | standard | 欧盟委员会，Commission Regulation (EU) 2019/2024，关于具有直接销售功能的制冷器具生态设计要求。https://eur-lex.europa.eu/eli/reg/2019/2024/oj/eng（检索日期 2026-09-06） | 制冷自动售货机定义、使用能耗重要性、制冷剂披露、维修/回收背景及日能耗字段 |
| `ec-jrc-eup-lot12-2007` | official_guidance | 欧盟委员会生态设计准备研究，Lot 12: Commercial refrigerators and freezers，最终报告，2007-12。https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/contentype/product_group_documents/1581682650/BIO_EuP_Lot_12_Final_Report.pdf（检索日期 2026-09-06） | 自动售货机模块化组件分解、物料清单记录字段、包装及生产/使用阶段区分；不用于经验范围 |
| `us-epa-energy-star-vending-v4-2019` | standard | 美国环保署 ENERGY STAR，Product Specification for Refrigerated Beverage Vending Machines，Version 4.0，2019-07-30。https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20Refrigerated%20Beverage%20Vending%20Machines%20Version%204.0%20Final_1.pdf（检索日期 2026-09-06） | 制冷型和组合型配置限定、可售商品容量和测试字段，以及 R404A、R290、R134a 制冷剂示例；不用于经验范围 |
