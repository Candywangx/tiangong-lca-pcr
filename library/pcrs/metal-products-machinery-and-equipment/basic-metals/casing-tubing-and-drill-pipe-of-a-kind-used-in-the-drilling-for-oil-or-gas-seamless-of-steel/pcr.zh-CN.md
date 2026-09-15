---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.casing-tubing-and-drill-pipe-of-a-kind-used-in-the-drilling-for-oil-or-gas-seamless-of-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 用于钻探石油或天然气的钢制无缝套管、油管和钻杆

## 1. 范围与适用性

本 PCR 适用于为石油或天然气钻井及油气井作业制造的钢制无缝套管、油管和钻杆，覆盖非合金钢和合金钢钢级。对于平端或精加工产品，数据集必须声明产品规范、尺寸、钢级、热处理、端部加工、连接状态及随产品供应的组件。

前景边界从制管厂接收圆钢坯或大方坯开始，至合格产品离开制管厂工厂门结束。钢坯生产以及外购材料、燃料、电力和水的上游过程用关联上游数据集表示。焊接套管或油管、油气输送管线管、空心钻杆、通用无缝钢管、单独销售的接箍或附件、安装、使用、维护和寿命终止阶段均不在本 PCR 默认边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.casing-tubing-and-drill-pipe-of-a-kind-used-in-the-drilling-for-oil-or-gas-seamless-of-steel |
| classification_refs | CPC 3.0：41282（exact） |
| covered_products | 石油或天然气钻井及油气井作业用钢制无缝套管、钢制无缝油管和钢制无缝钻杆 |
| excluded_products | 焊接套管或油管；油气输送管线管；空心钻杆；其他通用无缝钢管；单独销售的接箍坯料和附件 |
| representative_product | 符合买方声明规范的一种钢制无缝套管、油管或钻杆产品 |
| production_route | 钢坯或大方坯加热；穿孔；延伸；最终轧制或定径；按路线实施热处理；矫直；端部精整；检验和试验 |
| market_state | 制管厂门口可销售产品，平端或具有声明的螺纹、接箍、钻杆接头、防护处理和试验状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供石油或天然气钻井及油气井作业用钢制无缝套管、油管或钻杆。 |
| How much | 声明工厂门口的 1 kg 合格产品。 |
| How well | 符合声明的买方规范、尺寸、钢级、热处理、力学性能、检验和试验要求。 |
| How long or cycle | 声明制管路线的一个生产批次；本工厂门口功能单位不包括使用寿命。 |
| reference_flow_link | 合格产品净产出行 `ft_reference_product`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 用于钻探石油或天然气的钢制无缝套管、油管和钻杆 `955ae8bd-1b86-4080-a5e2-795460a0ebae` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 套管、油管或钻杆；适用产品规范及版本；钢级；外径；壁厚；长度；热处理状态；端部加工和连接型式；平端、带接箍或带钻杆接头状态；涂层或表面处理；检验和试验状态；生产场址；地理区域；生产期间；钢坯或大方坯投入状态；是否包括上游炼钢；排除可拆卸包装 |

构建前景数据包时，所有必需限定信息必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用发运合格产品净质量；作为声明产品组成部分供应的端部加工、接箍或钻杆接头应计入，可拆卸运输包装应排除。 |
| `electricity_conversion` | 外购电力 | Energy | MJ | 保留原始电表读数及电表或计费边界；将 kWh 换算为 MJ 时准确采用 1 kWh = 3.6 MJ，并保留未舍入原值。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume | m3 | 每项气体体积记录均应声明温度、压力和干湿基准；未换算时不得合并不同基准状态下的体积。 |
| `water_makeup_basis` | 工艺用水和冷却水 | Mass | kg | 记录跨边界的新鲜水或外供补水量，不得将循环总量作为水投入；体积转质量时应记录密度。 |
| `steel_mass_balance` | 钢材投入、中间产品、成品、氧化铁皮和废钢 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一期间协调声明钢级的钢材投入、合格产品、在制品、氧化铁皮、工业后废钢及其他实测含钢产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制管厂门口接收的圆钢坯或钢制大方坯，并声明质量、钢级、尺寸、供应商、生产路线及上游数据集引用 |
| starting_condition_role | 无缝钢管制造用外购钢制半成品坯料 |
| product_classification_scope | 石油或天然气钻井及油气井作业用钢制无缝套管、油管和钻杆，不包括焊接管和通用无缝钢管 |
| recursive_input_rule | 若外购或转移投入已经满足本 PCR 产品边界，则将其作为单独产品投入并关联供应商数据集，不在接收过程内重新展开其前景生产 |
| upstream_dataset_requirement | 为钢坯或大方坯生产及所有外购材料、燃料、电力、水和处理服务关联在时间、地理和技术上有代表性的数据集 |
| disclosure | 声明产品形式、钢级、坯料状态、穿孔/轧制技术、炉用燃料、热处理路线、精整和连接状态、水循环、废物去向、上游炼钢纳入情况及工厂门口 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_tube_mill_gate` | 前景过程边界 | 纳入钢坯或大方坯接收、加热、穿孔、延伸、最终轧制或定径、适用热处理、矫直、端部精整、所供组件连接、检验、试验及产品工厂门前的现场废物和排放管理。 | `ec-jrc-ferrous-metals-processing-2022`; `api-5ct-11-announcement-2023` |
| `boundary_upstream_supply` | 从摇篮到工厂门清单 | 关联钢制坯料和外购供应品的上游数据集，不得将上游炼钢或发电的遗漏视为零负荷。 | `worldsteel-lci-methodology-2017` |
| `boundary_exclusions` | 下游阶段 | 默认排除声明工厂门后的分销、油气井建造、使用、维护和寿命终止；研究扩展边界时应单独报告这些阶段。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `billet_heating_conditioning` | 钢坯或大方坯加热和修整 | required |  | 前景坯料准备 | 转入穿孔的加热钢坯或大方坯质量 |
| `piercing_hot_rolling` | 穿孔、延伸和热轧 | required |  | 前景无缝管成形 | 转入下一工序的毛管质量 |
| `heat_treatment` | 热处理和控制冷却 | conditional | 声明钢级或买方规范要求正火、淬火、回火或其他独立热处理时纳入 | 前景性能形成 | 热处理管坯质量 |
| `finishing_testing` | 矫直、端部精整、组件连接、检验和试验 | required |  | 前景最终产品准备 | 工厂门口合格参考产品质量 |

### 过程：钢坯或大方坯加热和修整（`billet_heating_conditioning`）

#### 输入

##### 产品流

###### 圆钢坯投入（`bh_steel_billet`）

以圆钢坯作为穿孔坯料时记录其进厂量，不得与大方坯合并。

- 选定流：声明钢级的圆钢坯
- 流属性/单位：Mass / kg
- 数量规则：进入加热炉的钢坯净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 钢制大方坯投入（`bh_steel_bloom`）

仅在大方坯作为穿孔坯料时记录其进厂量，不得与圆钢坯合并。

- 选定流：声明钢级的钢制大方坯
- 流属性/单位：Mass / kg
- 数量规则：进入加热炉的大方坯净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 钢坯加热用天然气（`bh_natural_gas`）

钢坯加热炉消耗气态天然气时记录其交付量。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明基准状态计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 钢坯加热用燃油（`bh_fuel_oil`）

钢坯加热炉消耗燃油时记录其交付量。

- 选定流：燃油 `f673469a-a563-4ffc-9960-fefe67090714`
- 流属性/单位：Mass / kg
- 数量规则：交付燃油质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 火焰清理或富氧燃烧用工业氧气（`bh_oxygen`）

仅在采用火焰清理或富氧燃烧时记录工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按声明基准状态计量的工业氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 钢坯加热和搬运用电力（`bh_electricity`）

记录炉辅机、上料和搬运设备消耗的外购交流电。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：计量电力，保留原始电表单位和换算记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`worldsteel-lci-methodology-2017`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 加热钢坯中间产品（`bh_heated_billet`）

使用钢坯原料时，记录转入穿孔工序的热态钢坯。

- 选定流：声明钢级的加热钢坯
- 流属性/单位：Mass / kg
- 数量规则：加热钢坯产出实测或质量平衡量；使用大方坯原料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 加热大方坯中间产品（`bh_heated_bloom`）

使用大方坯原料时，记录转入穿孔工序的热态大方坯。

- 选定流：声明钢级的加热大方坯
- 流属性/单位：Mass / kg
- 数量规则：加热大方坯产出实测或质量平衡量；使用钢坯原料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 废物流

###### 加热和修整产生的氧化铁皮（`bh_mill_scale`）

记录轧制前或进入轧机时从加热坯料表面实际去除的氧化铁皮。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：回收湿重或干重实测值，并声明含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 基本流

###### 钢坯加热燃烧产生的化石二氧化碳（`bh_co2`）

记录现场钢坯加热燃料燃烧的直接化石二氧化碳，不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排放实测值，或根据燃料计量量和有据可查的碳含量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 钢坯加热燃烧产生的氮氧化物（`bh_nox`）

按受监测的报告基准记录钢坯加热燃烧直接排放的氮氧化物。

- 选定流：排放到空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：烟气排放实测值或监管报告值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_billet_heating_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
### 过程：穿孔、延伸和热轧（`piercing_hot_rolling`）

#### 输入

##### 产品流

###### 加热钢坯投入（`pr_heated_billet`）

使用钢坯原料时，记录进入穿孔设备的热态钢坯。

- 选定流：声明钢级的加热钢坯
- 流属性/单位：Mass / kg
- 数量规则：加热钢坯投入实测或质量平衡量；使用大方坯原料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 加热大方坯投入（`pr_heated_bloom`）

使用大方坯原料时，记录进入穿孔设备的热态大方坯。

- 选定流：声明钢级的加热大方坯
- 流属性/单位：Mass / kg
- 数量规则：加热大方坯投入实测或质量平衡量；使用钢坯原料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 穿孔和轧制用电力（`pr_electricity`）

记录穿孔机、芯棒轧管机或自动轧管机、延伸机、定径机和辅机消耗的外购交流电。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：分表电量或从共用电表按有据可查方法分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`worldsteel-lci-methodology-2017`

###### 除鳞用工艺用水（`pr_process_water`）

记录高压水除鳞所用的新水或外供工艺用水补水量，不记录循环总量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量工艺补水量，并声明水源和循环边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 穿孔轧制毛管中间产品（`pr_hollow_shell`）

记录穿孔、延伸和最终定径或张力减径后的内部毛管产出。

- 选定流：经穿孔和延伸的无缝钢制毛管
- 流属性/单位：Mass / kg
- 数量规则：毛管产出实测或质量平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 废物流

###### 热轧和除鳞产生的氧化铁皮（`pr_mill_scale`）

记录高压水除鳞和热轧过程中分离的氧化铁皮。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：回收湿重或干重实测值，并声明含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 穿孔轧制产生的钢铁生产废水（`pr_wastewater`）

除鳞或轧制水系统有外排时，记录离开本过程送往处理的废水。

- 选定流：钢铁生产废水 `b7f34603-aaf6-40e1-a242-08746c85098c`
- 流属性/单位：Mass / kg
- 数量规则：排往声明处理终点的计量或质量平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 基本流

###### 热轧和除鳞产生的颗粒物（`pr_particulate`）

未分粒径报告时，记录穿孔、轧制、除鳞或相应收集系统出口直接排放到空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：空气排放实测值或监管报告值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_piercing_rolling_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
### 过程：热处理和控制冷却（`heat_treatment`）

#### 输入

##### 产品流

###### 轧态毛管投入（`ht_hollow_shell`）

记录进入热处理的内部轧态毛管。

- 选定流：经穿孔和延伸的无缝钢制毛管
- 流属性/单位：Mass / kg
- 数量规则：毛管投入实测或质量平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 热处理用天然气（`ht_natural_gas`）

正火、淬火或回火炉消耗气态天然气时记录其交付量。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明基准状态计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 热处理用燃油（`ht_fuel_oil`）

热处理炉消耗燃油时记录其交付量。

- 选定流：燃油 `f673469a-a563-4ffc-9960-fefe67090714`
- 流属性/单位：Mass / kg
- 数量规则：交付燃油质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 热处理用电力（`ht_electricity`）

记录热处理炉、泵、风机和搬运设备消耗的外购交流电。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：分表电量或从共用电表按有据可查方法分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`worldsteel-lci-methodology-2017`

###### 淬火和冷却用补充水（`ht_cooling_water`）

仅记录进入淬火或加速冷却回路的新鲜补水，不记录循环总量。

- 选定流：冷却水补水
- 流属性/单位：Mass / kg
- 数量规则：计量补水质量，并声明水源、排污和循环边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理无缝钢管坯（`ht_treated_tube`）

记录按规定正火、淬火、回火或其他声明热处理路线加工后的内部管坯。

- 选定流：热处理无缝钢管坯
- 流属性/单位：Mass / kg
- 数量规则：热处理管坯产出实测或质量平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 废物流

##### 基本流

###### 热处理燃烧产生的化石二氧化碳（`ht_co2`）

记录现场热处理燃料燃烧的直接化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排放实测值，或根据燃料计量量和有据可查的碳含量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 热处理燃烧产生的氮氧化物（`ht_nox`）

按受监测的报告基准记录热处理燃烧直接排放的氮氧化物。

- 选定流：排放到空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：烟气排放实测值或监管报告值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
### 过程：矫直、端部精整、组件连接、检验和试验（`finishing_testing`）

#### 输入

##### 产品流

###### 热处理管坯投入（`ft_treated_tube`）

记录进入矫直、端部精整、检验和试验的热处理内部管坯。

- 选定流：热处理无缝钢管坯
- 流属性/单位：Mass / kg
- 数量规则：热处理管坯投入实测或质量平衡量；轧态路线为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 轧态管坯投入（`ft_as_rolled_tube`）

声明路线不经过热处理时，记录进入矫直、端部精整、检验和试验的轧态内部管坯。

- 选定流：轧态无缝钢管坯
- 流属性/单位：Mass / kg
- 数量规则：轧态管坯投入实测或质量平衡量；经过热处理时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`

###### 精整和试验用电力（`ft_electricity`）

记录矫直、机加工、连接、检验、试验和搬运设备消耗的外购交流电。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：分表电量或从共用电表按有据可查方法分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`worldsteel-lci-methodology-2017`

###### 静水压试验用工艺用水（`ft_process_water`）

记录静水压试验和最终漂洗所用的新水或外供工艺补水，不记录循环总量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量工艺补水量，并声明试验水回用边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：

###### 碱洗用氢氧化钠（`ft_sodium_hydroxide`）

仅在检验、涂覆或发运前使用碱洗槽时记录氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：进入清洗槽的氢氧化钠有效成分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：

###### 端部精整和车丝用切削液（`ft_cutting_fluid`）

管端、螺纹或连接面机加工时记录消耗的切削液。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：切削液补加或净消耗质量，不包括循环库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：

###### 钢制钻杆接头（`ft_tool_joint`）

仅在声明产品门内将单独制造的钢制接头连接到钻杆时记录。

- 选定流：钢制钻杆接头
- 流属性/单位：Mass / kg
- 数量规则：并入发运钻杆的接头质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`samr-gbt-29166-2021`

###### 钢制套管或油管接箍（`ft_coupling`）

仅在接箍作为声明套管或油管参考产品组成部分交付时记录。

- 选定流：油气井套管或油管用钢制接箍
- 流属性/单位：Mass / kg
- 数量规则：并入发运参考产品的接箍质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`api-5ct-11-announcement-2023`; `samr-gbt-19830-2023`

###### 成品钢管用防锈涂层（`ft_rust_preventive_coating`）

仅在声明产品门内施涂时记录具体防锈涂料。

- 选定流：钢管用防锈涂料
- 流属性/单位：Mass / kg
- 数量规则：涂料领用量减去实测退料或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`api-5ct-11-announcement-2023`

###### 成品连接螺纹脂（`ft_thread_compound`）

仅在发运前向成品螺纹连接处涂敷时记录螺纹脂。

- 选定流：套管、油管或钻杆用螺纹脂
- 流属性/单位：Mass / kg
- 数量规则：螺纹脂涂敷净质量的实测值或领料记录值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`api-5ct-11-announcement-2023`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考无缝油井管产品（`ft_reference_product`）

记录离开声明工厂门的合格套管、油管或钻杆净质量，并识别产品形式和端部加工状态。

- 选定流：用于钻探石油或天然气的钢制无缝套管、油管和钻杆 `955ae8bd-1b86-4080-a5e2-795460a0ebae`
- 流属性/单位：Mass / kg
- 数量规则：发运合格产品净质量实测值，不含可拆卸运输包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`un-cpc-3-0-structure-2025`; `api-5ct-11-announcement-2023`
##### 废物流

###### 精整产生的工业后钢废料（`ft_steel_scrap`）

记录作为工业后废钢离开过程的切头、机加工切屑和不合格钢件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：废钢质量称量值，并声明去向以及水分或油污基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`worldsteel-lci-methodology-2017`

###### 精整和试验产生的钢铁生产废水（`ft_wastewater`）

记录离开精整、清洗或静水压试验回路送往处理的废水。

- 选定流：钢铁生产废水 `b7f34603-aaf6-40e1-a242-08746c85098c`
- 流属性/单位：Mass / kg
- 数量规则：排往声明处理终点的计量或质量平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_testing_records`
- 来源：`ec-jrc-ferrous-metals-processing-2022`
##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用制管过程 | 技术可行时，优先通过分表或按时间、质量或批次分解每个产品族和过程，以避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_operations` | 无法避免的共用公用工程或处理 | 无法分解时，只对共用量采用反映因果关系且有据可查的物理驱动量，例如计量运行时间、加工质量、炉料质量或废水体积，并披露驱动量和敏感性。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_intermediates` | 加热钢坯、毛管和管坯 | 内部中间产品按实测量向后传递上游负荷，不进行经济分配，也不得作为共产品重复计数。 |  |
| `allocation_scrap` | 工业后废钢和氧化铁皮 | 分别报告废钢、氧化铁皮的总产出及去向；前景清单不得内嵌避免负荷收益。建模回收收益时，应单独报告所选方法及结果，并与废钢投入处理保持一致。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_billet_heating_records` | `billet_heating_conditioning` | 所有列明投入和产出 | 称量记录、生产日志、公用工程表、燃料发票和烟气监测记录 | 时间戳；批次；产品形式；钢级；投入/产出质量；表底/表止；气体状态；燃料属性；排放基准；停机 | 将批次记录与经校准计量表和发票协调 | kg；m3；MJ | 每批及每月协调 | 覆盖正常运行变化的完整代表性报告期，或有理由说明的较短生产期 | 场址内服务于声明产品的全部设备 | 汇总有效记录，扣除有据可查的退料，共用表仅按披露的物理驱动量分配，再按合格产出归一化 | 校准证书、发票、批次谱系、计量覆盖和协调残差 |
| `cp_piercing_rolling_records` | `piercing_hot_rolling` | 所有列明投入和产出 | 生产日志、电表、水表、废物联单和排放监测记录 | 时间戳；批次；中间产品质量；电力；补水；循环；氧化铁皮质量和水分；废水质量及去向；颗粒物结果 | 按批次和运行期间关联记录，并协调水和钢材平衡 | kg；MJ | 每批及每月协调 | 覆盖正常运行变化的完整代表性报告期，或有理由说明的较短生产期 | 场址内穿孔、延伸、轧制、除鳞及相应处理 | 仅汇总边界相同的记录，并按毛管和参考产品质量归一化 | 计量校准、地磅单、实验室报告、排放记录和平衡闭合 |
| `cp_heat_treatment_records` | `heat_treatment` | 所有列明投入和产出 | 路线日志、公用工程表、燃料发票、水表和烟气监测记录 | 时间戳；批次；钢级；热处理周期；投入/产出质量；气体状态；燃油质量；电力；冷却补水；排放 | 将路线和公用工程记录关联到热处理批次，并分开未经热处理的轧态批次 | kg；m3；MJ | 每批及每月协调 | 覆盖正常运行变化的完整代表性报告期，或有理由说明的较短生产期 | 场址内热处理和控制冷却设备 | 按声明路线汇总，并按热处理产出和最终参考产品归一化 | 周期记录、校准、发票、计量覆盖和排放监测证据 |
| `cp_finishing_testing_records` | `finishing_testing` | 所有列明投入和产出 | 生产订单、材料领料、公用工程表、试验记录、称量记录和废物/排放记录 | 批次；产品形式；规范；尺寸；钢级；端部加工；组件质量；耗材领退；水；电力；试验状态；产品质量；废钢；废水 | 保持从管坯到合格发运产品及不合格产出的批次谱系 | kg；MJ | 每批及每月协调 | 覆盖正常运行变化的完整代表性报告期，或有理由说明的较短生产期 | 声明工厂门内所有精整、连接、检验、试验及现场处理 | 仅汇总合格产品；任何汇总前先区分套管、油管、钻杆及连接状态 | 材质证书、检验/试验报告、校准、领料记录、废物联单和发运质量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有清单行 | 归一化量 = 有效过程期间交换量除以同一协调期间的合格参考产品质量 | 交换量；`ft_reference_product` 质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_electricity_mj` | 电力行 | MJ 电力 = kWh 电表读数乘以 3.6 MJ/kWh | 未舍入 kWh 读数 | MJ 电力 |  |
| `calc_combustion_co2` | 无直接测量时的 `bh_co2`、`ht_co2` | 根据燃料计量量、有据可查的燃料碳含量、氧化基准和单位换算计算化石二氧化碳；保留所有输入且不得以电力上游排放替代 | 燃料量；碳含量；氧化基准；换算因子 | kg 化石二氧化碳 |  |
| `calc_steel_balance` | 含钢流 | 钢材平衡残差 = 声明钢材投入减去合格产品、实测废钢、氧化铁皮和库存变化，全部采用一致的干质量基准 | 钢材投入；产品；废钢；氧化铁皮；在制品变化 | kg 未解释钢材平衡残差 |  |
| `calc_water_balance` | 工艺和冷却水 | 以补水加转入水减外排、蒸发、产品携带和库存变化协调水量；投入中排除循环总量 | 补水；外排；蒸发估计；携带水；库存变化 | kg 水平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品形式、规范及版本、钢级、尺寸、长度、热处理、端部加工、连接状态、涂层、检验/试验状态和批次谱系。 | 材质证书、生产订单和发运记录 |
| `dq_measurement` | 实测交换 | 使用经校准计量表或衡器；披露计量覆盖、估算比例、气体基准状态、水量换算密度和共用表分配。 | 校准证书、计量图和协调工作表 |
| `dq_temporal` | 前景数据集 | 使用覆盖正常运行变化的完整代表性报告期；较短生产期、异常停机排除和产品组合差异必须说明理由。 | 带日期生产计划和完整性报告 |
| `dq_completeness` | 所有列明行 | 审查每项原子流适用性；只有有证据时才记录实测零值；识别额外场址特定材料、废物和排放，不得隐藏在集合流中。 | 签署的适用性审查、物料台账和许可清单 |
| `dq_source_match` | 上游数据集 | 尽可能匹配钢材路线和钢级、燃料交付状态、电力地理/电压、水源及废物处理终点，并披露代理数据。 | 供应商数据、数据集元数据和代理清单 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity` | 产品和参考流 | 确认产出是石油或天然气钻井及油气井作业用钢制无缝套管、油管或钻杆，且必需限定信息齐全；拒绝以焊接管、管线管或通用钢管替代。 | `un-cpc-3-0-structure-2025`; `api-5ct-11-announcement-2023` |
| `validate_reference_mass` | 归一化 | 确认所有归一化交换采用同一工厂门口合格产品净质量，并一致处理随产品供应的接箍或钻杆接头。 | `api-5ct-11-announcement-2023` |
| `validate_process_route` | 过程图 | 确认加热、穿孔、延伸和最终轧制已表示；声明路线使用热处理、随产品供应的接箍/钻杆接头、清洗、涂层和螺纹脂时准确纳入。 | `ec-jrc-ferrous-metals-processing-2022`; `samr-gbt-29166-2021` |
| `validate_balances` | 钢材和水量平衡 | 使用未舍入记录重新计算钢材和水量平衡，调查残差并披露未解决的损失或库存变化项。 |  |
| `validate_energy_and_emissions` | 燃料、电力和直接排放 | 将外购能源与计量表和发票协调，区分直接燃烧排放与上游供应排放，并确认气体基准状态。 | `worldsteel-lci-methodology-2017`; `ec-jrc-ferrous-metals-processing-2022` |
| `validate_waste_and_recycling` | 氧化铁皮、废钢和废水 | 确认实测量、水分或污染基准、处理或回收终点，并确认前景量中未内嵌避免负荷收益。 | `worldsteel-lci-methodology-2017` |
| `validate_unresolved_uuid_rows` | UUID 为空的清单行 | 在直接核验准确的 state-100 Tiangong 身份前保持选定流 UUID 为空，不得替代为范围更宽、重复且无法区分或分类不同的候选项。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品、路线、地理、期间和工厂门限定信息匹配时，用于钢制无缝套管、油管或钻杆的从摇篮到工厂门建模 |
| excluded_use | 焊接管；管线管；通用钢管；安装、使用或寿命终止；产品规范、路线或工厂门不匹配的产品比较 |
| required_metadata | canonical PCR id；产品形式；规范及版本；钢级；尺寸；长度；热处理；端部加工；连接及随附组件状态；涂层；检验/试验状态；场址；地理；期间；钢坯/大方坯状态；炼钢路线；炉用燃料；电力供应；水边界；废物去向；分配；数据质量指标 |
| required_quality_disclosure | 前景覆盖；初级数据比例；计量表和衡器覆盖；分配驱动量；平衡残差；上游数据集匹配；代理使用；UUID 未解决行；不确定性和排除项 |
| update_trigger | 产品规范、钢级组合、坯料路线、穿孔/轧制技术、炉用燃料、热处理、精整或连接状态、场址、电力供应、水回路、废物路线、分配方法或数据期间发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41282 准确身份以及与焊接管和其他无缝管子类的区分 |
| `ec-jrc-ferrous-metals-processing-2022` | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | 无缝管坯料状态、加热、穿孔、延伸、轧制、热处理、炉用燃料和除鳞过程分解 |
| `worldsteel-lci-methodology-2017` | method_factor | https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | 钢铁产品从摇篮到工厂门清单边界、上游覆盖和废钢/回收一致处理 |
| `api-5ct-11-announcement-2023` | standard | https://www.api.org/products-and-services/standards/important-standards-announcements/spec5ct-tradepress | 套管和油管范围，以及尺寸、质量、壁厚、钢级、端部加工、检验和试验限定信息 |
| `samr-gbt-19830-2023` | standard | https://std.samr.gov.cn/search/stdPage?q=GB%2FT19830 | 套管/油管专业中文术语和钢管产品身份 |
| `samr-gbt-29166-2021` | standard | https://std.samr.gov.cn/gb/search/gbDetailed?id=DL89Sc%2BU1R0%3D&mode=p | 钢制钻杆专业中文术语和钻杆产品范围 |
