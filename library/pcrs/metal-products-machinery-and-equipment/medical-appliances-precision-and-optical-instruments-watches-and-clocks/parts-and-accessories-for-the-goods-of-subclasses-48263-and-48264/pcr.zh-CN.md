---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48263-and-48264
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类48263和48264所列货品的零件及附件

## 1. 范围与适用性

本PCR适用于为气体、液体或电力供应或生产中用的表计，以及转数计、产量计数器、计程表、里程表、步数计、速度指示器、转速计和频闪仪专门制造并单独上市的原厂或替换用零件及附件。边界终止于已声明的成品零件或附件出厂，包括直接受控的加工、清洗、条件适用的电子集成与校准、最终检验、装配和初级包装。

完整计量仪器、尚未转化为可识别专用零件的通用原材料、其他测量或医疗仪器的零件、出厂后的配送、安装、使用、维护和寿命终止阶段不在本PCR范围内。数据包必须明确主机仪器类别、零件功能、材料组成、制造路线、电子内容、校准要求和销售状态。CPC正式来源仅用于确定产品类别身份及其与子类48263和48264的关联，不提供清单数量或性能范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48263-and-48264 |
| classification_refs | CPC 3.0：48283，精确分类引用 |
| covered_products | 单独上市的外壳、框架、板件、转子、齿轮、计数机构、含印制线路板的模块、支架、轴、联轴件、表圈，以及用于CPC 48263和48264货品的其他专用零件或附件 |
| excluded_products | 完整的表计、计数器、指示器、转速计或频闪仪；转化为可识别专用零件之前的通用板材、树脂或电子元器件；用于CPC 48263和48264范围外货品的零件 |
| representative_product | 按净质量表示的一个可销售计量表或计数器成品零件/附件 |
| production_route | 材料成形或机加工、可选的模塑和表面清洗、条件适用的电子集成或校准、最终装配、检验和包装 |
| market_state | 在工厂大门处供应的合格新零件或附件；使用初级包装时以包装状态交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能够支持CPC 48263或48264货品装配、更换或运行的合格专用零件或附件 |
| How much | 1 kg可销售成品零件或附件净质量，不含初级包装 |
| How well | 满足已声明主机仪器系列对应的图样、材料规范、尺寸公差、兼容性和功能检验准则 |
| How long or cycle | 一个在工厂大门处放行的生产批次；不主张使用寿命等效性 |
| reference_flow_link | `finished_meter_part`行中合格成品输出的净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 子类48263和48264所列货品的零件及附件（UUID未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主机仪器子类及系列；零件/附件名称和功能；图样或型号标识；主要材料和牌号；电子内容；制造路线；校准或测试要求；净质量；初级包装状态；制造地域；生产期 |

构建前景数据包时，必须在元数据、产品说明、参考流备注或等效字段中声明全部必需限定信息。缺失限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及归一化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 去除初级包装后称量或计算合格可销售零件的净质量；所有清单值归一化到1 kg成品净输出。 |
| `packaging_separation` | 初级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 包装必须作为独立投入记录，其质量不得计入参考数量。 |
| `energy_preservation` | 电力和燃料 | 按所选流定义的Net calorific value或Volume | 电力为MJ；气体燃料为m3 | 保留源计量单位和有记录的换算因子；未声明参比条件和密度时，不得将体积换算为质量。 |
| `mass_balance_basis` | 材料投入、产品和分类废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每条已声明材料路线，核对产品所含材料、可回收生产废料、其他材料损失和成品净输出。 |

## 5. 系统边界

前景边界应采用以下规则：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate_operations` | 制造商控制的生产 | 纳入材料准备、成形、机加工、模塑、清洗、条件适用的电子集成或校准、装配、检验、属于该批次的返工，以及报告组织控制的初级包装。 |  |
| `boundary_purchased_inputs` | 外购材料、组件、公用工程和包装 | 每项外购投入均作为独立产品流记录，并在可获得时链接与材料牌号、产品状态、供应地域和技术相匹配的上游数据集。 |  |
| `boundary_direct_outputs` | 废物和基本流排放 | 记录纳入过程产生的分类生产废物、废水和直接基本流排放；不得重复记录已包含在上游电力或材料数据集中的排放。 |  |
| `boundary_exclusions` | 工厂大门以外的活动 | 除非研究目标要求，否则排除资本品、员工通勤、下游配送、安装、使用、维护和寿命终止阶段；任何研究特定的纳入均须披露。 |  |
| `boundary_product_identity` | 产品类别分类 | 参考产品中排除完整CPC 48263或48264仪器的生产，仅保留单独上市的CPC 48283零件或附件。 | `un-cpc-3-0-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址收到的外购构成材料、专用组件和初级包装投入 |
| starting_condition_role | 上游生产由关联的供应商或背景数据集表示；前景从材料进入制造商控制的转化和装配活动开始 |
| product_classification_scope | 用于CPC 48263和48264货品的、单独上市的专用零件及附件 |
| recursive_input_rule | 外购投入若本身属于本PCR类别，仍作为具有供应商数据集的同类别显式产品投入；不得递归并入前景输出 |
| upstream_dataset_requirement | 每项外购产品投入均需兼容的上游数据集或明确披露的数据缺口；应匹配地域、技术、材料牌号和产品状态 |
| disclosure | 声明主机仪器、零件功能、起始材料或组件状态、纳入过程、外包过程、电子路线、校准介质、废料去向和初级包装状态 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication` | 零件加工与表面清洗 | required | 适用于制造商将至少一种已声明材料转化为专用零件的受控过程；仅条件纳入实际发生的原子路线特定交换 | 前景生产 | 生产批次的材料总投入和放行中间零件质量 |
| `electronics_calibration` | 电子集成与校准 | conditional | 零件包含印制线路板，或以甲烷或二氧化碳作为校准介质时纳入 | 电子集成与功能校准 | 验收的电子化/已校准中间零件质量 |
| `final_assembly_packing` | 最终装配、检验与包装 | required | 适用于每个合格可销售零件或附件 | 最终生产与出厂放行 | 合格成品净输出质量 |

### 过程：零件加工与表面清洗（`part_fabrication`）

#### 输入

##### 产品流

###### 成形零件用不锈钢板材（`stainless_steel_sheet`）

仅在不锈钢板材被切割或成形为已声明零件时纳入，并记录外购牌号和厚度。

- 选定流：不锈钢板材（UUID未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量该生产批次领用的到货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 成形零件用初级铝合金板材（`primary_aluminium_alloy_sheet`）

仅在使用初级铝合金板材时纳入，并披露合金牌号、厚度和再生成分声明。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：计量该生产批次领用的到货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 机加工或成形零件用黄铜板带（`brass_plate_strip`）

仅在黄铜板材或带材被转化为已声明零件时纳入，并披露合金牌号和形态。

- 选定流：黄铜板带 `54cfcc10-ca05-4e3e-8332-08665781eba0`
- 流属性/单位：Mass / kg
- 数量规则：计量该生产批次领用的到货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 模塑零件用ABS粒料（`abs_granulate`）

仅在报告场址进行ABS模塑时纳入，并披露牌号、添加剂和再生成分。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：Mass / kg
- 数量规则：计量该生产批次领用的ABS粒料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 加工和清洗用电力（`fabrication_electricity`）

记录成形、机加工、模塑、清洗及相关直接受控辅助设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于生产批次的计量电力；共享用电按有记录的机器时间或分表数据分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy`

###### 水性清洗用工艺用水（`process_water`）

工艺用水作为洗涤、漂洗或溶液配制投入跨越边界时纳入；内部循环水仅在补水或排放跨越边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或按批次记录纳入过程的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

仅在碱性清洗槽消耗氢氧化钠时纳入，并记录纯氢氧化钠当量和溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：外购溶液质量乘以有记录的氢氧化钠质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`

###### 直接过程供热用气态天然气（`natural_gas`）

仅在场址燃烧气态天然气，为该批次提供热处理、干燥或过程热时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已声明参比条件下计量或经发票核对的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy`

###### 氧气辅助切割用工业氧气（`industrial_oxygen`）

仅在已声明批次采用场址内氧气辅助切割时纳入供应的工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在已声明参比条件下计量的瓶装或散装供应体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 场址产生的不锈钢加工废料（`stainless_steel_scrap`）

仅对不锈钢板材路线纳入，记录离开过程的分类边角料和不合格件。

- 选定流：不锈钢废料（UUID未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量离开生产批次的分类不锈钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### 铝加工废料（`aluminium_scrap`）

仅对铝材路线纳入，记录回收或处置前的分类边角料和不合格件。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：计量离开生产批次的分类铝废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### ABS模塑和修边废料（`abs_production_scrap`）

仅对场址内ABS模塑路线纳入；清洁回用料在跨越边界前不计入总输出。

- 选定流：ABS塑料生产废料（UUID未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量离开过程边界的ABS流道料、修边料和不合格模塑件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### 水性清洗废水（`wastewater`）

废槽液、漂洗水或其他水性清洗废液离开过程时纳入，并披露处理状态和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或采用有记录的密度将计量体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`

##### 基本流

###### 天然气燃烧产生的直接化石源二氧化碳（`fossil_carbon_dioxide`）

仅纳入`natural_gas`行所记录天然气在场址内燃烧产生的直接化石源二氧化碳；排除上游电网和燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：天然气数量乘以有记录的场址或辖区燃烧因子和氧化基础
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`

### 过程：电子集成与校准（`electronics_calibration`）

#### 输入

##### 产品流

###### 装入零件的印制线路板（`printed_wire_board`）

仅在印制线路板实际装入可销售零件时纳入，并披露板卡设计和供应商。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：计量或采用供应商声明的、装入验收输出的板卡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_records`

###### 电子集成与校准用电力（`electronics_electricity`）

纳入可归属于该零件的焊接、编程、校准台和功能测试用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电力，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_records`

###### 甲烷校准气体（`methane_calibration_gas`）

仅在外购甲烷作为校准介质被消耗并跨越前景边界时纳入。

- 选定流：甲烷 `59aebe7f-6f66-41b4-aa71-49bea068dc7b`
- 流属性/单位：Mass / kg
- 数量规则：采用供应商记录或气瓶质量平衡确定生产批次消耗的甲烷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_media`

###### 二氧化碳校准气体（`carbon_dioxide_calibration_gas`）

仅在外购二氧化碳作为校准介质被消耗时纳入；不得与直接基本流排放行混淆。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：采用供应商记录或气瓶质量平衡确定生产批次消耗的二氧化碳
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_media`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：最终装配、检验与包装（`final_assembly_packing`）

#### 输入

##### 产品流

###### 最终装配、检验与包装用电力（`final_assembly_electricity`）

记录可归属于放行批次的装配工具、检验设备和包装操作所用外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电力，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

###### 初级包装用瓦楞纸箱（`corrugated_board_boxes`）

仅在瓦楞纸箱随出厂产品供应时纳入；纸箱质量不得计入参考数量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：计量或按采购记录分配给生产批次的纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格计量表或计数器成品零件/附件（`finished_meter_part`）

本行为参考产品输出。仅记录满足已声明放行准则的可销售专用零件或附件，初级包装质量应单独记录。

- 选定流：子类48263和48264所列货品的零件及附件（UUID未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量合格放行零件的净质量，不含初级包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg成品零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 单独计量的产品、路线和生产批次 | 分配共享负荷前，应先进行过程细分并使用批次、机器或生产线记录。 |  |
| `allocation_shared_operations` | 共享电力、用水和辅助操作 | 仅对剩余共享数量采用有记录的因果驱动因素，例如机器时间、批次时间或计量吞吐量；质量分配仅可作为后备方法且必须说明理由。 |  |
| `allocation_scrap` | 可回收生产废料 | 将废料作为显式废物输出记录；不得在前景清单内扣除避免原生材料的抵扣。回收或替代仅在下游建模系统中应用并予以披露。 |  |
| `allocation_no_complete_instrument_credit` | 同一场址装入完整仪器的零件 | 零件生产数据集应与完整仪器装配分开，不得把完整仪器的收入或功能分配给零件参考流。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `part_fabrication` | 材料投入 | 收货、领料和BOM记录 | 材料身份；牌号；形态；供应商；到货质量；领用质量；退料质量；批次编号 | 核对校准秤记录、库存事务和生产BOM | kg | 每批次 | 代表性生产期，通常至少12个月；较短生产活动则覆盖全部批次 | 每个报告场址和外包转化步骤 | 按原子材料流汇总净领用质量，并按合格输出归一化 | 采购规范、秤校准、BOM版本和库存核对 |
| `cp_fabrication_energy` | `part_fabrication` | 电力、天然气和工业氧气 | 仪表、发票、气瓶记录和设备日志 | 仪表起止读数；能源或气体数量；参比条件；设备小时；批次编号 | 可行时使用分表，否则将发票总量按有记录的因果驱动因素核对 | MJ或m3 | 每月及每批次分配 | 与输出记录相同期间 | 每个报告场址 | 扣除无关用量，按有记录的驱动因素分配剩余共享用量，并按合格输出归一化 | 仪表校准、发票核对和分配工作表 |
| `cp_cleaning_records` | `part_fabrication` | 工艺用水、氢氧化钠和废水 | 配槽、化学品领用、水表和排放记录 | 用水量；溶液量；NaOH分数；换槽；排放量；密度；处理状态 | 记录每次配槽和排放，并与场址水平衡核对 | kg | 每次换槽及每月核对 | 与输出记录相同期间 | 每个报告场址 | 将溶液换算为纯NaOH当量，汇总补水和排放并按合格输出归一化 | 化学品证书、仪表/秤校准和水平衡核查 |
| `cp_fabrication_wastes` | `part_fabrication` | 分类材料废料 | 废料箱称重、不合格记录和转移记录 | 材料身份；牌号；毛重和皮重；内部回用料；去向；批次编号 | 称量分类输出，内部循环料在跨越边界前排除 | kg | 每次转移并分配到批次 | 与输出记录相同期间 | 每个报告场址 | 按原子材料汇总净外运废料，并按合格输出归一化 | 校准秤、不合格记录和废物转移记录 |
| `cp_combustion_emissions` | `part_fabrication` | 直接化石源二氧化碳 | 燃料仪表和排放因子记录 | 天然气体积；参比条件；因子；因子单位；氧化基础；化石比例 | 对采集的天然气用量应用`calc_direct_fossil_co2` | kg | 每报告期 | 与天然气记录相同期间 | 每个具有直接燃烧的报告场址 | 计算、汇总并按合格输出归一化 | 数据集中保留因子来源、单位检查和独立复算 |
| `cp_electronics_records` | `electronics_calibration` | 印制线路板和电力 | 供应商BOM、称重、设备日志和分表 | 板卡身份；板卡质量；供应商；验收数量；电力；运行时间；批次编号 | 将装入板卡质量及电子线用电与验收零件核对 | kg和MJ | 每批次 | 与输出记录相同期间 | 每个适用生产线和场址 | 汇总装入的验收板卡质量和归属电力并归一化 | 供应商声明、BOM版本、秤/表校准和成品率核对 |
| `cp_calibration_media` | `electronics_calibration` | 甲烷和二氧化碳校准气体 | 气瓶收货、压力或质量记录及校准日志 | 气体身份；纯度；气瓶起止质量或压力；参比条件；排放/回收状态；批次编号 | 采用气瓶质量平衡或校准气体流量计量 | kg | 每次更换气瓶及每批次 | 与校准记录相同期间 | 每条校准线 | 扣除退回或回收量，将消耗量分配给已校准合格零件并归一化 | 供应商证书、气瓶记录、仪器校准和泄漏检查 |
| `cp_final_release` | `final_assembly_packing` | 装配用电、瓦楞纸箱和参考产品 | 分表/设备日志、包装领用、称重和放行记录 | 电力；纸箱质量；合格产品净质量；不合格品；图样/型号；放行状态；批次编号 | 将最终操作投入与校准后的产品净质量和质量放行核对 | MJ和kg | 每批次 | 与全部投入记录相同期间 | 每个报告场址 | 汇总放行产品净质量，单独记录包装，分配最终用电并归一化 | 秤/表校准、包装规范、放行证书和质量平衡审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个清单行 | 归一化数量 = 批次数量 / 合格成品零件净质量；按每1 kg参考产品报告。 | 批次流数量；`finished_meter_part`净质量 | 归一化清单数量 |  |
| `calc_pure_naoh` | `sodium_hydroxide` | 纯NaOH当量 = 外购溶液质量 × 供应商声明的NaOH质量分数。 | 溶液质量；NaOH质量分数 | kg氢氧化钠 |  |
| `calc_direct_fossil_co2` | `fossil_carbon_dioxide` | 直接化石源CO2 = 天然气数量 × 有记录的燃烧因子 × 氧化因子 × 化石比例，并确保单位和参比条件兼容。 | `natural_gas`；因子；氧化因子；化石比例 | kg直接化石源二氧化碳 |  |
| `calc_material_balance` | 材料路线校验 | 对每种材料核对总投入 = 产品所含材料 + 外运分类废料 + 已计量其他损失 ± 库存变化；调查无法解释的残差。 | 材料投入；产品组成；废料；其他损失；库存变化 | 材料平衡残差和完整性发现 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 主机仪器系列、零件名称/功能、图样或型号、主要材料、路线和放行准则必须可追溯至报告批次。 | 批准图样、BOM、规范和放行记录 |
| `dq_temporal_alignment` | 全部前景行 | 投入、输出和分配驱动因素必须覆盖同一代表性生产期；较短活动应覆盖全部生产批次并披露期间。 | 期间核对和批次台账 |
| `dq_measurement_control` | 计量和称重行 | 使用校准仪器或披露估算方法；保留源单位、参比条件和换算因子。 | 校准证书、原始仪表/称重记录和换算工作表 |
| `dq_completeness` | 过程图和清单 | 每个过程及原子行均应声明为纳入、不适用或未解决；将材料、水和能源记录与场址或生产线总量核对。 | 完整性矩阵、质量平衡和发票核对 |
| `dq_supplier_matching` | 外购投入 | 上游数据集应匹配材料牌号、产品状态、供应地域和技术；代理数据应作为数据质量限制记录。 | 供应商规范和数据集选择记录 |
| `dq_uncertainty_disclosure` | 无外部范围的行 | 存在多个批次时保留前景变异统计，并披露本PCR未提供外部定量范围。 | 批次级数据集、汇总统计和审查说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | 产品和参考流 | 确认输出是用于已声明CPC 48263或48264主机货品的单独上市零件/附件，排除完整仪器，并将结果归一化到1 kg合格净输出。 | `un-cpc-3-0-2025` |
| `validate_atomic_inventory` | 过程清单 | 确认每个选定流均为一个原子物理、化学、废物、能源或基本流交换，并且每个条件行均说明路线适用性。 |  |
| `validate_uuid_and_units` | 带UUID的行 | 确认UUID、公开状态100身份、流类型、属性、单位组及中文baseName；未解决身份应留空而不得替换为代理。 |  |
| `validate_process_coverage` | 过程图 | 确认两个必需过程均已表示，并且仅在满足条件时纳入电子集成/校准过程。 |  |
| `validate_balances` | 材料、水和燃料 | 审查材料平衡残差、用水与废水及留存/蒸发水、天然气用量与直接化石源CO2计算；解释材料残差，不得强制闭合。 |  |
| `validate_allocation_and_boundary` | 共享操作和系统边界 | 确认共享负荷采用有记录的因果驱动因素、外购投入已链接上游数据集、下游生命周期阶段已排除，并且前景数量未嵌入避免回收抵扣。 |  |
| `validate_range_disclosure` | 定量QA | 确认前景值未被表述为有来源支持的外部范围，并且重要流范围证据需求在审查两项独立兼容原始来源前持续披露。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明计量表/计数器专用零件或附件的工厂大门前景生产数据集 |
| downstream_use | `secondary_dataset`；经代表性和聚合审查后可作`background_dataset` |
| allowed_use | 在身份、路线、地域、技术、时间和分配兼容时，用于零件及其主机仪器的产品特定或供应商/场址特定LCA |
| excluded_use | 完整仪器；无关精密仪器零件；缺少额外性能证据的使用寿命或功能等效比较；材料差异显著零件之间的通用替代 |
| required_metadata | 规范PCR id；CPC引用；主机仪器系列；零件功能和图样/型号；材料牌号；制造路线；电子和校准状态；地域；期间；参考净质量；包装状态；上游数据集匹配；分配驱动因素；未解决UUID |
| required_quality_disclosure | 一手数据比例；计量和估算方法；时间覆盖；材料/水/能源平衡发现；供应商数据缺口；分配；废料去向；废水处理状态；未解决范围证据；不确定性和变异性 |
| update_trigger | 主机兼容性、图样或BOM、主要材料、电子设计、加工技术、校准介质、供应地域、能源组合、分配方法、包装发生变化，或计量前景绩效发生实质变化 |

## 11. 数据源

| 来源id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC Version 3.0 Structure》，2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-07检索并校验哈希） | CPC 48283正式产品身份及其与子类48263和48264货品的范围关联；不用于清单数量或范围 |
