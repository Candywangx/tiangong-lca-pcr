---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-sewing-thread
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.en-US.md
---

# 棉缝纫线

## 1. 范围与适用性

本 PCR 适用于以外购棉纱为原料生产棉缝纫线的工厂门前景数据包。边界从棉纱入厂开始，涵盖现场实际发生的并线/加捻，以及按路线门禁纳入的烧毛、煮练、过氧化氢漂白、丝光、筒子染色、水洗/漂洗、干燥/调湿、润滑、卷绕、检验和包装。棉花种植、轧花、纤维制备、入厂纱线纺纱、配送、缝制、使用和报废均不在本门到门边界内；若作相关声明，必须链接相应数据集。

不得平均任何条件路线。每个批次必须声明实际发生和未发生的工序、所用的每一种具体配方化学品与热载体，以及废水送至厂内还是厂外处理。下列原子卡未覆盖的还原染料、硫化染料、颜料、特种整理剂、其他制冷剂或其他包装路线，必须增补具体原子卡后，数据集方可声称完整。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-sewing-thread |
| classification_refs | CPC 3.0: 26350 - 棉缝纫线 |
| covered_products | 实际路线已声明的本色、漂白、丝光、染色、石蜡整理或有机硅整理的缝纫用棉缝纫线 |
| excluded_products | 非缝纫线用途的棉纱；化学纤维缝纫线；绣花线；捆扎线；绳索；机织物或针织物；成衣缝制工序 |
| representative_product | 经染色、润滑和并捻，卷绕在聚丙烯线轴并以纸板箱包装的棉缝纫线 |
| production_route | 纱线准备、并线和加捻；烧毛；煮练；过氧化氢漂白；丝光与中和；筒子染色；染后水洗与漂洗；干燥与调湿；润滑、最终卷绕、检验和包装 |
| market_state | 已声明棉纤维组成、纱支/线密度、股数、捻度、颜色状态、整理、线轴、净质量、地域和报告期的工厂门可销售缝纫线 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 产品是什么 | 工厂门可销售的棉缝纫线 |
| 数量是多少 | 1 kg 缝纫线净质量，不含线轴和运输包装 |
| 性能如何 | 满足所声明的棉纤维组成、线密度、股数、捻度、断裂强力/伸长等级、染色产品的色牢度等级、整理与包装规格 |
| 持续时间或周期 | 工厂门放行的一个生产批次；不声明使用寿命等效性 |
| reference_flow_link | final_cotton_sewing_thread |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 棉缝纫线 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 26350；缝纫线用途；棉质量分数；入厂纱线身份；纱支或线密度；股数；捻向与捻度；烧毛状态；煮练/漂白/丝光状态；染料类别与颜色状态；润滑剂身份；线轴身份；缝纫线净质量；生产地域；报告期 |

该 Tiangong 参考行是已核验的代表性染色路线。其通用“染色棉纱线类”显示名称不能替代 CPC 26350 和缝纫线限定符；未染色产品必须明确声明颜色状态。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | final_cotton_sewing_thread | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量调湿后的缝纫线净质量，排除线轴和运输包装；披露含水率/调湿基准。 |
| `material_mass` | 每种材料、化学品、包装组件、废物及质量排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各具体身份必须分开；仅在有效含量经核验时将制剂质量换算为活性物质当量，并同时保留原始值与换算值。 |
| `water_volume` | 每股水流与废水流 | 体积 | m3 | 按单元操作分别计量新水、回用水和排水；无水平衡时不得假定废水量等于进水量。 |
| `carrier_energy` | 电力、天然气、蒸汽及外购热水 | 能量 | kWh or MJ | 各载能介质必须分开并报告换算因子；不得平均互斥供热路线。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 缝纫线工厂接收的外购棉纱；声明供应商、批次、组成、纱支、股数、捻度、颜色/整理状态、质量及含水率基准 |
| starting_condition_role | 门到门棉缝纫线数据集的上游产品输入 |
| product_classification_scope | CPC 3.0 代码 26350；分类是范围证据，而非规范身份 |
| recursive_input_rule | 已作为棉缝纫线出售的外购输入仍是独立的上游产品流，不得改标为原料棉纱或递归展开。 |
| upstream_dataset_requirement | 每种外购纱线均需匹配棉纤维组成、纺纱路线、地域、含水率基准和市场状态的兼容上游数据集；否则必须明确记录数据缺口。 |
| disclosure | 声明每个现场单元操作、路线门禁、热载体、配方化学品、废水去向、排放点、废物路线及排除的上游/下游阶段。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_unit_operations` | 前景门到门生产 | 纳入每个实际发生的所列单元操作，并向其归属输入/输出；省略工序必须给出明确的不适用理由。 | `csir-sewing-threads-1979`; `eu-textiles-bat-2022` |
| `boundary_route_gates` | 条件路线 | 不得平均染色与未染色、丝光与未丝光、石蜡与 PDMS，也不得平均不同供热或制冷剂路线。 | `csir-sewing-threads-1979`; `eu-textiles-bat-2022` |
| `boundary_effluent` | 湿法加工 | 各单元操作废水流在移交点前必须分开；直接水体排放必须依据监测建立污染物特定基本流卡。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `plying_twisting` | 纱线准备、并线和加捻 | `required` | 始终纳入；将外购棉单纱或股线加工为所声明结构的缝纫线 | 前景机械加工 | 转移 1 kg 可销售棉缝纫线净质量 |
| `singeing` | 烧毛 | `conditional` | 仅当产品规格声明经过烧毛时纳入；否则不适用 | 路线特定的表面纤维去除 | 转移 1 kg 烧毛后缝纫线 |
| `scouring` | 煮练 | `conditional` | 仅当现场在漂白、丝光或染色前进行水相煮练时纳入 | 路线特定的湿法前处理 | 转移 1 kg 煮练后缝纫线 |
| `bleaching` | 过氧化氢漂白 | `conditional` | 仅对采用所声明过氧化氢路线的漂白或浅色产品纳入 | 路线特定的漂白 | 转移 1 kg 漂白后缝纫线 |
| `mercerising` | 丝光与中和 | `conditional` | 仅当产品规格声明棉缝纫线经过丝光时纳入 | 路线特定的棉线整理 | 转移 1 kg 丝光后缝纫线 |
| `package_dyeing` | 筒子染色 | `conditional` | 仅对染色产品纳入；建模所声明的活性染料路线，不得与还原染料、硫化染料、颜料或未染色路线平均 | 路线特定的着色 | 转移 1 kg 染色后缝纫线 |
| `washing_rinsing` | 染后水洗与漂洗 | `conditional` | 湿法前处理或染色需要水洗/漂洗时纳入；将水和废水归属至实际的上游工序 | 路线特定的水洗 | 转移 1 kg 水洗后缝纫线 |
| `drying_conditioning` | 干燥与调湿 | `conditional` | 任何湿法工序后纳入；分别选择实际使用的电力、天然气、蒸汽和制冷剂卡，不得平均互斥供热路线 | 路线特定的水分去除 | 转移 1 kg 干燥调湿后的缝纫线 |
| `lubrication_winding_packaging` | 润滑、最终卷绕、检验和包装 | `required` | 始终纳入；分别选择实际采用的石蜡或聚二甲基硅氧烷整理路线，并记录每个包装组件 | 前景最终整理与包装 | 转移 1 kg 可销售棉缝纫线净质量 |

### 过程：纱线准备、并线和加捻 (`plying_twisting`)

#### 输入

##### 产品流

###### 外购棉纱 (`input_cotton_yarn`)

本卡记录一个原子交换。适用门禁：每种组成不同的棉纱须作为独立数据集交换记录；本卡仅覆盖一个已声明的棉纱等级。

- 选定流： 缝纫线加工用棉纱
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用净质量减去有记录的退料质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_mass`
- 来源： `csir-sewing-threads-1979`

###### 并线与加捻用电 (`input_twisting_electricity`)

本卡记录一个原子交换。

- 选定流： 交流电
- 流属性 / 单位：能量 / kWh
- 数量规则：并线与加捻设备的分表计量用电量，或按物理关系分配的用电量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_energy`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 棉纱下脚料 (`output_cotton_yarn_offcuts`)

本卡记录一个原子交换。

- 选定流： 棉纱下脚料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开该批次并送外部再使用、回收或处置的实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_mass`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：烧毛 (`singeing`)

#### 输入

##### 产品流

###### 烧毛用天然气 (`input_singeing_natural_gas`)

本卡记录一个原子交换。适用门禁：仅在采用燃气火焰直接烧毛时记录。

- 选定流： 天然气
- 流属性 / 单位：低位热值 / MJ
- 数量规则：直接烧毛燃烧器燃烧的计量天然气量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_energy`
- 来源： `eu-textiles-bat-2022`

###### 烧毛用电 (`input_singeing_electricity`)

本卡记录一个原子交换。

- 选定流： 交流电
- 流属性 / 单位：能量 / kWh
- 数量规则：烧毛传动与抽风设备的分表计量用电量，或按物理关系分配的用电量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_energy`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 烧毛产生的化石二氧化碳 (`output_singeing_co2_fossil`)

本卡记录一个原子交换。

- 选定流： 排放至空气的化石二氧化碳
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：燃料量乘以经审查的现场或供应商碳因子
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：燃料清单 (`fuel_inventory`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_fuel_energy`
- 来源： `eu-textiles-bat-2022`

###### 烧毛产生的氮氧化物 (`output_singeing_nox`)

本卡记录一个原子交换。

- 选定流： 排放至空气的氮氧化物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟囱排放负荷，或燃料量乘以有文件依据的适用因子
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：燃料清单 (`fuel_inventory`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源： `eu-textiles-bat-2022`

###### 烧毛棉尘 (`output_singeing_dust`)

本卡记录一个原子交换。

- 选定流： 排放至空气的颗粒物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：治理后有组织排放的实测质量；不得把无组织粉尘估算为合并排放
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_air_emissions`
- 来源： `eu-textiles-bat-2022`

### 过程：煮练 (`scouring`)

#### 输入

##### 产品流

###### 煮练工艺水 (`input_scouring_water`)

本卡记录一个原子交换。

- 选定流： 工艺水
- 流属性 / 单位：体积 / m3
- 数量规则：煮练消耗的计量新水（含所分配清洗水）减去经核验的回用水
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 煮练后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wet_process_water`
- 来源： `eu-textiles-bat-2022`
- 数量范围：BAT 煮练用水年度平均绩效区间
  - 范围角色：典型范围 (`typical_range`)
  - 下限： 5
  - 上限： 15
  - 单位： m3/t
  - 基准：每吨经批式煮练的纤维素材料
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：外部来源 (`external_source`)
  - 来源： `eu-textiles-bat-2022`

###### 煮练用氢氧化钠 (`input_scouring_sodium_hydroxide`)

本卡记录一个原子交换。

- 选定流： 氢氧化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据配方领料量与含量检测值计算的实测纯物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 煮练后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 脂肪醇聚氧乙烯醚润湿剂 (`input_scouring_alcohol_ethoxylate`)

本卡记录一个原子交换。

- 选定流： 脂肪醇聚氧乙烯醚表面活性剂
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投加至煮练浴的实测活性物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 煮练后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 煮练用蒸汽 (`input_scouring_steam`)

本卡记录一个原子交换。

- 选定流： 蒸汽
- 流属性 / 单位：能量 / MJ
- 数量规则：分配至煮练的计量交付蒸汽能量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 煮练后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal_energy`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 煮练废水 (`output_scouring_wastewater`)

本卡记录一个原子交换。

- 选定流：煮练废水
- 流属性 / 单位：体积 / m3
- 数量规则：转移至厂内或厂外处理的计量废水量，扣除有记录的回用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 煮练后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：过氧化氢漂白 (`bleaching`)

#### 输入

##### 产品流

###### 漂白工艺水 (`input_bleaching_water`)

本卡记录一个原子交换。

- 选定流： 工艺水
- 流属性 / 单位：体积 / m3
- 数量规则：漂白消耗的计量新水（含所分配清洗水）减去经核验的回用水
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 漂白后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wet_process_water`
- 来源： `eu-textiles-bat-2022`
- 数量范围：BAT 批式漂白用水年度平均区间
  - 范围角色：典型范围 (`typical_range`)
  - 下限： 10
  - 上限： 32
  - 单位： m3/t
  - 基准：每吨经批式漂白的纤维素材料
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：外部来源 (`external_source`)
  - 来源： `eu-textiles-bat-2022`

###### 过氧化氢漂白剂 (`input_bleaching_hydrogen_peroxide`)

本卡记录一个原子交换。

- 选定流： 过氧化氢
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据配方领料量与含量检测值计算的实测纯物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 漂白后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 漂白用氢氧化钠 (`input_bleaching_sodium_hydroxide`)

本卡记录一个原子交换。

- 选定流： 氢氧化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据配方领料量与含量检测值计算的实测纯物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 漂白后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 漂白用蒸汽 (`input_bleaching_steam`)

本卡记录一个原子交换。

- 选定流： 蒸汽
- 流属性 / 单位：能量 / MJ
- 数量规则：分配至漂白的计量交付蒸汽能量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 漂白后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal_energy`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 漂白废水 (`output_bleaching_wastewater`)

本卡记录一个原子交换。

- 选定流： 漂白废水
- 流属性 / 单位：体积 / m3
- 数量规则：转移至厂内或厂外处理的计量废水量，扣除有记录的回用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 漂白后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：丝光与中和 (`mercerising`)

#### 输入

##### 产品流

###### 丝光工艺水 (`input_mercerising_water`)

本卡记录一个原子交换。

- 选定流： 工艺水
- 流属性 / 单位：体积 / m3
- 数量规则：丝光与中和消耗的计量新水减去经核验的回用水
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 丝光后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wet_process_water`
- 来源： `eu-textiles-bat-2022`
- 数量范围：BAT 丝光用水年度平均绩效区间
  - 范围角色：典型范围 (`typical_range`)
  - 下限： 2
  - 上限： 13
  - 单位： m3/t
  - 基准：每吨经丝光的纤维素材料
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：外部来源 (`external_source`)
  - 来源： `eu-textiles-bat-2022`

###### 丝光用氢氧化钠 (`input_mercerising_sodium_hydroxide`)

本卡记录一个原子交换。

- 选定流： 氢氧化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投加至丝光浴的实测纯物质当量质量减去已回收入库的烧碱
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 丝光后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `csir-sewing-threads-1979`; `eu-textiles-bat-2022`

###### 中和用乙酸 (`input_mercerising_acetic_acid`)

本卡记录一个原子交换。

- 选定流： 乙酸
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用于中和的实测纯物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 丝光后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 丝光废水 (`output_mercerising_wastewater`)

本卡记录一个原子交换。

- 选定流： 丝光废水
- 流属性 / 单位：体积 / m3
- 数量规则：转移至厂内或厂外处理的计量废水量，扣除有记录的烧碱和水回收量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 丝光后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：筒子染色 (`package_dyeing`)

#### 输入

##### 产品流

###### 筒子染色工艺水 (`input_dyeing_water`)

本卡记录一个原子交换。

- 选定流： 工艺水
- 流属性 / 单位：体积 / m3
- 数量规则：染色工序消耗的计量新水（含所分配清洗水）减去经核验的回用水
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wet_process_water`
- 来源： `eu-textiles-bat-2022`
- 数量范围：BAT 纱线批式染色用水年度平均区间
  - 范围角色：典型范围 (`typical_range`)
  - 下限： 3
  - 上限： 140
  - 单位： m3/t
  - 基准：每吨经批式染色的纱线
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：外部来源 (`external_source`)
  - 来源： `eu-textiles-bat-2022`

###### 活性染料 (`input_reactive_dye`)

本卡记录一个原子交换。适用门禁：仅用于已声明的活性染料路线；其他染料类别须建立独立原子卡并审查路线。

- 选定流： 活性染料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：已声明色号配方领用的实测活性染料当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 活性染色用氯化钠 (`input_dyeing_sodium_chloride`)

本卡记录一个原子交换。

- 选定流： 氯化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投加至染浴的实测纯物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 活性染色用碳酸钠 (`input_dyeing_sodium_carbonate`)

本卡记录一个原子交换。

- 选定流： 碳酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投加至染浴的实测纯物质当量质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_chemical`
- 来源： `eu-textiles-bat-2022`

###### 筒子染色用蒸汽 (`input_dyeing_steam`)

本卡记录一个原子交换。适用门禁：仅在蒸汽跨越过程边界时记录；不得与外购热水平均。

- 选定流： 蒸汽
- 流属性 / 单位：能量 / MJ
- 数量规则：分配至筒子染色的计量交付蒸汽能量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal_energy`
- 来源： `eu-textiles-bat-2022`

###### 筒子染色用外购热水 (`input_dyeing_hot_water`)

本卡记录一个原子交换。适用门禁：仅在外购热水跨越边界时记录；不得与蒸汽平均。

- 选定流： 热水
- 流属性 / 单位：能量 / MJ
- 数量规则：分配至筒子染色的外购热水计量交付热能
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal_energy`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废活性染液 (`output_spent_dye_liquor`)

本卡记录一个原子交换。

- 选定流： 废活性染液
- 流属性 / 单位：体积 / m3
- 数量规则：单独收集并转移至处理设施的计量废染液量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 染色后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：染后水洗与漂洗 (`washing_rinsing`)

#### 输入

##### 产品流

###### 染后水洗与漂洗用水 (`input_rinsing_water`)

本卡记录一个原子交换。

- 选定流： 工艺水
- 流属性 / 单位：体积 / m3
- 数量规则：染后水洗与漂洗使用的计量新水减去经核验的回用水
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 水洗后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wet_process_water`
- 来源： `eu-textiles-bat-2022`

###### 水洗与漂洗用电 (`input_rinsing_electricity`)

本卡记录一个原子交换。

- 选定流： 交流电
- 流属性 / 单位：能量 / kWh
- 数量规则：泵与传动设备的分表计量用电量，或按物理关系分配的用电量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 水洗后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_energy`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 染后水洗与漂洗废水 (`output_rinsing_wastewater`)

本卡记录一个原子交换。

- 选定流：染后水洗与漂洗废水
- 流属性 / 单位：体积 / m3
- 数量规则：转移至厂内或厂外处理的计量废水量，扣除有记录的回用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 水洗后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：干燥与调湿 (`drying_conditioning`)

#### 输入

##### 产品流

###### 干燥用电 (`input_drying_electricity`)

本卡记录一个原子交换。

- 选定流： 交流电
- 流属性 / 单位：能量 / kWh
- 数量规则：干燥机与空气处理设备的分表计量用电量，或按物理关系分配的用电量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 干燥调湿后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_energy`
- 来源： `eu-textiles-bat-2022`

###### 直接干燥用天然气 (`input_drying_natural_gas`)

本卡记录一个原子交换。适用门禁：仅用于直接燃烧干燥；不得与蒸汽加热或全电路线平均。

- 选定流： 天然气
- 流属性 / 单位：低位热值 / MJ
- 数量规则：直接燃烧干燥设备燃烧的计量天然气量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 干燥调湿后缝纫线
- 基准类型：燃料清单 (`fuel_inventory`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_energy`
- 来源： `eu-textiles-bat-2022`

###### 间接干燥用蒸汽 (`input_drying_steam`)

本卡记录一个原子交换。适用门禁：仅用于蒸汽加热路线；不得与天然气直接加热或全电路线平均。

- 选定流： 蒸汽
- 流属性 / 单位：能量 / MJ
- 数量规则：分配至间接干燥的计量交付蒸汽能量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 干燥调湿后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal_energy`
- 来源： `eu-textiles-bat-2022`

###### R-134a 补充制冷剂 (`input_refrigerant_r134a`)

本卡记录一个原子交换。适用门禁：仅在范围内冷却设备使用 R-134a 时记录；其他制冷剂须建立独立原子卡。

- 选定流： 1,1,1,2-四氟乙烷（R-134a）
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于范围内工艺冷却设备的实测补充制冷剂质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 干燥调湿后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_refrigerant`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排放至空气的 R-134a (`output_refrigerant_r134a_air`)

本卡记录一个原子交换。

- 选定流： 排放至空气的 1,1,1,2-四氟乙烷（R-134a）
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： R134a_emitted_kg = opening_inventory_kg + purchases_kg - closing_inventory_kg - recovered_kg
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 干燥调湿后缝纫线
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant`
- 来源： `eu-textiles-bat-2022`

### 过程：润滑、最终卷绕、检验和包装 (`lubrication_winding_packaging`)

#### 输入

##### 产品流

###### 石蜡缝纫线整理剂 (`input_paraffin_wax_finish`)

本卡记录一个原子交换。适用门禁：仅用于已声明的石蜡整理路线；不得与有机硅路线平均。

- 选定流： 石蜡
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：施用的实测石蜡质量减去有记录的退料质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish_mass`
- 来源： `csir-sewing-threads-1979`

###### 聚二甲基硅氧烷缝纫线整理剂 (`input_pdms_finish`)

本卡记录一个原子交换。适用门禁：仅用于已声明的有机硅整理路线；不得与石蜡路线平均。

- 选定流： 聚二甲基硅氧烷
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：施用的实测聚二甲基硅氧烷活性质量减去有记录的退料质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish_mass`
- 来源： `csir-sewing-threads-1979`

###### 最终卷绕与包装用电 (`input_final_winding_electricity`)

本卡记录一个原子交换。

- 选定流： 交流电
- 流属性 / 单位：能量 / kWh
- 数量规则：润滑、卷绕、检验与包装设备的分表计量用电量，或按物理关系分配的用电量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_energy`
- 来源： `eu-textiles-bat-2022`

###### 聚丙烯缝纫线轴 (`input_polypropylene_spool`)

本卡记录一个原子交换。

- 选定流： 聚丙烯缝纫线轴
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经核验的单件质量乘以放行产品所含线轴净数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源： `eu-pef-2021`

###### 纸板包装箱 (`input_paperboard_box`)

本卡记录一个原子交换。

- 选定流： 纸板箱
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经核验的单件质量乘以该批次使用的纸箱净数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源： `eu-pef-2021`

###### 低密度聚乙烯包装膜 (`input_ldpe_film`)

本卡记录一个原子交换。

- 选定流： 低密度聚乙烯薄膜
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至该批次的实测膜卷消耗质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging`
- 来源： `eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终棉缝纫线 (`final_cotton_sewing_thread`)

本卡记录一个原子交换。尚未核验到语义精确的天工产品流；同 CPC 的“染色棉纱线类”候选范围宽于棉缝纫线，因此予以拒绝。

- 选定流： 棉缝纫线
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格棉缝纫线的实测净质量，不含线轴与运输包装
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_product_output`
- 来源： `unsd-cpc-3-0-2025`

##### 废物流

###### 最终棉缝纫线下脚料 (`output_final_thread_offcuts`)

本卡记录一个原子交换。

- 选定流： 棉缝纫线下脚料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至外部再使用、回收或处置的实测净质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：现场特定 (`site_specific`)
- 归一化基准：每 1 kg 可销售棉缝纫线净质量
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_mass`
- 来源： `eu-textiles-bat-2022`

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用计量与服务 | 首先细分生产线、批次和单元操作，并采集可直接归属的记录。 | `eu-pef-2021` |
| `allocation_physical_relation` | 剩余共用负荷 | 无法细分时，采用有文件依据的因果物理关系，例如运行时间、计量产量或交付能量；仅当净质量能代表该关系时才允许按净质量分配。 | `eu-pef-2021` |
| `allocation_no_waste_credit` | 内部返工与外运废物 | 内部返工回归原批次且不计联产品抵扣；外运废物及其回收建模须另行报告。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `plying_twisting` | 棉纱 | 仓库领料与退料记录 | material_id; supplier_lot; gross_kg; return_kg; moisture_basis | 称量并核对领用质量减退料质量 | kg | 每批；每月核对 | 所声明报告期 | 所有范围内生产线 | 按 material_id 和批次汇总净消耗质量，再除以合格产出 | 经校准秤具；供应商规格；库存核对 |
| `cp_process_energy` | `multiple` | 电力 | 分表与生产记录 | meter_start; meter_end; process_id; lot_id; operating_time | 优先直接分表计量；否则采用有文件依据的物理分配 | kWh | 每班次或每批；每月核对 | 所声明报告期 | 所有范围内设备 | assigned_kWh / conforming_output_kg | 电表校准；电费账单核对；分配工作表 |
| `cp_fuel_energy` | `singeing; drying_conditioning` | 天然气 | 燃料计量与燃料规格 | meter_start; meter_end; net_calorific_value; process_id; lot_id | 按工序直接计量燃料 | m3 and MJ | 每班次或每批；每月核对 | 所声明报告期 | 所有范围内燃烧器 | fuel_MJ = volume_m3 * NCV_MJ_per_m3；按合格产出归一化 | 仪表校准；供应商低位热值；燃烧记录 |
| `cp_thermal_energy` | `scouring; bleaching; package_dyeing; drying_conditioning` | 蒸汽或外购热水 | 热量表与公用工程记录 | mass_or_volume; inlet_temperature; outlet_temperature; pressure; process_id; lot_id | 按载能介质分别计量交付热量 | MJ | 每批；每月核对 | 所声明报告期 | 所有范围内湿法与干燥设备 | 各载能介质的 delivered_MJ / process_output_kg；不得平均不同载能介质 | 仪表校准；蒸汽/热水平衡；账单核对 |
| `cp_wet_process_water` | `scouring; bleaching; mercerising; package_dyeing; washing_rinsing` | 工艺水 | 水表与批次记录 | meter_start; meter_end; reused_m3; process_id; lot_id | 按单元操作分别计量新水与回用水 | m3 | 每批；每月核对 | 所声明报告期 | 所有范围内湿法工序 | fresh_m3 = gross_input_m3 - verified_reused_m3；再除以过程产出 | 水表校准；水平衡；批次记录 |
| `cp_recipe_chemical` | `scouring; bleaching; mercerising; package_dyeing` | 每种配方化学品 | 批次配方、领料、退料及含量检测记录 | chemical_id; CAS_or_spec; formulation_kg; active_fraction; return_kg; process_id; lot_id | 分别记录每种制剂，仅在有效含量经核验时换算 | kg | 每批 | 所声明报告期 | 所有范围内湿法工序 | active_kg = (issued_kg - returned_kg) * active_fraction | 批准配方；供应商 SDS/规格；经校准加料记录 |
| `cp_wastewater` | `scouring; bleaching; mercerising; package_dyeing; washing_rinsing` | 每股废水流 | 流量计、批次排放及转移记录 | stream_id; process_id; volume_m3; destination; COD; pH; temperature; sampling_time | 在混合或处理前计量每股分流废水 | m3 | 每次排放；每月核对 | 所声明报告期 | 所有范围内湿法工序 | 按 stream_id 和去向汇总；仅扣除经核验的回用量 | 流量计校准；样品交接记录；实验室报告；水平衡 |
| `cp_air_emissions` | `singeing` | 每种空气排放 | 烟道测试或连续监测 | pollutant_id; concentration; gas_flow; duration; moisture; oxygen_reference | 采用适用的 EN/ISO 方法，按排放点计算污染物质量 | kg | 许可证或 BAT 规定频次，以及实质变化后 | 所声明报告期 | 所有范围内烧毛排放点 | pollutant_kg = concentration * standardised_gas_volume | 认可实验室报告；仪器 QA/QC；运行日志 |
| `cp_refrigerant` | `drying_conditioning` | R-134a | 制冷剂库存与维修记录 | opening_kg; purchases_kg; closing_kg; recovered_kg; equipment_id; lot_allocation | 按制冷剂身份核对密闭系统库存与维修补充量 | kg | 每次维修事件；每年核对 | 所声明报告期 | 范围内工艺冷却设备 | R134a_emitted_kg = opening_inventory_kg + purchases_kg - closing_inventory_kg - recovered_kg | 技师维修记录；钢瓶称重；泄漏测试 |
| `cp_finish_mass` | `lubrication_winding_packaging` | 石蜡或 PDMS | 整理剂领料、退料及制剂记录 | finish_id; active_fraction; issued_kg; returned_kg; lot_id | 分别记录每条整理路线并计算活性质量 | kg | 每批 | 所声明报告期 | 所有范围内润滑生产线 | active_finish_kg = (issued_kg - returned_kg) * active_fraction | 供应商规格；批次记录；经校准加料记录 |
| `cp_packaging` | `lubrication_winding_packaging` | 每个包装组件 | 组件数量、单件质量与膜卷消耗记录 | component_id; count; sampled_unit_mass; roll_start_kg; roll_end_kg; lot_id | 称量代表性单件并核对领用数量 | kg | 每个包装批次 | 所声明报告期 | 放行产品的全部包装 | component_kg = net_count * verified_unit_mass，或采用 measured_roll_consumption | 经校准秤具；供应商规格；数量核对 |
| `cp_product_output` | `lubrication_winding_packaging` | 最终棉缝纫线 | 成品称量与质量放行记录 | lot_id; gross_kg; spool_tare_kg; packaging_tare_kg; net_thread_kg; moisture_basis; release_status | 称量放行产品，并扣除分别测得的非缝纫线皮重 | kg | 每批 | 所声明报告期 | 所有放行参考产品 | net_thread_kg = gross_kg - spool_tare_kg - packaging_tare_kg | 经校准秤具；皮重研究；质量放行记录 |
| `cp_waste_mass` | `plying_twisting; lubrication_winding_packaging` | 每股棉线废物流 | 废物箱称量与转移记录 | waste_id; source_process; gross_kg; tare_kg; destination; date | 按废物身份分别称量每次转移 | kg | 每次转移；每月核对 | 所声明报告期 | 所有范围内生产线 | net_waste_kg = gross_kg - tare_kg | 经校准秤具；转移凭证；质量平衡 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | final_cotton_sewing_thread | net_thread_kg = gross_kg - spool_tare_kg - packaging_tare_kg | gross_kg; spool_tare_kg; packaging_tare_kg | net_thread_kg | `eu-pef-2021` |
| `calc_normalized_flow` | 每张清单行 | normalized_amount = lot_flow_amount / net_thread_kg | lot_flow_amount; net_thread_kg | 每 1 kg 缝纫线净质量对应的数量 | `eu-pef-2021` |
| `calc_recipe_active_mass` | 每种配方化学品 | active_kg = (issued_kg - returned_kg) * active_fraction | issued_kg; returned_kg; active_fraction | active_kg | `eu-textiles-bat-2022` |
| `calc_r134a_emission` | output_refrigerant_r134a_air | R134a_emitted_kg = opening_inventory_kg + purchases_kg - closing_inventory_kg - recovered_kg | opening_inventory_kg; purchases_kg; closing_inventory_kg; recovered_kg | R134a_emitted_kg | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与棉纱输入 | 保留产品规格、CPC 26350 证据、棉纤维组成、缝纫线用途、纱支、股数、捻度、路线状态和最终放行记录。 | 供应商规格；物料清单；质量放行记录 |
| `dq_temporal` | 所有前景行 | 优先采用具有代表性的连续 12 个月；披露更短生产期、停机、季节性和产品组合。 | 带日期的生产、计量、配方、实验室与转移记录 |
| `dq_completeness` | 所有过程与流 | 核对棉纱质量、缝纫线产出、库存变化、下脚料、每种配方化学品、每种载能介质、包装、废水、废物和直接排放；解释缺口但不得强行闭合平衡。 | 经签署的物料、水和能量平衡；边界检查表 |
| `dq_uuid` | 所有选定流 | 启用前，仅在 state_code=100 直读确认名称语义、流类型、属性和单位准确后采用清单 UUID；未解决身份须保持显式。 | 与 row_id 关联的 UUID 审查记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考流 | 数据集未按 1 kg 棉缝纫线净质量归一化、包含线轴/包装皮重或遗漏任一必需限定符时判定失败。 | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `validate_atomic_flows` | 每张清单卡 | 使用集合标签，或合并公用工程、化学品、包装、废物或排放时判定失败；每张卡只能标识一个交换。 | `eu-textiles-bat-2022` |
| `validate_route_gate` | 条件过程与卡片 | 对互斥路线求平均，或实际存在的路线缺少相应过程和原子交换时判定失败。 | `csir-sewing-threads-1979`; `eu-textiles-bat-2022` |
| `validate_water_emissions` | 直接排放 | 直接排放声明仅报告废水体积时判定失败；须为 COD 及输入/输出清单识别的其他相关物质增设独立监测污染物基本流。 | `eu-textiles-bat-2022` |
| `validate_uuid_state` | 含 UUID 的行 | 仅接受已核验准确身份并声明属性/单位的 Tiangong state_code=100 行。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 棉缝纫线门到门前景生产数据集 |
| downstream_use | `secondary_dataset`；经方法学审查与代表性评估后可作为 `background_dataset` |
| allowed_use | 已链接兼容的上游棉纱数据集及全部实际条件路线时，可用于更广泛的 LCA 模型 |
| excluded_use | 化学纤维缝纫线；通用棉纱；缺少上游纱线的摇篮到工厂门声明；遗漏湿法加工的染色/整理声明；路线平均代理 |
| required_metadata | PCR id；CPC 26350；必需限定符；设施；地域；报告期；过程门禁；配方；载能介质身份；废水去向；分配；数据质量；未解决 UUID |
| required_quality_disclosure | 一手记录占比；计量覆盖率；配方含量检测覆盖率；时间/现场覆盖；质量/水/能量平衡；共用负荷分配；排除流；直接排放监测；未解决 UUID |
| update_trigger | 棉纱等级、股数/捻度、湿法路线、染料类别、整理剂、能源载体、制冷剂、包装、废水处理、分配、设施或实质证据发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《产品总分类 3.0 版解释性说明》，代码 26350，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf （检索于 2026-08-21） | 官方类别身份，以及与非缝纫用棉纱的区分 |
| `eu-textiles-bat-2022` | `official_guidance` | 欧盟委员会实施决定（EU）2022/2508，《纺织工业最佳可行技术结论》，http://data.europa.eu/eli/dec_impl/2022/2508/oj （检索于 2026-08-21） | 单元操作边界；逐过程材料、水、能源、化学品、废物、废水和排放监测；用水范围；路线控制 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会建议（EU）2021/2279，《产品环境足迹方法》，http://data.europa.eu/eli/reco/2021/2279/oj （检索于 2026-08-21） | 功能单位、参考流归一化、企业特定数据、细分与物理分配 |
| `csir-sewing-threads-1979` | `handbook` | Hunter, L. 与 Cawood, M.P.，《纺织品技术资料与数据 IV：可缝性、缝纫针、缝纫线与接缝》，南非 CSIR 羊毛与纺织研究所，1979，https://researchspace.csir.co.za/bitstream/10204/4720/1/Hunter%20L_2.pdf （检索于 2026-08-21） | 缝纫线并线/捻度、棉线丝光、烧毛、染色、石蜡/有机硅润滑、整理、卷绕及质量限定符 |
