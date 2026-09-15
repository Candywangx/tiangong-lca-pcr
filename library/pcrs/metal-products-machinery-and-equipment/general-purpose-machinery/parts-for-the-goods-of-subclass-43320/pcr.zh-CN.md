---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43320
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 43320次级所列制品的零件

## 1. 范围与适用性

本 PCR 适用于在工厂门口交付、可明确识别为 CPC 43320 所列货物专用或主要使用的单独供应零件，包括传动轴和曲柄、轴承箱和滑动轴承、齿轮及齿轮传动装置、滚珠或滚柱丝杠、齿轮箱及其他变速装置、飞轮和滑轮、离合器和轴联轴器以及铰接链的零件。本规则覆盖以外购金属原料或预成形件加工的零件；若热处理和水基清洗在报告工厂内实施，则一并纳入。

本 PCR 不包括完整的 CPC 43320 货物、CPC 43310 滚珠或滚柱轴承的零件、无法识别为 CPC 43320 货物零件的通用紧固件、外购金属原料或预成形件的上游生产、可拆卸销售包装、出厂运输、安装、使用、维护和报废。采用非代表性材料或制造路线的数据包应保持相同功能单位，并把各路线特有交换分别列为原子清单行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43320 |
| classification_refs | CPC 3.0：43332，exact |
| covered_products | 可明确识别为 CPC 43320 所列传动轴和曲柄、轴承箱和滑动轴承、齿轮及齿轮传动装置、滚珠或滚柱丝杠、齿轮箱及其他变速装置、飞轮和滑轮、离合器和轴联轴器或铰接链专用或主要使用的单独供应零件 |
| excluded_products | 完整 CPC 43320 货物；CPC 43310 滚珠或滚柱轴承零件；通用紧固件；非铰接链零件；主要身份为完整齿轮箱、离合器、联轴器、滑轮或其他已组装 CPC 43320 货物的包装套件 |
| representative_product | 经检验放行、单独供应并用于装入 CPC 43320 传动或传动元件货物的合金钢机加工零件 |
| production_route | 外购合金钢条杆或有记录的预成形件；机加工和尺寸精加工；条件性热处理；条件性水基碱性清洗；最终检验和放行 |
| market_state | 制造工厂门口的成品、合格、未包装零件；声明材料牌号、几何形状、热处理状态、表面状态和公差等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 43320 传动或传动元件货物的成品合格单独供应零件 |
| How much | 1 kg 合格成品净质量 |
| How well | 符合声明的图样或零件号、材料牌号、热处理规范、尺寸与公差要求、表面状态和验收准则 |
| How long or cycle | 一次工厂门口批次放行；不包含使用寿命或使用周期 |
| reference_flow_link | 一个参考数量等于最终检验放行的 1 kg 合格成品零件净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 43320次级所列制品的零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件系列和图样或零件号；拟装入的 CPC 43320 母件；材料和合金牌号；外购原料或预成形件状态；制造路线；热处理路线和状态；表面处理路线和状态；尺寸与公差等级；合格批次状态；净质量基准；地域；技术；报告期；工厂门口状态 |

构建前景数据包时，所有必需限定信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 去除切屑、游离液体、临时工装和可拆卸销售包装后，对合格成品零件净质量称量或计算；不把不合格品计为参考产品。 |
| `material_and_waste_mass` | 合金钢投入、机加工切屑、废金属加工液、氢氧化钠、清洗废水和化石源二氧化碳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在交换跨越过程边界的位置报告质量；适用时记录含水率、附着液、溶液浓度和固体基准。 |
| `water_mass_conversion` | 工艺用水投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 若水表报告体积，按声明参考条件下的实测或有记录密度换算，并保留水表总量和换算依据。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按交付电能保留外购电力；以 1 kWh = 3.6 MJ 换算，并披露电网、电压、损耗和仪表分摊。 |
| `natural_gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明参考条件报告计量气量；若能源账单是原始记录，保留供应商换算因子，不推断通用体积。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂验收的外购金属条、杆或有记录的近净成形预成形件，并记录材料牌号、质量、供应商、地域和交付状态 |
| starting_condition_role | 前景制造数据包的上游材料生产切入点 |
| product_classification_scope | CPC 43320 货物的单独供应零件；分类参考用于限定范围，但不能替代零件系列、材料和路线限定信息 |
| recursive_input_rule | 若外购投入本身属于本 PCR 的单独供应零件，则将其作为一个原子产品投入记录一次并链接其上游数据集，不在本前景系统中递归重建供应商过程 |
| upstream_dataset_requirement | 每项外购金属原料、预成形件、电力、燃料、水和化学品均采用供应商特定或其他具代表性的上游数据集，并披露地域、技术和数据年代 |
| disclosure | 声明上游已完成的成形、接收原料或预成形件状态、纳入的厂内过程、外包作业、热处理和表面处理、不合格品处理、废物去向、仪表分摊和门口状态 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_gate_to_gate` | 前景制造边界 | 纳入机加工和尺寸精加工、适用的热处理与水基清洗、最终检验、厂内能源与用水、直接化石源二氧化碳以及合格未包装零件跨越工厂门口前产生的废物。 | `nist-ir-7913-2013`; `ec-jrc-sf-bref-2024`; `ec-jrc-stm-bref-2006` |
| `sb_route_specific` | 过程适用性 | 仅在前景路线实际执行时纳入条件性过程；每种新增路线特有材料、能源、废物和基本流均单独列为原子行，不得用组合公用工程、化学品、废物或排放名称替代。 | `nist-ir-7913-2013`; `ec-jrc-fmp-bref-2022` |
| `sb_exclusions` | 背景和下游阶段 | 排除已由外购投入数据集表示的上游生产、研究未明确要求的资本设备、可拆卸销售包装、出厂运输、安装、使用、维护和报废；披露任何研究特定的边界扩展。 |  |
| `sb_outsourced_operations` | 外包成形、热处理或表面处理 | 将外包作业记录为外购加工投入或链接的上游过程数据集，并披露运输质量和路线；不得把外包作业表示为零负荷。 | `nist-ir-7913-2013` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machining_and_dimensional_finishing` | 机加工和尺寸精加工 | required | 代表性路线始终纳入；有图样和验收证据证明近净成形时才可报告零机加工 | 前景材料去除和尺寸精加工 | 报告批次的合格成品归属质量 |
| `heat_treatment` | 热处理 | conditional | 声明合金和力学性能要求的热处理在厂内实施时纳入 | 前景组织变化过程 | 进入合格批次的热处理零件质量 |
| `aqueous_alkaline_cleaning` | 水基碱性清洗 | conditional | 厂内实施氢氧化钠水基清洗或漂洗时纳入 | 前景表面准备 | 进入最终检验的清洁零件质量 |
| `final_inspection_and_release` | 最终检验和放行 | required | 始终纳入 | 前景验收与参考产品放行 | 合格未包装零件净质量 |

### 过程：机加工和尺寸精加工（`machining_and_dimensional_finishing`）

#### 输入

##### 产品流

###### 合金钢条杆机加工原料（`alloy_steel_bar_input`）

外购合金钢条杆作为代表性机加工原料跨越前景边界。声明合金牌号、条杆尺寸、供应商、地域、接收质量以及投入是否包含上游锻造或其他成形。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass / kg
- 数量规则：报告批次领用的实测接收质量，并按有记录的期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alloy_steel_bar_input`
- 来源：

###### 机加工外购电力（`machining_electricity`）

外购电力驱动机床、泵、局部抽排和可直接归属的机加工辅助设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电量，或依据机床运行时间和额定或实测负荷从公用电表进行有记录的分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_electricity`
- 来源：`nist-ir-7913-2013`

###### 机加工工艺用水（`machining_process_water`）

工艺用水作为冷却液补充水或零件漂洗水跨越机加工边界时记录；过程内部闭路循环水不重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：报告期内计量并归属于机加工的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_process_water`
- 来源：

###### 水溶性金属加工液浓缩物（`metalworking_fluid_concentrate`）

记录一种商业供应的水溶性金属加工液浓缩物投入。产品配方、浓度、供应商和库存变化是必需前景限定信息；尚未确认精确的天工公开流 UUID。

- 选定流：水溶性金属加工液浓缩物
- 流属性/单位：Mass / kg
- 数量规则：外购量加期初库存、减期末库存和有记录转移量后分摊至报告批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metalworking_fluid_concentrate`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 低合金钢机加工切屑（`low_alloy_steel_machining_chips`）

在机加工过程边界单独收集低合金钢切屑，并声明附着液、混合合金污染、称量状态和回收去向。

- 选定流：低合金钢废料, 机加工切屑 `826431d5-0492-4345-9051-8342d1f6c4d5`
- 流属性/单位：Mass / kg
- 数量规则：按声明的附着液基准计量报告批次移除的切屑质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_low_alloy_steel_machining_chips`
- 来源：

###### 废金属加工液（`waste_metalworking_fluid`）

废金属加工液离开机加工系统送往厂外回收、处理或处置时，在转移点记录一次。

- 选定流：废金属加工液 `2468f4c0-46fa-4a8b-8075-686cf7391b00`
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移质量，并依据有记录的生产量或加工液使用记录分摊至报告批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_metalworking_fluid`
- 来源：

##### 基本流

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理炉用气态天然气（`heat_treatment_natural_gas`）

仅在声明的厂内热处理路线采用燃气炉时纳入天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：校准仪表或供应商账单中归属于报告批次热处理周期的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_natural_gas`
- 来源：`ec-jrc-sf-bref-2024`

###### 热处理外购电力（`heat_treatment_electricity`）

电力驱动炉控、风机、泵、物料搬运和其他可直接归属的辅助设备；采用电炉时还包括电加热。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：服务于报告批次热处理周期的分表计量或有记录分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_electricity`
- 来源：`ec-jrc-sf-bref-2024`; `ec-jrc-fmp-bref-2022`

###### 淬火系统补充工艺用水（`quench_process_water`）

仅在水基淬火或淬火系统需要补充水时纳入工艺用水；循环水不重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供给热处理淬火系统的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quench_process_water`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 炉内燃烧直接化石源二氧化碳（`heat_treatment_fossil_co2`）

仅报告前景热处理边界内天然气燃烧产生的直接化石源二氧化碳。燃料上游和外购电力排放保留在各自背景数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据前景天然气实测量及有记录的场址燃料碳和氧化方法计算，或采用合规的烟气直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_fossil_co2`
- 来源：

### 过程：水基碱性清洗（`aqueous_alkaline_cleaning`）

#### 输入

##### 产品流

###### 清洗槽用氢氧化钠（`cleaning_sodium_hydroxide`）

声明的水基碱性清洗路线采购氢氧化钠时记录。分别报告产品质量、有效成分质量和溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：外购氢氧化钠产品量加期初库存、减期末库存和有记录转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sodium_hydroxide`
- 来源：`ec-jrc-stm-bref-2006`

###### 水基清洗工艺用水（`cleaning_process_water`）

记录跨入清洗和漂洗过程的补充水；内部循环水不重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供给清洗和漂洗阶段的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_process_water`
- 来源：`ec-jrc-stm-bref-2006`

###### 水基清洗外购电力（`cleaning_electricity`）

电力驱动槽液加热、泵、抽排和可直接归属的物料搬运。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：清洗报告批次的分表计量或有记录分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_electricity`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 水基清洗废水（`cleaning_wastewater`）

清洗废水离开清洗系统送往厂内或厂外处理时记录。声明 pH、溶解和悬浮金属含量、固体基准、收集点和处理去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：离开清洗系统的实测废水质量，或按有记录密度由体积换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

### 过程：最终检验和放行（`final_inspection_and_release`）

#### 输入

##### 产品流

###### 检验外购电力（`inspection_electricity`）

电力驱动尺寸计量、无损检测、检验内保留的清洗和可直接归属的搬运。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：报告批次检验和放行的分表计量电量或有记录的设备运行时间分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_electricity`
- 来源：`nist-ir-7913-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品参考产品（`reference_product`）

参考产品是最终检验放行的合格未包装零件净质量。尚未确认单独供应 CPC 43332 零件边界的精确天工公开产品流 UUID。

- 选定流：43320次级所列制品的零件
- 流属性/单位：Mass / kg
- 数量规则：报告批次放行的合格成品零件实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`un-cpc-3-0-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 共用机器、仪表和处理系统 | 优先通过过程细分、专用仪表或把实测机器时间和负荷归属于报告批次来避免分配。记录分配键和未分配余量。 |  |
| `alloc_rejects_and_rework` | 不合格品和返工 | 把判废前发生的全部负荷分配给生产批次；把新增返工负荷分配给合格产品，并将不合格质量按实际废物或回收流单独报告。 |  |
| `alloc_scrap_no_avoided_burden` | 低合金钢机加工切屑 | 在前景边界记录切屑毛质量和实际去向。本前景过程内不扣除原生钢避免负荷；任何回收替代属于声明的下游建模方法。 |  |
| `alloc_unavoidable_multioutput` | 其他可销售共产品 | 若细分无法解决实质性共产品，采用有记录的因果物理关系；只有质量能代表因果关系时才采用质量分配，报告选择并用另一种可辩护关系进行敏感性检验。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_alloy_steel_bar_input` | `machining_and_dimensional_finishing` | 合金钢条杆投入 | 接收、领用和库存记录 | 材料牌号；供应商；接收与领用质量；期初和期末库存；批次链接 | 协调地磅、秤、ERP 和库房记录 | kg | 每次接收和领用 | 完整报告期 | 所有投入纳入批次的原料 | 接收量 + 期初库存 - 期末库存 - 有记录转移量 | 秤校准；供应商证书；库存核对 |
| `cp_machining_electricity` | `machining_and_dimensional_finishing` | 电力 | 仪表和机器运行记录 | 表计起止；kWh；机器编号；运行时间；实测或额定负荷；批次链接 | 优先专用分表，否则按运行时间和负荷进行有记录分摊 | kWh 和 MJ | 每班或每批 | 完整报告期 | 所有纳入机加工设备和辅助设备 | kWh 换算 MJ，归属总量除以合格参考产品质量 | 仪表校准；分摊核对；运行日志 |
| `cp_machining_process_water` | `machining_and_dimensional_finishing` | 工艺补充水 | 水表和槽罐记录 | 表计起止；槽罐加水；密度依据；批次链接 | 专用补充水表或槽罐加水核对 | kg 或 m3 | 每批或每日 | 完整报告期 | 机加工冷却和漂洗系统 | 排除循环量；必要时体积换算质量；按合格质量归一化 | 仪表校准；槽罐日志；泄漏和排放记录 |
| `cp_metalworking_fluid_concentrate` | `machining_and_dimensional_finishing` | 浓缩物投入 | 采购、领用和库存记录 | 产品名称；配方；浓度；质量；期初和期末库存；转移量 | 协调采购和库房记录 | kg | 每次领用 | 完整报告期 | 所有纳入的机加工液系统 | 采购量 + 期初库存 - 期末库存 - 转移量，分摊至纳入批次 | 供应商文件；称量记录；库存核对 |
| `cp_low_alloy_steel_machining_chips` | `machining_and_dimensional_finishing` | 机加工切屑输出 | 切屑容器称量和外运记录 | 合金系列；毛重和皮重；附着液状态；污染；去向；批次链接 | 校准容器秤和外运核对 | kg | 每个容器 | 完整报告期 | 纳入机加工产生的切屑 | 容器净质量分摊至纳入批次；保持附着液基准一致 | 秤校准；照片或检查；废物转移单 |
| `cp_waste_metalworking_fluid` | `machining_and_dimensional_finishing` | 废加工液 | 槽液位、质量和废物转移记录 | 加工液身份；质量或体积；密度；收集日期；去向；批次分摊 | 校准槽罐或转移称量并进行库存核对 | kg | 每次转移 | 完整报告期 | 离开纳入机加工系统的废液 | 期初废液库存 + 产生量 - 期末库存 - 内部再用量，按合格质量归一化 | 转移联单；密度记录；槽罐校准 |
| `cp_heat_treatment_natural_gas` | `heat_treatment` | 炉用天然气 | 燃气表、账单和周期记录 | 表计起止；参考条件；周期号；炉号；装载质量；批次链接 | 优先专用校准仪表，否则按周期进行有记录分摊 | m3 | 每周期或每日 | 完整纳入热处理期 | 纳入炉和直接相关燃烧器 | 按分支仪表或有记录周期用量分摊并按处理合格质量归一化 | 仪表校准；供应商账单核对；周期日志 |
| `cp_heat_treatment_electricity` | `heat_treatment` | 电力 | 分表和周期记录 | kWh；炉号；辅助负荷；周期号；装载质量；批次链接 | 专用分表或按周期时间与负荷分摊 | kWh 和 MJ | 每周期 | 完整纳入热处理期 | 纳入炉和辅助设备 | kWh 换算 MJ，归属总量按合格质量归一化 | 仪表校准；周期日志；分摊核对 |
| `cp_quench_process_water` | `heat_treatment` | 淬火补充水 | 补充水表和槽罐记录 | 补充量；排放；泄漏；密度依据；周期和批次链接 | 校准补充水表或槽罐平衡 | kg 或 m3 | 每周期或每日 | 完整纳入淬火期 | 纳入水基淬火系统 | 只计补充水；体积换算质量；按合格质量归一化 | 仪表校准；槽罐平衡；维护日志 |
| `cp_heat_treatment_fossil_co2` | `heat_treatment` | 直接化石源二氧化碳 | 燃料分析、燃气表、排放计算或烟气记录 | 天然气体积；参考条件；碳含量或供应商因子；氧化依据；可用时实测 CO2；周期链接 | 有记录的燃料碳计算或合规直接测量 | kg | 每周期或报告间隔 | 完整纳入燃烧期 | 仅厂内炉燃烧 | 计算并归一化直接化石源 CO2；排除燃料上游和外购电力排放 | 仪表校准；因子来源；计算复核或仪器 QA |
| `cp_cleaning_sodium_hydroxide` | `aqueous_alkaline_cleaning` | 氢氧化钠 | 采购、配槽和库存记录 | 产品质量；浓度；期初/期末库存；槽液添加；转移量；批次链接 | 协调采购和槽液记录 | kg | 每次添加 | 完整纳入清洗期 | 纳入碱性清洗槽 | 产品采购量 + 期初库存 - 期末库存 - 转移量；分别报告产品和有效成分质量 | 供应商规范；秤校准；槽液分析 |
| `cp_cleaning_process_water` | `aqueous_alkaline_cleaning` | 清洗和漂洗补充水 | 补充水表和槽液记录 | 表计起止；槽液加水；漂洗补充；再用；密度依据；批次链接 | 校准补充水表或槽液平衡 | kg 或 m3 | 每班或每日 | 完整纳入清洗期 | 纳入清洗槽和漂洗槽 | 跨越过程边界的补充水只计一次；体积换算质量；按合格质量归一化 | 仪表校准；槽液日志；再用记录 |
| `cp_cleaning_electricity` | `aqueous_alkaline_cleaning` | 电力 | 分表和运行记录 | kWh；槽加热器；泵和抽排负荷；运行时间；批次链接 | 专用分表或有记录运行时间-负荷分摊 | kWh 和 MJ | 每班 | 完整纳入清洗期 | 纳入清洗设备和辅助设备 | kWh 换算 MJ，归属总量按合格质量归一化 | 仪表校准；运行日志；分摊核对 |
| `cp_cleaning_wastewater` | `aqueous_alkaline_cleaning` | 清洗废水 | 排放或转移仪表及分析记录 | 质量或体积；密度；pH；溶解与悬浮金属；固体；去向；批次链接 | 校准仪表或槽罐转移并进行代表性采样 | kg 或 m3 | 每次排放或转移 | 完整纳入清洗期 | 离开纳入清洗系统的废水 | 扣除有记录内部再用量；体积换算质量；按合格质量归一化 | 仪表校准；采样记录；实验室结果；转移单 |
| `cp_inspection_electricity` | `final_inspection_and_release` | 检验电力 | 分表和设备运行记录 | kWh；设备编号；运行时间；负荷；批次链接 | 专用分表或有记录运行时间-负荷分摊 | kWh 和 MJ | 每批或每班 | 完整报告期 | 纳入计量和测试设备 | kWh 换算 MJ，归属总量按合格质量归一化 | 仪表校准；设备日志；分摊核对 |
| `cp_reference_product` | `final_inspection_and_release` | 合格成品零件 | 合格批次和称量记录 | 零件号；合格数量；单件或批次净质量；不合格数量/质量；放行状态 | 校准秤并链接最终验收记录 | kg | 每批 | 完整报告期 | 数据集中所有合格未包装零件 | 仅汇总合格净质量；与投入、切屑、废物、不合格品和库存变化核对 | 秤校准；签署放行记录；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 可归属交换数量 / 合格参考产品净质量 | 采集的交换数量；合格参考产品质量 | 每 1 kg 合格成品零件的交换量 |  |
| `calc_electricity_mj` | 电力行 | MJ = 计量 kWh × 3.6 | 计量或分摊 kWh | MJ 交付电能 |  |
| `calc_water_mass` | 以体积计量的水和废水行 | 质量 = 实测体积 × 声明条件下有记录密度 | 体积；密度；参考条件 | kg 水或废水 |  |
| `calc_fossil_co2` | `heat_treatment_fossil_co2` | 将有记录的场址燃料碳和氧化方法应用于天然气实测量，并保留因子来源和参考条件；或采用质量受控直接测量 | 前景气量；碳或排放因子；氧化依据，或实测烟气结果 | kg 直接化石源二氧化碳 |  |
| `calc_material_balance` | 报告批次 | 协调合金钢投入与合格产品、机加工切屑、不合格品、其他声明废物和库存变化；调查并披露差额 | 投入质量；产出和废物质量；在制品期初/期末量 | 质量平衡差额和完整性结论 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 零件系列、拟装入的 CPC 43320 母件、图样或零件号、材料牌号、热处理状态、表面状态、公差等级和合格批次状态应无歧义。 | 图样；材料证书；工艺卡；检验放行 |
| `dq_measurement` | 实测交换 | 使用校准仪器，并保留单位、参考条件、校准状态和数据缺口处理。 | 校准证书；仪表日志；秤检查 |
| `dq_temporal` | 前景数据 | 覆盖有代表性的连续期间或足够完整批次，以包括正常运行、启动、停机、排放和废物转移事件，并报告排除项。 | 生产日历；批次登记；运行日志 |
| `dq_completeness` | 清单 | 核对外购投入、仪表、废物转移和合格产出；识别所有新增路线特有原子交换，并解释材料或能源差额。 | 质量和能源核对；发票；转移联单 |
| `dq_allocation` | 共用公用工程和过程 | 保留实测或计算的分配键、分母、未分配余量，并在分配实质性影响结果时开展敏感性分析。 | 分表数据；运行时间记录；分配工作表 |
| `dq_background_links` | 外购投入和外包作业 | 背景数据集尽可能匹配声明的材料、地域、技术、产品状态和时期，并披露代理数据。 | 供应商数据集；数据集元数据；代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考产品 | 若输出是完整 CPC 43320 货物、CPC 43310 轴承零件、通用紧固件或其他不能识别为 CPC 43320 货物单独供应零件的产品，则判定失败。 | `un-cpc-3-0-2025` |
| `val_reference_amount` | 参考流 | 若声明参考数量不是 1 kg 合格成品零件净质量，或包含可拆卸包装、不合格品、游离液体或临时工装，则判定失败。 |  |
| `val_route_coverage` | 过程图 | 若实际厂内机加工、热处理、水基清洗或检验作业被遗漏，或外包作业被表示为零负荷，则判定失败。 | `nist-ir-7913-2013`; `ec-jrc-sf-bref-2024`; `ec-jrc-stm-bref-2006` |
| `val_atomic_inventory` | 清单行 | 若一个清单行组合多种材料、能源载体、化学品、废物或基本流，或用未来路线选择指令代替一个交换名称，则判定失败。 |  |
| `val_uuid_and_localization` | 流身份 | 若带 UUID 的流与经核实公开身份、属性或单位组不一致，则判定失败；把未解决的参考产品和加工液 UUID 标记为待审查；中文文本中每个已采用 UUID 均使用天工正式中文 baseName。 |  |
| `val_mass_balance` | 材料清单 | 若投入、合格产品、机加工切屑、不合格品、其他废物和库存变化没有核对，或未调查和披露无法解释的差额，则判定失败。 |  |
| `val_range_evidence` | 数量范围 | 任何外部推断范围若没有至少两个独立原始来源支持兼容的系统边界、功能单位和产品状态，则判定失败；缺失范围保持为明确的前景证据需求，不得用单个案例值替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的 CPC 43320 货物单独供应零件的前景工厂门口生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 零件身份、材料、路线、地域、技术和门口状态与声明限定信息匹配的产品碳足迹、生命周期评价、供应链和机械设备模型 |
| excluded_use | 完整齿轮箱、轴、离合器、联轴器、滑轮、轴承总成或铰接链；CPC 43310 轴承零件；身份不明的通用金属零件；使用阶段性能；无明确下游模型的报废阶段 |
| required_metadata | PCR id 和版本；零件系列；拟装入的母件；图样或零件号；材料和合金牌号；接收原料或预成形件状态；路线；热处理和表面处理；合格批次状态；地域；技术；报告期；工厂门口；分配；背景数据集链接；未解决 UUID 披露 |
| required_quality_disclosure | 仪表覆盖和校准；时间和生产覆盖；质量平衡差额；仪表分摊；不合格品和返工；加工液和废水基准；外包作业；背景代理；数据缺口；不确定性；缺少双来源实证范围 |
| update_trigger | 零件系列、材料牌号、外购原料或预成形件状态、机加工技术、热处理路线、清洗路线、工厂、电力或燃料供应、分配、废物去向、参考产品身份发生变化，或新确认精确天工 UUID 或兼容双来源范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版》结构和解释性说明，2025 年 6 月 30 日更新。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 43332 正式身份及其与 43320 次级货物的关系 |
| `un-cpc-1-1-zh-2004` | `official_guidance` | 联合国统计司，《产品总分类（CPC）第 1.1 版》中文版。https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-05） | CPC 43332 已建立的专业中文译名 |
| `nist-ir-7913-2013` | `literature` | 美国国家标准与技术研究院，NISTIR 7913，《制造过程可持续性特征评述》，2013。https://nvlpubs.nist.gov/nistpubs/ir/2013/NIST.IR.7913.pdf（检索日期：2026-09-05） | 单元过程分解，包括机加工、热处理、精加工、装配、检验、投入、能源和废料 |
| `ec-jrc-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《锻造和铸造行业最佳可行技术参考文件》，2024，DOI 10.2760/4805267。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry（检索日期：2026-09-05） | 金属零件的机加工、冷却与精加工、热处理、锻造和铸造过程背景 |
| `ec-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会联合研究中心，《金属和塑料表面处理 BREF》，2006 年 8 月通过。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索日期：2026-09-05） | 水基电解和化学表面处理边界以及水基清洗适用性 |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工行业 BREF》，2022 年 12 月通过。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry（检索日期：2026-09-05） | 热处理、清洗、酸洗、精加工和路线条件化黑色金属加工顺序 |
