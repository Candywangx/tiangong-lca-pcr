---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或钢制非电动家用烹饪器具及暖碟器

## 1. 范围与适用性

本规则为一台已验收、完整的铁或钢制非电动家用烹饪器具或暖碟器编制工厂门口前景数据包。家用燃气灶具和炉具是代表性路线；申报配置也可采用其他非电动烹饪或暖碟设计。须记录燃料、燃烧器或加热结构、材料清单、表面处理和销售状态。单独销售的替换零件、电动器具、铜制主体器具、使用阶段的烹饪燃料以及报废处理不属于本工厂门口数据包。类别区分依据 `un-cpc-3-2025`；按产品收集材料清单的要求依据 `eu-jrc-cooking-appliances-2020`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel |
| classification_refs | CPC 3.0 44821，仅作为分类背景；不表示已接受映射 |
| covered_products | 完整的铁或钢制非电动家用烹饪器具及暖碟器，包括家用燃气灶具和炉具 |
| excluded_products | 电动烹饪器具；CPC 44822 的非烹饪空间加热器；CPC 44832 的单独销售零件；CPC 42912 的铜制主体烹饪或加热器具；商用烹饪设备 |
| representative_product | 装有燃烧器和控制件、已验收的完整铁或钢制家用燃气灶具 |
| production_route | 钢制外壳加工、视路线而定的表面处理、外购功能部件装配、验收测试及工厂门口包装 |
| market_state | 工厂门口已完工并验收的器具，声明销售包装；运输包装不计入产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 不采用电加热、用于烹饪食物或为盘碟保温的完整家用器具 |
| How much | 申报型号和配置的一台已验收成品设备 |
| How well | 满足制造商申报的烹饪或保温性能及适用验收测试；已识别燃料和安装部件 |
| How long or cycle | 以工厂验收时点为准；生产参考流不预设使用寿命或烹饪循环 |
| reference_flow_link | `finished_appliance` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 烹饪用具和暖碟器，非电动，家用，铁质或钢质 `6cc6000a-58ba-4ba3-bfa1-94ee239070ff` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置；燃料或热源；铁或钢制主体牌号；已安装的燃烧器或保温组件；涂装路线；销售包装状态；制造场址和时段 |

前景数据生产者应对同一已验收配置测量 M。清单按每台验收成品设备采集，并以 M kg 表示参考产品；本规则不预设通用器具质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | `fabrication_electricity` | Net calorific value | MJ | 以 MJ 记录申报加工和装配过程消耗的交流电；对以 kWh 计量的记录按 1 kWh = 3.6 MJ 换算，并保留原始读数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铁或钢板材及外购燃烧器部件进入前景工厂；其上游生产另接背景数据集 |
| starting_condition_role | 第一个纳入的工厂过程门口的外购产品投入 |
| product_classification_scope | CPC 44821 完整器具；另行供应的 CPC 44832 零件属于投入部件 |
| recursive_input_rule | 若购入同类完整器具作为投入，应披露并链接其上游数据集，不得将其递归视为新生产的工厂产出 |
| upstream_dataset_requirement | 对外购金属、功能部件、涂料、燃气、电力和包装链接上游数据集，并记录地域和技术 |
| disclosure | 声明场址、时段、型号、配置、燃料、工艺路线、外购与自制部件、质量 M 及所有排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 工厂门口前景数据包 | 纳入截至已验收器具放行的加工、按路线进行的表面处理、总装、验收测试、可归属的工厂能源、废钢和包装。 | `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007` |
| `boundary_exclusions` | 下游阶段 | 本工厂门口清单不含用户烹饪燃料、配送、安装和报废处理；如另建下游情景，应予披露。 | `eu-jrc-cooking-appliances-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `housing_fabrication` | 钢制外壳加工 | conditional | 申报工厂对板材外壳实施切割和成形时纳入 | 前景切割、成形与连接 | 每台验收成品设备 |
| `surface_coating` | 粉末涂装 | conditional | 申报工厂对外壳实施粉末涂装时纳入 | 前景表面处理 | 每台验收成品设备 |
| `final_assembly_test` | 总装与验收测试 | required | 每台完整成品设备均经装配与测试 | 前景装配与测试 | 每台验收成品设备 |
| `sales_packaging` | 瓦楞纸箱包装 | conditional | 工厂门口销售单元附带瓦楞纸箱时纳入 | 前景包装 | 每台验收成品设备 |

### 过程：钢制外壳加工（`housing_fabrication`）

#### 输入

##### 产品流

###### 外壳用冷轧钢板（`steel_sheet_input`）

采用板材加工路线时，记录进入外壳生产线的非合金冷轧钢板质量，包括成为已计量边角料的板材。须声明供应商牌号和镀层状态；其天工流身份仍待解决。

- 选定流：非合金冷轧钢板
- 流属性/单位：Mass / kg
- 数量规则：每台验收成品设备领用的钢板实测质量；记录供应商质量并核对库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007`

###### 加工用交流电（`fabrication_electricity`）

计量或分配切割、成形、连接及纳入的表面处理和装配设备所用电力；共用电表不得重复计算。

- 选定流：交流电 `949661a5-2af6-4e66-adf8-74f5fca306a9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：每台验收成品设备可归属的交流电实测量，单位 MJ；依据 `electricity_energy` 将 kWh 读数换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`us-epa-metal-fabrication-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢板边角废料（`steel_scrap_output`）

称量离开加工线的清洁钢板边角料。如有沾污切屑，应在生产的数据集中另列原子流；本行只表示废钢。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：每台验收成品设备产生的出厂或经库存调整后的废钢实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`us-epa-metal-fabrication-2007`

##### 基本流

### 过程：粉末涂装（`surface_coating`）

#### 输入

##### 产品流

###### 外壳用粉末涂料（`powder_coating_input`）

仅在申报工厂使用粉末涂料时纳入；记录购入并消耗的涂料粉末，将损耗归入该生产线。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：采用粉末涂装时每台验收成品设备消耗的粉末涂料实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 来源：`us-epa-metal-fabrication-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：总装与验收测试（`final_assembly_test`）

#### 输入

##### 产品流

###### 外购家用燃气灶燃烧器总成（`domestic_gas_burner_input`）

对采用外购家用灶具燃烧器总成的燃气配置纳入；记录供应商身份和交付质量。检出的工业燃烧器记录不是该产品。

- 选定流：家用燃气灶燃烧器总成
- 流属性/单位：Mass / kg
- 数量规则：每台验收燃气成品设备所用外购家用燃烧器总成的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`eu-jrc-cooking-appliances-2020`

###### 燃气验收测试用天然气（`acceptance_test_natural_gas`）

仅在工厂验收测试实际燃烧天然气时纳入；如使用另一种测试燃料，须在生产的数据集中另列对应原子燃料行。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：使用天然气测试时，每台验收成品设备的验收测试天然气计量消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_gas`
- 来源：`eu-jrc-cooking-appliances-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的完整烹饪器具或暖碟器（`finished_appliance`）

参考产品为一台已验收完整设备。同一配置的净质量 M 不含运输包装，并须通过称量取得。

- 选定流：烹饪用具和暖碟器，非电动，家用，铁质或钢质 `6cc6000a-58ba-4ba3-bfa1-94ee239070ff`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`; `eu-jrc-cooking-appliances-2020`

##### 废物流

##### 基本流

### 过程：瓦楞纸箱包装（`sales_packaging`）

#### 输入

##### 产品流

###### 销售用瓦楞纸箱（`corrugated_box_input`）

仅在申报工厂门口已验收器具附带瓦楞纸销售箱时纳入。该纸箱不计入产品净质量 M。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：采用纸箱包装时，每台验收成品设备领用的瓦楞纸销售箱实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-cooking-appliances-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用工厂过程 | 首先按可单独计量的生产线、生产时段和产品配置划分；保留可直接追溯的钢板、废钢、涂料、燃烧器、测试燃气及纸箱记录。 | `us-epa-metal-fabrication-2007`; `eu-jrc-cooking-appliances-2020` |
| `allocation_shared` | 剩余共用能源和废物 | 无法直接计量区分共用过程时，采用与该过程相关的有记录物理驱动量分配，例如实测机器工时；披露驱动量、分母和敏感性。 | `us-epa-metal-fabrication-2007` |
| `scrap_no_credit` | 废钢产出 | 将废钢记为产出，不在工厂门口前景清单中扣除假定的再生利用抵扣。 | `us-epa-metal-fabrication-2007` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_assembly_test` | 已验收参考产品 | 经校准秤的记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个已验收型号或生产批次 | 申报生产时段 | 申报工厂 | 每台验收净质量 | 校准证书；验收记录 |
| `cp_materials` | `housing_fabrication` | 钢板投入 | 供应商与领料台账 | 钢材牌号；板材形式；收货质量；领料质量；期初及期末库存；验收设备数量 | 用库存变化核对申报配置的供应商和领料记录。 | kg | 每批次 | 申报生产时段 | 外壳生产线 | 领用钢板质量 / 验收设备数量 | 供应商发票；库存台账 |
| `cp_electricity` | `housing_fabrication` | 交流电投入 | 电表记录 | 电表编号；kWh 读数；时段；生产线分配驱动量；验收设备数量 | 读取经校准电表并将 kWh 换算为 MJ；记录共用电力分配。 | MJ | 每月或每批次 | 申报生产时段 | 纳入的工厂生产线 | 可归属 MJ / 验收设备数量 | 电表读数；分配工作表 |
| `cp_scrap` | `housing_fabrication` | 钢板边角废料产出 | 地磅及库存记录 | 废料类型；出厂质量；期初及期末库存；验收设备数量 | 称量清洁钢板边角料并核对库存变化。 | kg | 每次出厂或每批次 | 申报生产时段 | 外壳生产线 | 废钢质量 / 验收设备数量 | 地磅单；库存台账 |
| `cp_coating` | `surface_coating` | 粉末涂料投入 | 涂料领用记录 | 粉末类型；领用质量；退回质量；验收设备数量 | 使用该路线时核对粉末领用与退回记录。 | kg | 每批次 | 申报生产时段 | 涂装线 | 消耗粉末质量 / 验收设备数量 | 领料台账；工艺路线记录 |
| `cp_components` | `final_assembly_test` | 燃烧器总成投入 | 供应商材料清单及收货记录 | 燃烧器型号；供应商；收货质量；安装数量；验收设备数量 | 核对收货的家用燃烧器总成、已安装部件和不合格设备。 | kg | 每个型号或批次 | 申报生产时段 | 装配线 | 已安装燃烧器质量 / 验收设备数量 | 供应商材料清单；收货单；装配流转卡 |
| `cp_test_gas` | `final_assembly_test` | 天然气测试投入 | 燃气表及测试记录 | 燃气表编号；m3 读数；燃气类型；测试时间；验收设备数量 | 对申报燃气配置计量可归属验收测试的天然气。 | m3 | 每个测试批次 | 申报生产时段 | 测试线 | 可归属天然气 m3 / 验收设备数量 | 燃气表记录；测试日志 |
| `cp_packaging` | `sales_packaging` | 瓦楞纸销售箱投入 | 包装领用记录 | 纸箱规格；领用质量；验收设备数量 | 使用纸箱时核对发给已验收设备的瓦楞纸箱。 | kg | 每批次 | 申报生产时段 | 包装线 | 领用纸箱质量 / 验收设备数量 | 包装台账；供应商规格书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有纳入行 | 型号、燃料、涂装路线和验收配置须与 M 及材料清单一致。 | `eu-jrc-cooking-appliances-2020`；验收与供应商记录 |
| `dq_period` | 所有采集行 | 使用一个申报生产时段；以已验收产出核对共用计量表和库存边界。 | 计量表、台账及验收日期 |
| `dq_identity` | UUID 未解决行 | 保留具体物理名称，直至核验到准确的公开天工流为止，UUID 留空。 | 流身份审查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass` | 参考流与物料衡算 | 确认 M 对已验收配置实测，且成品产出为 M kg；核对钢板领用、部件质量、废钢和库存变化，但不强求不同材料之间数值相等。 | `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007` |
| `validate_routes` | 条件过程行 | 核实粉末涂料、家用燃烧器、天然气和瓦楞纸箱仅在相应申报路线适用时纳入；否则须明确说明缺失原因。 | `eu-jrc-cooking-appliances-2020` |
| `validate_sources` | 前景数据包 | 非零行须有计量表、供应商、地磅、材料清单和验收记录；披露地域、技术、时段及未解决 UUID。 | `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已验收完整器具的工厂门口前景数据包 |
| downstream_use | 经审查后可成为 `secondary_dataset` 或 `background_dataset`，并用于 process 或 lifecyclemodel 投影 |
| allowed_use | 适用于申报的型号、场址、时段、燃料及表面处理路线，须链接上游数据并披露 UUID 缺口 |
| excluded_use | 不得将本生产数据包当作使用阶段烹饪或报废结果；不得套用于电动、铜制主体或工业设备 |
| required_metadata | 型号；配置；燃料；铁或钢牌号；场址；时段；M 及计量证据；材料清单；工艺路线；包装状态；上游数据集地域 |
| required_quality_disclosure | 直接测量；分配驱动量；排除阶段；未匹配流 UUID；未解决的范围证据；数据覆盖程度 |
| update_trigger | 材料设计、燃烧器、燃料、涂装路线、供应商、场址或计量协议发生实质变化时更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品类别与相邻排除类别，不提供制造方法 |
| `eu-jrc-cooking-appliances-2020` | `official_guidance` | Review study of Ecodesign and Energy Labelling for Cooking appliances，初稿，2020 年 2 月，https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2020-07/CA_%20Prep%20Study_draft1_Feb2020.pdf | 家用燃气器具范围；按产品采集材料清单与部件；不作为本 PCR 的经验数量范围 |
| `us-epa-metal-fabrication-2007` | `official_guidance` | Clean Lines: Strategies for Reducing Your Environmental Footprint，美国环境保护署，2007 年 11 月，https://www.epa.gov/sites/default/files/2015-03/documents/fabrication.pdf | 金属加工过程图、废钢及加工液的区分 |
