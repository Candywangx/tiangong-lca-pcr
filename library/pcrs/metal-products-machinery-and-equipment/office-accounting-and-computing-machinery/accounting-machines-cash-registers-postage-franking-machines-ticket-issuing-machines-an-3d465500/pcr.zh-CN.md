---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.accounting-machines-cash-registers-postage-franking-machines-ticket-issuing-machines-an-3d465500
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 会计机、现金出纳机、邮资盖印机、售票机及装有计算装置的类似机器（销售点终端、自动柜员机及类似机器除外）

## 1. 范围与适用性

本 PCR 适用于以制造场址大门为边界的会计机、现金出纳机、邮资盖印机、售票机或类似成品机器的生产；此类机器的界定功能包含计算装置。适用产品包括以完整、可销售状态交付的电子式、机电式及混合式配置。

销售点终端、自动柜员机以及归入 CPC 45141 之外的类似机器不在本 PCR 范围内。独立打印机、自动售货机、通用计算机、单独销售的散件，以及流通、安装、使用、维护和生命末期阶段均不在默认边界内。研究仅可在明确声明新增阶段并将其清单分开记录的情况下扩展至制造场址大门之外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.accounting-machines-cash-registers-postage-franking-machines-ticket-issuing-machines-an-3d465500 |
| classification_refs | CPC 3.0: 45141 |
| covered_products | 会计机；现金出纳机；邮资盖印机；售票机；装有计算装置的类似机器 |
| excluded_products | 销售点终端；自动柜员机；类似的 CPC 45142 机器；独立打印机；自动售货机；零散替换部件 |
| representative_product | 一台完整的电子式或机电式计算交易机器，具有产品特定的控制装置、显示器或指示器、电源和外壳，以及所声明的打印、邮资盖印、出票、现金抽屉或电池模块 |
| production_route | 接收外购的产品特定部件和组件，进行装配、适用时编程、功能测试、检验和包装 |
| market_state | 制造场址大门处的合格成品机器；机器净质量、随附附件和包装分别声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明的会计、现金记录、邮资盖印、出票或类似的以计算功能为支撑的交易功能 |
| How much | 一台完整的合格机器 |
| How well | 满足制造商针对指定配置声明的计算、输入/输出、安全和功能测试规范 |
| How long or cycle | 在制造场址大门处交付的一台成品；运行寿命和使用阶段的交易次数不属于本从摇篮到大门功能单位 |
| reference_flow_link | 参考流为实现该功能单位的一台完整机器经测量得到的净质量，单位为 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台完整合格机器经测量得到的净质量，单位为 kg |
| 参考产品流 | 包含计算装置的会计机、收银机、邮资折叠机、出票机及类似机器（销售点终端机、自动取款机及类似机器除外） `07f6c98e-d1a3-41f2-984b-8b5e59191916` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；型号和配置；计算与交易功能；随附显示器或指示器；随附打印、邮资盖印或出票机构；是否含现金抽屉；是否含电池及电池化学体系；随附附件；机器净质量；净质量不含包装；制造场址及地理区域；生产期；技术与测试路径 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `unit_rule_1` | 参考机器 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或以其他方式核实一台合格机器不含运输包装的净质量；包括内置模块以及作为所声明机器组成部分随附的附件。 |
| `unit_rule_2` | 部件和包装输入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用产品特定的实测单件质量，将供应商计数换算为安装或包装质量，并保留计数、样本量和换算记录。 |
| `unit_rule_3` | 装配用电 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表计量的电能，并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；注明电压等级、电网地理区域及是否包含损耗。 |
| `unit_rule_4` | 质量平衡 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化前，按同一报告期核对部件和包装接收量、库存变化、成品产出、返工退回以及每一种源头分类废物流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至装配场址的产品特定外购部件、组件、包装制品和电力 |
| starting_condition_role | 上游生产由供应商特定数据集或适宜的次级数据集表征的前景制造输入 |
| product_classification_scope | 仅限 CPC 45141 成品机器；CPC 45142 终端和自动柜员机以及单独销售的散件不属于本 PCR 身份 |
| recursive_input_rule | 若将一台完整的 CPC 45141 机器作为翻新或集成的输入，应将其记录为独立的上游产品输入，不得对该输入递归应用本前景装配清单 |
| upstream_dataset_requirement | 每种外购部件、组件、包装制品和电力输入均需使用在地理和技术方面具有代表性的上游数据集；必须披露代理数据，且代理不得改变流身份 |
| disclosure | 声明准确的产品配置、随附模块和附件、BOM 覆盖率、净质量和包装后质量、场址、期间、分配、排除阶段、数据缺口及代理数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 纳入接收、产品特定装配、实施的编程、功能测试、检验、可归属于报告期的返工，以及直至制造场址大门的最终包装。 | `eu-environmental-footprint-2021` |
| `boundary_rule_2` | 外购输入 | 使用关联的上游数据集，纳入每种环境相关部件、组件、包装制品和能源输入的上游生产；不得将外购组件视为无环境负荷。 | `eu-environmental-footprint-2021` |
| `boundary_rule_3` | 产品特定数据 | 使用所声明型号的 BOM，以及企业特定的装配、测试、包装、产出和废物数据；仅当披露所代表的产品系列及其加权方法时，方可采用产品组合平均 BOM。 | `eu-environmental-footprint-2021` |
| `boundary_rule_4` | 排除阶段 | 默认数据集排除制造场址大门后的流通、安装、使用阶段电力和耗材、维护及生命末期；研究范围包含这些阶段时，应将其作为独立阶段披露和建模。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machine_assembly_test_pack` | 部件装配、功能测试、检验、返工和包装 | `required` | 成品机器在制造场址大门处始终纳入；条件部件卡片仅在所声明型号包含该部件时适用 | 前景生产 | 一台完整合格的参考机器，按实测净质量归一化 |

### 过程：部件装配、功能测试、检验、返工和包装（`machine_assembly_test_pack`）

#### 输入

##### 产品流

###### 已装配印制电路板组件（`pcb_assembly`）

记录产品特定 BOM 中已装配控制和计算电路板组件的实测安装质量。

- 选定流：电子元器件及印制电路板组件 `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- 流属性/单位：质量 / kg
- 数量规则：根据 BOM 接收记录和装配领料记录取得产品特定的安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 注塑塑料外壳部件（`plastic_housing`）

记录模塑塑料外壳部件的实测安装质量，并与包装塑料分开。

- 选定流：注塑塑料外壳部件 `fef5eb63-58bf-4bfb-9da9-9f5a3aa73084`
- 流属性/单位：质量 / kg
- 数量规则：根据 BOM 接收记录和装配领料记录取得产品特定的安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 钢板机器底盘部件（`steel_chassis`）

适用时记录钢板底盘或内部支撑框架的安装质量；TianGong 流 UUID 尚未解决。

- 选定流：钢板机器底盘部件
- 流属性/单位：质量 / kg
- 数量规则：产品特定的安装质量；仅在存在钢板底盘或内部支撑框架时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 已组装液晶显示模组（`display_module`）

仅在所声明型号包含 LCD 时记录 LCD 模组的安装质量；其他指示技术需要单独的原子流行。

- 选定流：组装LCD模组 `daedcb7b-760e-4acf-9a1c-3adb472c4eba`
- 流属性/单位：质量 / kg
- 数量规则：产品特定的安装质量；仅在存在 LCD 模组时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 键盘组件（`keypad_assembly`）

适用时记录完整键盘或按键开关输入组件的安装质量；TianGong 流 UUID 尚未解决。

- 选定流：键盘组件
- 流属性/单位：质量 / kg
- 数量规则：产品特定的安装质量；仅在存在键盘或按键开关组件时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 集成式热敏打印机构（`printer_mechanism`）

当机器集成收据打印、邮资标记或票据打印功能时，记录其机构安装质量；排除制造场址大门后使用的纸张耗材。

- 选定流：集成式热敏打印机构
- 流属性/单位：质量 / kg
- 数量规则：产品特定的安装质量；仅在存在集成式热敏打印机构时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 电子设备电源单元（`power_supply_unit`）

记录机器随附的内部或专用外置电源单元的安装质量；TianGong 流 UUID 尚未解决。

- 选定流：电子设备电源单元
- 流属性/单位：质量 / kg
- 数量规则：BOM 中产品特定的安装或随附质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 带连接器的绝缘电缆组件（`cable_assembly`）

记录安装和随附的电缆组件质量，包括属于所声明产品组成部分的随附电源线；TianGong 流 UUID 尚未解决。

- 选定流：带连接器的绝缘电缆组件
- 流属性/单位：质量 / kg
- 数量规则：BOM 中产品特定的安装和随附质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 钢螺钉（`steel_screws`）

记录用于紧固机器的成品钢螺钉安装质量；其他材料的紧固件需要单独的原子行。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：质量 / kg
- 数量规则：BOM 计数乘以经核实的平均单颗螺钉质量所得的产品特定安装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 现金抽屉组件（`cash_drawer`）

仅在现金抽屉组件与所声明现金出纳机配置集成或作为其组成部分随附时记录其质量；TianGong 流 UUID 尚未解决。

- 选定流：现金抽屉组件
- 流属性/单位：质量 / kg
- 数量规则：产品特定的安装或随附质量；仅在现金抽屉属于所声明机器时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 可充电锂离子电池组（`battery_pack`）

仅在包含可充电锂离子电池组时记录其安装质量；其他电池化学体系需要单独的原子行。

- 选定流：可充电锂离子电池组
- 流属性/单位：质量 / kg
- 数量规则：产品特定的安装质量；仅在存在可充电锂离子电池组时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`eu-environmental-footprint-2021`

###### 瓦楞纸板运输箱（`corrugated_box`）

记录所声明可销售单元所用瓦楞纸板箱的质量；分配至多台机器的瓦楞运输包装除非另行分摊，否则不纳入。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：可归属于一台参考机器的实测纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-environmental-footprint-2021`

###### 发泡聚乙烯包装衬垫（`foam_insert`）

适用时记录发泡聚乙烯防护衬垫的质量；TianGong 流 UUID 尚未解决。

- 选定流：发泡聚乙烯包装衬垫
- 流属性/单位：质量 / kg
- 数量规则：可归属于一台参考机器的实测衬垫质量；仅在使用该泡沫化学体系和形态时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-environmental-footprint-2021`

###### 低密度聚乙烯包装袋（`polyethylene_bag`）

适用时记录低密度聚乙烯防护袋的质量；TianGong 流 UUID 尚未解决。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：质量 / kg
- 数量规则：可归属于一台参考机器的实测包装袋质量；仅在使用 LDPE 袋时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-environmental-footprint-2021`

###### 印刷纸质说明书插页（`printed_manual`）

记录随机器交付的印刷纸质说明书质量；仅提供电子文档时，本行没有物理交换。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：质量 / kg
- 数量规则：可归属于一台参考机器的实测印刷插页质量；仅在随附纸质说明书时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-environmental-footprint-2021`

###### 装配、测试和包装用电（`assembly_electricity`）

记录装配、编程、功能测试、检验、返工和包装的电表计量外购电力，不包括已计入外购部件数据集的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：分配至本过程并按合格产出归一化的电表计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：`eu-environmental-footprint-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考机器成品（`reference_machine`）

记录离开本过程的合格成品机器的实测净质量，不含运输包装质量。

- 选定流：包含计算装置的会计机、收银机、邮资折叠机、出票机及类似机器（销售点终端机、自动取款机及类似机器除外） `07f6c98e-d1a3-41f2-984b-8b5e59191916`
- 流属性/单位：质量 / kg
- 数量规则：一台完整合格机器的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`un-cpc-3-0-structure-2025`；`eu-environmental-footprint-2021`

##### 废物流

###### 不合格的已装配印制线路板（`populated_board_waste`）

记录装配或测试过程中被丢弃并送往所声明处理路径的已装配电路板实测质量；排除退回可用库存的电路板。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：质量 / kg
- 数量规则：扣除返工和供应商退回后的源头分类废物实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-environmental-footprint-2021`

###### 注塑塑料外壳废料（`plastic_housing_scrap`）

记录因损坏、装配或检验而丢弃并进行源头分类的模塑外壳部件；TianGong 流 UUID 尚未解决。

- 选定流：注塑塑料外壳废料
- 流属性/单位：质量 / kg
- 数量规则：扣除返工和供应商退回后的源头分类外壳部件废物实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-environmental-footprint-2021`

###### 钢制底盘废料（`steel_scrap`）

记录装配或拒收期间产生、进行源头分类并送往所声明处理路径的钢制底盘和支撑框架废料。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：质量 / kg
- 数量规则：扣除返工和供应商退回后的源头分类钢废物实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-environmental-footprint-2021`

###### 瓦楞纸板包装废物（`cardboard_waste`）

记录装配场址因产品包装损坏或裁切而产生并进行源头分类的瓦楞纸板废物。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 / kg
- 数量规则：可归属于报告期的源头分类纸板废物实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整合格的参考机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-environmental-footprint-2021`

##### 基本流

本 PCR 不为最终装配通用规定直接基本流。任何跨越环境边界的场址实测排放，均须作为化学物质明确的独立基本流行添加，不得以笼统排放类别替代。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共用过程和仪表 | 首先细分生产线、工作中心、测试台和仪表，仅向所声明机器分配可直接归属于该机器的输入和输出。 | `eu-environmental-footprint-2021` |
| `allocation_rule_2` | 剩余共用负荷 | 若无法细分，采用有记录的因果物理驱动因素，例如机器工时、测试时间或计量能源；若不存在直接因果驱动因素，则采用相关物理关系并披露敏感性。 | `eu-environmental-footprint-2021` |
| `allocation_rule_3` | 返工和废料 | 将返工能源和材料损失分配给造成这些损失的报告期产出。在工厂边界报告废物，不计入避免负荷收益；处理负荷和任何回收收益应计入所选下游废物处理模型。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `machine_assembly_test_pack` | 已安装产品部件和组件 | 批准的 BOM、采购接收记录、领料记录、计数转质量样本 | model_id; component_id; description; supplier; quantity_per_unit; unit_mass; installed_mass; return_mass; inclusion_condition | 将批准的产品特定 BOM 与领料、退回、工程变更和实测单件质量进行核对 | kg | 每种型号或工程版本；每个报告期至少核对一次 | 数据集所代表的完整生产期 | 生产所声明型号的所有装配线和班次 | 汇总合格产出的安装质量；扣除可用退回；按合格机器台数归一化 | BOM 版本批准、秤校准、抽样记录、领料/退回核对 |
| `cp_packaging_bom` | `machine_assembly_test_pack` | 包装制品和印刷插页 | 包装规范、包装领料记录、单件质量样本 | model_id; packaging_item; material; quantity_per_unit; unit_mass; packed_units; damaged_mass | 称量每一种具体包装制品，并将领料数量与包装产出核对 | kg | 每次包装版本变更；每个报告期至少核对一次 | 数据集所代表的完整生产期 | 所声明型号的所有包装线 | 将制品质量归属于一个包装单元；散装运输包装单独报告 | 批准的包装规范、秤校准、样本日志、领料核对 |
| `cp_electricity` | `machine_assembly_test_pack` | 装配、测试、返工和包装用电 | 经校准仪表和生产日志 | meter_id; opening_reading; closing_reading; unit; line; shift; model; conforming_units; rework_units; downtime_exclusion | 读取专用仪表；共用时保留分配驱动因素和核对记录 | kWh and MJ | 至少每月一次，并在每次重大生产变更时记录 | 与产出和废物相同的生产期 | 所有纳入的装配、测试、检验、返工和包装作业 | 电表净用量扣除有记录的边界外负荷；按第 7 节分配；除以合格产出；将 kWh 换算为 MJ | 仪表校准、账单、读表日志、分配工作表、生产日志 |
| `cp_output_mass` | `machine_assembly_test_pack` | 合格参考机器产出 | 经校准秤和放行生产记录 | model_id; serial_or_batch; net_mass; included_accessories; packaging_mass; released_count | 对代表性样本或每台机器称量，并与质量放行记录核对 | kg | 每种型号/配置及每个报告期 | 数据集所代表的完整生产期 | 所有纳入的生产线和班次 | 计算配置特定的平均净质量并乘以放行数量；包装单独记录 | 秤校准、抽样计划、放行记录、序列号/批次可追溯性 |
| `cp_waste_mass` | `machine_assembly_test_pack` | 源头分类生产废物 | 经校准废物秤、转移联单、返工及供应商退回日志 | waste_type; source_operation; gross_mass; tare_mass; net_mass; destination; treatment_route; return_or_rework_status | 称量每种源头分类废物流，并核对转移、返工和供应商退回 | kg | 每次转移；按月及报告期汇总 | 与输入和产出相同的生产期 | 所有纳入的装配、测试、返工和包装区域 | 按具体废物身份和去向汇总净丢弃质量；排除可用返工和供应商退回 | 秤校准、转移联单、去向证据、返工/退回核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 计数转质量的部件和包装记录 | installed_or_packed_mass = verified_quantity_per_unit × measured_mean_unit_mass | 经批准的单位数量；经校准的单件质量样本 | 每台参考机器的 kg | `eu-environmental-footprint-2021` |
| `calc_rule_2` | 电力 | electricity_MJ_per_machine = (net_kWh × 3.6 × allocation_fraction) / conforming_machine_count | 仪表读数；排除负荷；分配驱动因素；合格产出 | 每台参考机器的 MJ | `eu-environmental-footprint-2021` |
| `calc_rule_3` | 废物 | waste_kg_per_machine = source_separated_discarded_mass / conforming_machine_count | 废物净质量；返工和退回扣除量；合格产出 | 每台参考机器的废物 kg | `eu-environmental-footprint-2021` |
| `calc_rule_4` | 质量平衡 | mass_balance_difference = total material inputs - finished net product - shipped packaging - source-separated wastes - verified inventory change and returns | 一个期间内所有含质量记录 | 有记录的质量平衡差异和调查结果 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_rule_1` | 产品身份 | 将每项记录关联至所声明的子类、型号、配置、BOM 版本、生产场址和报告期。 | 批准的 BOM、型号规范、生产和放行记录 |
| `dq_rule_2` | 完整性 | 计入所声明边界内所有已知的材料和能源输入、产品、废物及直接排放；解释每项排除或数据缺口。 | BOM 核对、仪表覆盖、废物登记、质量平衡、排除日志 |
| `dq_rule_3` | 测量 | 使用经校准的仪表和秤，并保留计数转质量的抽样方法和不确定性。 | 校准证书、抽样记录、仪表和秤日志 |
| `dq_rule_4` | 代表性 | 使上游数据集与部件身份、生产技术、供应商或市场地理区域及时间相匹配；披露每项代理。 | 供应商数据、数据集元数据、代理清单、敏感性评估 |
| `dq_rule_5` | 一致性 | 所有行采用相同期间、合格产出分母、分配方法、净质量定义和包装分离方法。 | 计算工作簿、期间核对、审查清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品分类 | 确认所声明产品属于 CPC 45141，且不是 POS 终端、自动柜员机或类似的 CPC 45142 机器。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | 参考流 | 确认一台完整合格机器、其净质量、随附附件以及单独报告的包装质量。 |  |
| `validation_rule_3` | BOM | 确认 BOM 特定于所声明型号/配置，并核对工程变更、领料、退回和条件模块。 | `eu-environmental-footprint-2021` |
| `validation_rule_4` | 清单原子性 | 确认每个选定流均为一个具体的物理、废物或能源交换，并且每个无精确 UUID 的行仍明确标记为未解决。 |  |
| `validation_rule_5` | 能源 | 确认电力仅覆盖纳入作业，使用所披露的电网和电压边界，并一致地将 kWh 换算为 MJ。 | `eu-environmental-footprint-2021` |
| `validation_rule_6` | 质量平衡 | 对同一期间的材料输入、成品净质量、随附包装、废物、退回、返工和库存变化进行核对；调查并披露残余差异。 | `eu-environmental-footprint-2021` |
| `validation_rule_7` | 分配 | 确认在剩余物理分配之前已尝试细分，并保留驱动因素、计算和敏感性。 | `eu-environmental-footprint-2021` |
| `validation_rule_8` | 范围 | 确认流通、安装、使用、维护和生命末期已排除或单独建模并披露。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于生产一台所声明 CPC 45141 机器的产品特定制造场址大门 `secondary_dataset` 或经审查的 `background_dataset` |
| downstream_use | 需要核算会计机、现金出纳机、邮资盖印机、售票机或类似计算交易机器制造过程的产品系统模型 |
| allowed_use | 针对所声明产品子类、型号/配置、场址/地理区域、技术和生产期的从摇篮到大门建模；仅在审查代表性后用于更宽泛范围 |
| excluded_use | POS 终端、自动柜员机、CPC 45142 机器、独立打印机、自动售货机、散件、使用阶段服务声明，以及未经协调的重大不同配置间比较声明 |
| required_metadata | 规范 PCR id；CPC 参考；产品子类；型号/配置；随附模块/附件；功能测试规范；净质量和包装后质量；场址/地理区域；技术；生产期；BOM 覆盖；分配；上游数据集；未解决 UUID；排除项 |
| required_quality_disclosure | 一手数据占比；仪表和秤覆盖；BOM 和质量平衡核对；时间、地理和技术代表性；代理清单；不确定性；条件模块处理；审查状态 |
| update_trigger | 产品或包装重新设计；影响所代表质量或技术的 BOM 或供应商变更；新的显示器、打印机、现金抽屉、电池或电源架构；场址/过程变更；分配变更；重大数据缺口解决；较早生产数据不再具有代表性 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（已核验原始 CSV；检索日期：2026-09-08） | CPC 45141 的正式身份以及对 CPC 45142 产品的明确排除 |
| `eu-environmental-footprint-2021` | `official_guidance` | 欧盟委员会，《欧盟委员会建议 (EU) 2021/2279》附件 1 至 2，产品环境足迹方法，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（已核验原始 PDF；检索日期：2026-09-08） | 产品特定 BOM、企业特定制造数据、完整性、分配层级、前景采集和数据质量 |
