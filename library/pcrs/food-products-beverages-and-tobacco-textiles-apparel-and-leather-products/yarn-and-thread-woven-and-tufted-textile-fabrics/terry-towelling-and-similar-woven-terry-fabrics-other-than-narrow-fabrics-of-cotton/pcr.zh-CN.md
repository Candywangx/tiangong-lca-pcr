---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics-of-cotton
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 棉毛巾毛圈织物和类似的棉毛圈织物（狭幅织物除外）

## 1. 范围与适用性

本 PCR 适用于制造工厂大门交付的棉毛巾毛圈织物和类似机织毛圈织物（狭幅织物除外）的前景数据包。前景路线从外购棉纱开始，覆盖纱线准备与上浆、毛圈织造、湿法前处理、依路线适用的染色，以及最终烘干与后整理。

本 PCR 不包括狭幅织物、棉以外纤维制成的毛圈织物、CPC 26840 以外的机织绒头或雪尼尔织物；棉花种植、轧花和纺纱仅通过上游数据集链接；织物裁剪缝制为毛巾等制品、包装、配送、零售、使用、洗涤及报废也不在本边界内。更宽的研究可把这些阶段作为独立过程加入，但不得改变本工厂大门参考流。成品必须以棉成分、毛圈结构、幅宽类别、颜色状态、整理、含水基准和生产地理位置加以识别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics-of-cotton |
| classification_refs | CPC 3.0 `26840`，精确映射 |
| covered_products | 棉毛巾毛圈织物及类似机织毛圈织物成品（狭幅织物除外） |
| excluded_products | 狭幅织物；非棉毛圈织物；CPC 26840 以外的机织绒头或雪尼尔织物；已裁剪、缝制或制成的毛巾制品 |
| representative_product | 处于所声明漂白、染色或其他整理状态的机织棉毛圈织物成品 |
| production_route | 棉纱准备与上浆；毛圈织造；退浆与精练；条件性漂白或染色；烘干与后整理 |
| market_state | 成品，工厂大门生产混合 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供吸水毛圈织物表面的机织棉毛圈织物成品 |
| How much | 工厂大门处 1 kg 成品织物 |
| How well | 符合所声明的棉成分、毛圈结构、幅宽类别、颜色状态、整理、面密度和含水基准 |
| How long or cycle | 工厂大门处一个生产批次；不表示使用阶段寿命 |
| reference_flow_link | `finishing_and_drying` 的棉毛圈织物成品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Terry towelling and similar woven terry fabrics (other than narrow fabrics) of cotton `61be29ff-288e-4570-8335-4e03760c9255` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 棉成分；毛圈结构；织物幅宽及非狭幅织物确认；声明颜色状态（坯布 / 漂白 / 染色 / 其他）；整理处理；面密度；含水基准；生产地理位置；生产技术；工厂大门 |

每个前景数据包必须在结构化元数据或等效记录字段中声明所有必需限定信息。精确参考产品流和 Mass 属性仅在混合检索及 Tiangong state-100 直接回读通过后接受；本 PCR 不保存数据集版本。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和中间织物质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明含水基准，把成品和每项质量型中间产品归一化为 1 kg 成品织物。 |
| `moisture_basis` | 棉纱、中间织物和成品织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录各项测量质量是接收态还是干基；仅可使用同批次实测含水率换算，并保留原始记录。 |
| `area_to_mass_conversion` | 按面积计量的织物记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 面积数据仅可使用同一产品批次实测面密度和幅宽换算为质量。 |
| `utility_energy` | 电力、蒸汽和天然气 | energy | kWh 或 MJ | 保留计量表原始能源单位，并记录把能源量表示为每参考输出量所使用的全部换算因子。 |

## 5. 系统边界

前景边界必须：

1. 纳入生产者控制的纱线准备与上浆、毛圈织造、湿法前处理、所有适用路线的染色、烘干和后整理操作。
2. 把外购棉纱、电力、蒸汽、燃料、水和每种过程化学品保留为明确链接上游的产品投入，不得吸收到无记录的汇总项中。
3. 在每股废水、棉纺织边角料或不合格品以及任何实测直接基本流排放离开前景边界的过程处分别记录。
4. 排除种植、轧花、纺纱、制品加工、包装、配送、使用、洗涤和报废；研究另行加入时必须作为独立识别过程。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | cotton_yarn_received_at_plant |
| starting_condition_role | purchased_upstream_product |
| product_classification_scope | CPC 3.0 `26840` 棉毛巾毛圈织物及类似机织毛圈织物成品（狭幅织物除外） |
| recursive_input_rule | 已属于 CPC 26840 的外购织物仍作为单独量化的同类别投入，不得重标为内部生产织物 |
| upstream_dataset_requirement | 棉纱、公用工程、水服务、燃料和每种化学品必须链接地理与技术具有代表性的上游数据集 |
| disclosure | 声明棉纱成分与支数、纱线来源、上浆体系、织造技术、湿处理路线、颜色与整理配方、工厂位置、报告期和任何省略阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| yarn_preparation_and_sizing | 纱线准备与上浆 | required |  | 前景准备 | kg 上浆棉纱 |
| terry_weaving | 毛圈织造 | required |  | 前景织物生产 | kg 棉毛圈坯布 |
| wet_pretreatment | 湿法前处理 | required |  | 前景退浆、精练和依路线适用的漂白 | kg 前处理棉毛圈织物 |
| reactive_dyeing | 活性染色 | conditional | 仅当所声明产品采用活性染色时纳入 | 前景着色 | kg 染色棉毛圈织物 |
| finishing_and_drying | 后整理与烘干 | required |  | 前景最终调理及工厂大门生产 | 1 kg 棉毛圈织物成品 |

### 过程：纱线准备与上浆（`yarn_preparation_and_sizing`）

#### 输入

##### 产品流

###### 用于经纱、毛经和纬纱准备的外购棉纱（`cotton_yarn_input`）

外购棉纱作为形成毛圈结构的纤维材料跨越前景边界。

- 选定流：Cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：上浆批次实际消耗的实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 施用于棉纱的淀粉浆料（`sizing_starch_input`）

使用淀粉浆料在织造期间保护并润滑经纱或毛经时，作为一项化学产品投入记录。

- 选定流：Starch sizing agent
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的外供淀粉浆料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_chemical_records`
- 来源：`eu-bat-textiles-2022`

###### 上浆配制用水（`sizing_water_input`）

进入浆液配制的水与后续湿处理用水分开记录。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：浆液配制实际供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_utility_records`
- 来源：`eu-bat-textiles-2022`

###### 纱线准备与上浆用电（`sizing_electricity_input`）

络筒、整经、上浆及其直接驱动设备用电作为一项公用工程交换记录。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：上浆批次计量或分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 上浆棉纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_utility_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 纱线上浆用蒸汽（`sizing_steam_input`）

用于加热或烘干上浆纱线的外购或现场蒸汽与电力分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：上浆批次实际供给的计量蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 上浆棉纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_utility_records`
- 来源：`ec-jrc-textiles-bref-2023`

#### 输出

##### 产品流

###### 送往毛圈织造的上浆棉纱（`sized_cotton_yarn_output`）

上浆棉纱是离开纱线准备过程的实测中间产品。

- 选定流：Sized cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：发往织造的上浆纱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sized_yarn_output_records`
- 来源：`ec-jrc-textiles-bref-2023`

### 过程：毛圈织造（`terry_weaving`）

#### 输入

##### 产品流

###### 进入毛圈织机的上浆棉纱（`sized_yarn_for_weaving_input`）

发往毛圈织机的上浆经纱、毛经和纬纱质量作为成布投入记录。

- 选定流：Sized cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：毛圈织造批次实际投用的上浆纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_material_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 毛圈织造用电（`weaving_electricity_input`）

毛圈织机及直接相关物料搬运的用电来自织造电表或有记录的共用电表分配。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：织造批次计量或分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 棉毛圈坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_utility_records`
- 来源：`ec-jrc-textiles-bref-2023`

#### 输出

##### 产品流

###### 机织棉毛圈坯布（`greige_terry_fabric_output`）

机织棉毛圈坯布是湿法前处理前的实测中间输出。

- 选定流：Greige woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：转入湿法前处理的坯布实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_output_records`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

###### 毛圈织造棉纱和织物边角料（`cotton_weaving_scrap_output`）

仅当切边、断纱和不合格坯布具有相同棉纺织废物身份和去向时合并；否则前景数据包必须拆分为不同原子行。

- 选定流：Cotton textile scrap
- 流属性/单位：Mass / kg
- 数量规则：离开织造过程的棉纺织边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 棉毛圈坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_scrap_records`
- 来源：`ec-jrc-textiles-bref-2023`

### 过程：湿法前处理（`wet_pretreatment`）

#### 输入

##### 产品流

###### 进入前处理的机织棉毛圈坯布（`greige_terry_fabric_input`）

坯布投入把织造与退浆、精练及依路线适用的漂白连接起来。

- 选定流：Greige woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：投入前处理的坯布实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_material_records`
- 来源：`eu-bat-textiles-2022`

###### 湿法前处理用水（`pretreatment_water_input`）

用于退浆、精练、适用时漂白及漂洗的水在前处理过程边界记录。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：前处理批次实际供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_utility_records`
- 来源：`eu-bat-textiles-2022`

###### 棉织物精练或丝光用氢氧化钠（`sodium_hydroxide_input`）

所声明路线采用氢氧化钠精练或丝光时记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的氢氧化钠产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_chemical_records`
- 来源：`eu-bat-textiles-2022`

###### 淀粉退浆用 α-淀粉酶（`alpha_amylase_input`）

采用酶法去除淀粉浆料时记录 α-淀粉酶。

- 选定流：Alpha-amylase enzyme product
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的 α-淀粉酶产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_chemical_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 漂白用过氧化氢（`hydrogen_peroxide_input`）

仅当所声明产品路线包含过氧化物漂白时记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的过氧化氢产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_chemical_records`
- 来源：`eu-bat-textiles-2022`

###### 湿法前处理用蒸汽（`pretreatment_steam_input`）

用于加热前处理浴液和织物的蒸汽与电力分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：前处理批次实际供给的计量蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_utility_records`
- 来源：`ec-jrc-textiles-bref-2023`

#### 输出

##### 产品流

###### 前处理机织棉毛圈织物（`pretreated_terry_fabric_output`）

前处理棉毛圈织物是退浆、精练和依路线适用漂白后的实测输出。

- 选定流：Pretreated woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：离开前处理批次的织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_output_records`
- 来源：`eu-bat-textiles-2022`

##### 废物流

###### 湿法前处理排放废水（`pretreatment_wastewater_output`）

前处理废水在离开过程并进入现场或场外处理的位置记录。

- 选定流：Textile pretreatment wastewater
- 流属性/单位：Mass / kg
- 数量规则：废水实测质量，或用实测密度由体积换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 前处理棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_wastewater_records`
- 来源：`eu-bat-textiles-2022`

### 过程：活性染色（`reactive_dyeing`）

#### 输入

##### 产品流

###### 进入活性染色的前处理棉毛圈织物（`pretreated_fabric_for_dyeing_input`）

仅在声明为活性染色产品路线时存在本投入。

- 选定流：Pretreated woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：投入染色的前处理织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_material_records`
- 来源：`peer-reviewed-cotton-mercerisation-dyeing-2022`

###### 所声明染色配方中的 C.I. Reactive Red 195（`reactive_red_195_input`）

C.I. Reactive Red 195 是一项具体染料交换，仅在声明配方包含该物质时记录；其他染料必须在前景数据包中另建单独识别的原子行。

- 选定流：C.I. Reactive Red 195
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的 C.I. Reactive Red 195 产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_chemical_records`
- 来源：`peer-reviewed-cotton-mercerisation-dyeing-2022`

###### 活性染色用氯化钠（`sodium_chloride_input`）

使用氯化钠促进染料上染时，将其作为独立配方化学品记录。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的氯化钠实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_chemical_records`
- 来源：`peer-reviewed-cotton-mercerisation-dyeing-2022`

###### 活性染色用碳酸钠（`sodium_carbonate_input`）

使用碳酸钠建立染浴碱度时，将其作为独立配方化学品记录。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：实际消耗的碳酸钠实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_chemical_records`
- 来源：`peer-reviewed-cotton-mercerisation-dyeing-2022`

###### 活性染色和染后洗涤用水（`dyeing_water_input`）

染浴、漂洗、皂洗和染后洗涤用水在染色过程边界记录。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：染色批次实际供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_utility_records`
- 来源：`eu-bat-textiles-2022`

###### 活性染色用蒸汽（`dyeing_steam_input`）

用于加热染浴或染后洗涤的蒸汽与电力分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：染色批次实际供给的计量蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_utility_records`
- 来源：`eu-bat-textiles-2022`

#### 输出

##### 产品流

###### 活性染色机织棉毛圈织物（`dyed_terry_fabric_output`）

染色织物输出在完成所需染后洗涤、进入最终后整理前计量。

- 选定流：Reactive-dyed woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：离开染色批次的染色织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_output_records`
- 来源：`peer-reviewed-cotton-mercerisation-dyeing-2022`

##### 废物流

###### 活性染色排放废水（`dyeing_wastewater_output`）

染浴排放和染后洗涤废水在离开染色并进入处理的位置记录。

- 选定流：Reactive dyeing wastewater
- 流属性/单位：Mass / kg
- 数量规则：废水实测质量，或用实测密度由体积换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 染色棉毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_wastewater_records`
- 来源：`eu-bat-textiles-2022`

### 过程：后整理与烘干（`finishing_and_drying`）

#### 输入

##### 产品流

###### 进入后整理的染色棉毛圈织物（`dyed_terry_fabric_for_finishing_input`）

仅在路线包含 `reactive_dyeing` 过程时记录染色棉毛圈织物。

- 选定流：Reactive-dyed woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：投入后整理的染色织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_records`
- 来源：`eu-bat-textiles-2022`

###### 进入后整理的未染色前处理棉毛圈织物（`undyed_pretreated_terry_fabric_for_finishing_input`）

未染色路线记录前处理织物；同一生产批次中，本行与染色织物投入互斥。

- 选定流：Pretreated woven cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：投入后整理的前处理织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_records`
- 来源：`eu-bat-textiles-2022`

###### 后整理与烘干用电（`finishing_electricity_input`）

后整理设备、风机、泵和物料搬运用电来自专用电表或有记录的共用电表分配。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：后整理批次计量或分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utility_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 后整理与烘干用蒸汽（`finishing_steam_input`）

后整理和间接烘干使用的外购或现场蒸汽作为一项能源交换记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：后整理批次实际供给的计量蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utility_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 直接加热烘干用天然气（`natural_gas_input`）

仅当气态燃烧产物直接接触织物或在前景场址向烘干机供热时记录天然气。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：直接加热烘干实际供给的计量天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utility_records`
- 来源：`eu-bat-textiles-2022`

#### 输出

##### 产品流

###### 工厂大门棉毛巾毛圈织物成品（`finished_terry_fabric_output`）

这是经 Tiangong state-100 直接回读接受的精确 CPC 26840 参考产品输出。

- 选定流：Terry towelling and similar woven terry fabrics (other than narrow fabrics) of cotton `61be29ff-288e-4570-8335-4e03760c9255`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所声明含水基准计 1 kg 成品织物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 最终检验不合格棉毛圈织物（`finished_fabric_reject_output`）

不合格成品织物与合格参考产品输出分开记录，并链接实际处理去向。

- 选定流：Rejected cotton terry fabric
- 流属性/单位：Mass / kg
- 数量规则：不合格成品织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格棉毛圈织物成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_output_records`
- 来源：`jrc-ilcd-process-format-1-1`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | 生产批次和单独计量操作 | 在应用任何分配前，先细分过程并把纱线、化学品、公用工程、废水、边角料和不合格品直接归入生产批次。 | `iso-14044-2006`; `jrc-ilcd-lca-detailed-2010` |
| `classify_cotton_scrap_before_allocation` | 棉纱、切边和织物边角料 | 在建模任何负担或收益前，记录实际去向并把输出识别为废物或共产品。 | `jrc-ilcd-lca-detailed-2010` |
| `physical_allocation_if_unavoidable` | 具有共同物理功能且无法分离的织物共产品 | 若无法细分而必须分配，使用实测干质量，并披露分配比例与敏感性；不得把废水或排放从其产生过程分配出去。 | `iso-14044-2006`; `jrc-ilcd-lca-detailed-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_records` | yarn_preparation_and_sizing | 棉纱投入 | 收货与领料记录 | 批次 id；纱支；棉成分；毛重与皮重；含水基准；领用质量 | 校准秤及库存领料记录 | kg | 每批次 | 报告期 | 上浆线 | 汇总验收领用质量并归一化至上浆纱或成品织物输出 | 校准记录；供应商批次记录；库存核对 |
| `cp_sizing_chemical_records` | yarn_preparation_and_sizing | 淀粉浆料 | 配方与批次记录 | 化学品身份；供应商产品；批次 id；浓度；领用质量；退回质量 | 校准批次秤及配方日志 | kg | 每批次 | 报告期 | 上浆线 | 按化学品身份计算净消耗质量 | 秤校准；采购记录；配方签核 |
| `cp_sizing_utility_records` | yarn_preparation_and_sizing | 上浆用水、电力和蒸汽 | 计量表记录 | 表 id；期初与期末读数；单位；时间戳；生产批次 | 专用表或有记录的共用表分配 | kg；kWh；MJ | 每批次或班次 | 报告期 | 上浆线 | 读数相减；非专用表仅按有记录的运行时间或分表依据分配 | 表计校准；分配工作表 |
| `cp_sized_yarn_output_records` | yarn_preparation_and_sizing | 上浆棉纱输出 | 生产记录 | 批次 id；毛重与皮重；含水基准；去向 | 校准秤及转移记录 | kg | 每批次 | 报告期 | 上浆线 | 汇总转移上浆纱质量 | 校准记录；转移核对 |
| `cp_weaving_material_records` | terry_weaving | 上浆纱投入 | 织机领料记录 | 批次 id；纱线领用质量；退料；产品代码；织机 id | 校准秤及物料领用日志 | kg | 每批次 | 报告期 | 毛圈织造区 | 按织物批次计算净领用质量 | 库存核对；织机票 |
| `cp_weaving_utility_records` | terry_weaving | 织造用电 | 电表记录 | 表 id；读数；运行时间；批次 id | 分表或有记录的共用表分配 | kWh | 每班次 | 报告期 | 毛圈织造区 | 读数相减；非分表按经核实的织机运行时间分配 | 表计校准；生产日志 |
| `cp_weaving_output_records` | terry_weaving | 棉毛圈坯布输出 | 织机与检验记录 | 卷 id；毛重与皮重；幅宽；面密度；含水基准 | 校准卷秤及检验系统 | kg | 每卷 | 报告期 | 毛圈织造区 | 汇总合格坯布卷质量 | 校准记录；卷检记录 |
| `cp_weaving_scrap_records` | terry_weaving | 棉纺织边角料 | 废物转移记录 | 废物身份；容器皮重；毛重；去向；日期 | 校准废物秤及转移单 | kg | 每容器 | 报告期 | 毛圈织造区 | 按身份和去向计算净边角料质量 | 校准记录；废物转移单 |
| `cp_pretreatment_material_records` | wet_pretreatment | 坯布投入 | 批次记录 | 卷 id；投入质量；含水基准；配方 id | 校准秤及批次单 | kg | 每批次 | 报告期 | 前处理线 | 汇总投布质量 | 校准记录；批次单 |
| `cp_pretreatment_chemical_records` | wet_pretreatment | 氢氧化钠、α-淀粉酶和过氧化氢 | 配方与加料记录 | 化学品身份；浓度；批次 id；领用质量；剩余退回 | 校准加料系统及配方日志 | kg | 每批次 | 报告期 | 前处理线 | 各化学品分别计算净消耗质量 | 加料校准；供应商记录；配方审批 |
| `cp_pretreatment_utility_records` | wet_pretreatment | 前处理水和蒸汽 | 计量表记录 | 表 id；读数；单位；批次 id；时间戳 | 分表或有记录的共用表分配 | kg；MJ | 每批次 | 报告期 | 前处理线 | 读数相减并归一化至前处理输出 | 表计校准；批次日志 |
| `cp_pretreatment_output_records` | wet_pretreatment | 前处理织物输出 | 批次与检验记录 | 卷或批次 id；毛重与皮重；含水基准；处理路线 | 校准秤及转移记录 | kg | 每批次 | 报告期 | 前处理线 | 汇总合格输出质量 | 校准记录；处理记录 |
| `cp_pretreatment_wastewater_records` | wet_pretreatment | 前处理废水 | 排放记录 | 流量计读数；排放时间；用于质量换算时的密度；处理去向 | 校准流量计及排放日志 | kg 或 m3 | 每批次或连续 | 报告期 | 前处理线排放点 | 汇总实测排放并保留密度换算追溯 | 流量计校准；取样和转移记录 |
| `cp_dyeing_material_records` | reactive_dyeing | 前处理织物投入 | 染色批次记录 | 批次 id；进布质量；颜色代码；配方 id | 校准秤及批次单 | kg | 每批次 | 报告期 | 染色线 | 汇总投布质量 | 校准记录；批次单 |
| `cp_dyeing_chemical_records` | reactive_dyeing | C.I. Reactive Red 195、氯化钠和碳酸钠 | 配方与加料记录 | 化学品身份；供应商产品；浓度；领用质量；退回质量；批次 id | 校准加料设备及配方日志 | kg | 每批次 | 报告期 | 染色线 | 各化学品身份分别计算净消耗质量 | 加料校准；供应商记录；签字配方 |
| `cp_dyeing_utility_records` | reactive_dyeing | 染色水和蒸汽 | 计量表记录 | 表 id；读数；单位；批次 id；时间戳 | 分表或有记录的共用表分配 | kg；MJ | 每批次 | 报告期 | 染色线 | 读数相减并归一化至染色输出 | 表计校准；批次日志 |
| `cp_dyeing_output_records` | reactive_dyeing | 染色织物输出 | 批次与检验记录 | 批次 id；输出质量；含水基准；色光；洗涤状态 | 校准秤及检验记录 | kg | 每批次 | 报告期 | 染色线 | 汇总合格染色输出质量 | 校准记录；色光与洗涤检验 |
| `cp_dyeing_wastewater_records` | reactive_dyeing | 活性染色废水 | 排放记录 | 流量计读数；排放时间；使用时的密度；处理去向 | 校准流量计及排放日志 | kg 或 m3 | 每批次或连续 | 报告期 | 染色线排放点 | 汇总实测排放；染浴和染后洗水去向不同时分开记录 | 流量计校准；取样和转移记录 |
| `cp_finishing_material_records` | finishing_and_drying | 染色或未染色织物投入 | 后整理批次记录 | 路线 id；投入卷 id；投入质量；含水基准；整理配方 | 校准秤及批次单 | kg | 每批次 | 报告期 | 后整理线 | 每批次仅汇总一个适用投入路线 | 校准记录；路线核对 |
| `cp_finishing_utility_records` | finishing_and_drying | 后整理电力、蒸汽和天然气 | 计量表与燃料记录 | 表 id；读数；燃料量；热值来源；批次 id；运行时间 | 分表、校准燃气表或有记录的共用表分配 | kWh；MJ | 每班次或批次 | 报告期 | 后整理与烘干线 | 读数相减；使用有记录的批次或供应商热值把燃料换算为能量 | 表计校准；发票；换算工作表 |
| `cp_finishing_output_records` | finishing_and_drying | 合格成品织物与不合格织物 | 最终检验记录 | 卷 id；合格质量；不合格质量；含水基准；幅宽；面密度；颜色；整理；去向 | 校准卷秤及最终检验系统 | kg | 每卷 | 报告期 | 后整理线 | 分别汇总合格参考输出和不合格输出 | 校准记录；检验记录；质量核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange_to_reference_mass` | 每项前景交换 | 同一核对生产批次的实测交换量除以合格成品织物质量 | 各协议交换记录；`cp_finishing_output_records` | 每 1 kg 成品织物的交换量 | `iso-14044-2006`; `jrc-ilcd-lca-detailed-2010` |
| `convert_area_record_to_mass` | 按面积计量的织物 | 实测面积乘以同批次实测面密度；保留两项测量及含水基准 | 面积记录；面密度试验；幅宽记录 | kg 织物 | `jrc-ilcd-flow-format-1-1` |
| `reconcile_fabric_mass` | 每个生产阶段 | 期初在制品加实测投入减期末在制品，等于合格输出加不合格输出加实测损失；披露任何残差 | 领料、转移、输出、边角料及库存记录 | 阶段质量平衡核对 | `jrc-ilcd-lca-detailed-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及中间产品 | 在过程转移中保留产品代码、棉成分、毛圈结构、幅宽类别、颜色状态、整理、批次 id 和含水基准。 | 相互链接的批次、布卷、配方和检验记录 |
| `dq_temporal` | 前景记录 | 使用一个声明报告期，并记录停机、试验批次、返工以及配方或技术变化。 | 生产日历和批次日志 |
| `dq_measurement` | 计量表和秤 | 记录仪表 id、单位、校准状态、读数区间及任何共用表分配依据。 | 校准证书和计量日志 |
| `dq_completeness` | 材料、公用工程、废水、边角料和不合格品 | 核对每个所列过程并披露缺失或未测交换；UUID 缺失不得成为省略实测交换的理由。 | 阶段质量平衡、采购核对、废物与排放记录 |
| `dq_representativeness` | 上游链接 | 匹配前景路线的地理、技术、能源载体、水服务、化学品配方和参考年，或披露不匹配。 | 上游数据集元数据和差距评估 |

## 9. 校验规则

前景数据包仅在下列条件全部满足时合规：

- 参考输出使用 UUID `61be29ff-288e-4570-8335-4e03760c9255`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并精确分类为 CPC 3.0 `26840`；
- 声明全部必需限定信息和工厂大门边界，包括棉成分、毛圈结构、幅宽类别、颜色状态、整理、含水基准、地理位置和技术；
- 所有 required 过程均存在，且 `reactive_dyeing` 仅在所声明路线采用活性染色时存在；
- 每张清单卡表示一个具体交换，每种替代染料或化学品另设一行，不得用集合标签替代流身份；
- 所有经验数量均来自关联前景记录，不使用 AI 编写或无支持的数值范围；
- 每个未解决的 Tiangong UUID 保持缺省并按 `row_id` 报告；仅在混合检索和 state-100 直接回读流类型、语义身份、属性与单位通过后才可添加 UUID；
- 每个生产阶段的质量转移、合格输出、边角料、不合格品和在制品完成核对，或量化并解释残差；
- 披露废水去向、现场处理、直接加热燃料使用、实测直接排放、返工和排除阶段；
- 尽可能通过细分避免分配，任何剩余分配均遵循声明规则并包含分配比例与敏感性；
- 来源 id、采集协议、计算规则和质量证据均能解析到本 PCR 声明的记录。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与 CPC 26840、所声明工厂大门及全部必需限定信息一致的棉毛巾毛圈织物成品数据集 |
| excluded_use | 狭幅织物；非棉毛圈织物；毛巾制品；省略适用湿处理的路线；未增加相应过程的使用阶段洗涤或从摇篮到坟墓声明 |
| required_metadata | 参考 UUID 与 Mass UUID；CPC 代码；棉成分；纱支；毛圈结构；幅宽；面密度；颜色状态；整理；含水基准；地理；技术；报告期；路线；分配；上游链接 |
| required_quality_disclosure | 前景覆盖；仪表校准；共用表分配；质量平衡残差；未解决 UUID 和范围；上游代表性；废水与废物去向 |
| update_trigger | 参考身份、CPC 范围、纱线来源、上浆体系、织造技术、湿处理配方、颜色或整理路线、能源系统、废水处理、地理、报告期或数据质量发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-26840` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/26840 | 精确产品类别范围与排除项 |
| `jrc-ilcd-flow-format-1-1` | official_guidance | https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_FlowDataSet.html | 流名称、路线限定信息、参考属性和单位记录 |
| `jrc-ilcd-process-format-1-1` | official_guidance | https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_ProcessDataSet.html | 交换方向、过程记录、审查和废物输出要求 |
| `jrc-ilcd-lca-detailed-2010` | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 目标与范围、参考流、系统边界、分配、数据质量和解释 |
| `ec-jrc-textiles-bref-2023` | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 纺织过程拆分、上浆、织物生产、前处理、染色、后整理、公用工程、排放和废物流 |
| `eu-bat-textiles-2022` | official_guidance | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | 上浆、织造、退浆、精练、漂白、染色、后整理、水、能源、化学品、排放和废水的官方 BAT 范围与定义 |
| `iso-14040-2006` | standard | ISO 14040:2006; https://www.iso.org/standard/37456.html | LCA 原则、目标与范围、清单、解释、报告和关键性评审 |
| `iso-14044-2006` | standard | ISO 14044:2006; https://www.iso.org/standard/38498.html | LCI 要求、分配层级、数据质量、报告和评审 |
| `blackburn-payne-cotton-towels-2004` | literature | https://doi.org/10.1039/B407628A | 支持明确排除或独立建模洗涤与使用阶段的棉毛巾同行评审生命周期证据 |
| `peer-reviewed-cotton-mercerisation-dyeing-2022` | literature | https://doi.org/10.3390/ma15062092 | 棉织物丝光、活性染色、配方特定化学品、洗涤和实测批次记录的同行评审全文证据 |
