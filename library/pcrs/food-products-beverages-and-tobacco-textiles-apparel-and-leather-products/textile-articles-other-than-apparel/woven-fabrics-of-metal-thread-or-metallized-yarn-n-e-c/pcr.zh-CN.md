---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.woven-fabrics-of-metal-thread-or-metallized-yarn-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他未列明金属线或金属化纱线机织物

## 1. 范围与适用性

本 PCR 适用于以金属线、金属化纱线或二者作为定义性结构，并归入 CPC 3.0 子类 27994 的成品机织物。其支持从织造场址接收合格纱线起，经检验和可销售卷装包装止的门到门前景数据生产。仅当准备和湿整理作业由报告组织实施时，才纳入这些可选作业。

本 PCR 不包括作为纱线销售的金属化纱线（CPC 27993）、按非金属纤维归类的普通机织物、非织造布、针织物、另行归类的涂层或浸渍织物、制成品和服装。金属线、金属化纱线、化学品、能源和包装的上游生产应链接供应商或背景数据集，不在前景边界内重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.woven-fabrics-of-metal-thread-or-metallized-yarn-n-e-c |
| classification_refs | CPC 3.0:27994（exact） |
| covered_products | 以金属线或金属化纱线构成的机织物，包括该类纱线赋予织物定义性金属特征的混合结构，未另列 |
| excluded_products | 未经织造而销售的金属化纱线；普通非金属机织物；针织物或非织造布；另行归类的涂层或浸渍织物；制成品和服装 |
| representative_product | 在工厂大门处以卷装供应、经检验的含金属线或金属化纱线成品机织物 |
| production_route | 纱线接收与准备；可选上浆；织造；可选预处理或整理；检验；卷装与包装 |
| market_state | 工厂大门处的制造完成织物卷，声明组成和整理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以金属线或金属化纱线作为定义性结构的机织物 |
| How much | 1 kg 可销售成品织物净质量 |
| How well | 符合所声明的织法、纤维与金属组成、单位面积质量、幅宽、整理状态和质量等级 |
| How long or cycle | 一个生产批次直至工厂大门放行；不主张使用阶段服务寿命 |
| reference_flow_link | 最终检验后、运出工厂前的可销售净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Woven fabrics of metal thread or metallized yarn n.e.c. `fc1c034a-6087-48d4-93ec-a57b94919068` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 金属线或金属化纱线类型及质量分数；其他纤维组成；织物组织；成品幅宽；单位面积质量；整理或处理；颜色；质量等级；生产地域；报告期；包装状态 |

构建前景数据包时，所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终检验后计量可销售织物净质量；不含纸芯、包膜、托盘及其他包装。 |
| `composition_mass_balance` | 批次组成 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用同一干质量口径核对金属线、金属化纱线、其他纱线、留在产品中的整理剂、产品、次品和废物；披露所有水分修正。 |
| `area_conversion` | 织物面积 | Mass and area | kg and m2 | 记录以面积计量时，保留实测长度、成品幅宽和单位面积质量，并记录换算为 kg 参考产品的方法。 |
| `energy_conversion` | 外购能源 | Energy | kWh or MJ | 保留计量单位和换算因子；不得把电力、压缩空气、热和燃料合并成一个交换。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground_system_boundary | 纳入纱线接收与准备、可选上浆、织造、场内可选预处理或整理、检验、卷装、包装、场内废物处理以及直至移交点的场内废水处理。 | `jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_purchased_inputs` | purchased_product_inputs | 金属线、金属化纱线、其他纱线、化学品、能源、水和包装分别采用与所声明供应和地域匹配的上游数据集。 | `ec-pef-method-2021` |
| `boundary_direct_releases` | elementary_exchanges | 仅在按场址记录实测或通过有据可查方法计算时记录空气和水体直接排放；不得从外购投入量推断排放。 | `jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_optional_operations` | route_specific_operations | 不存在时，将上浆、湿法预处理、染色、印花、涂层和整理标记为不适用；存在时，披露具体作业，并分别记录每种化学品、公用工程、废物、废水和实测直接排放。 | `jrc-textiles-bref-2023` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 金属线、金属化纱线及任何其他纱线在报告场址验收，并记录供应商身份、组成、水分口径和质量 |
| starting_condition_role | 链接上游数据集的外购产品投入；其生产不在前景边界内 |
| product_classification_scope | 仅限 CPC 3.0 子类 27994 |
| recursive_input_rule | 已符合相同 CPC 27994 产品边界的外购织物仍作为单独定量的产品投入并链接上游数据集；不在接收过程中重新展开其制造过程 |
| upstream_dataset_requirement | 优先采用供应商特定数据集；否则选择与材料结构、金属或金属化层、地域、技术和参考质量匹配且有记录的背景数据集 |
| disclosure | 声明金属是以金属线、金属涂层基材、金属化薄膜纱还是其他结构进入；披露其他纤维、准备、湿法加工、整理、次品和包装 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_weaving` | 纱线准备与织造 | required | 报告场址制造织物时始终纳入 | 将声明的纱线投入转换为未整理机织物 | 按实测未整理织物输出，并归一化至 1 kg 可销售最终织物 |
| `wet_finishing` | 湿法预处理与整理 | conditional | 仅在场内实施洗涤、退浆、精练、漂白、染色、印花、涂层或其他湿整理时纳入 | 形成所声明的成品织物状态 | 按实测成品织物输出，并归一化至 1 kg 可销售最终织物 |
| `inspection_packaging` | 检验、卷装与包装 | required | 始终纳入至工厂大门放行 | 确定可销售输出及包装状态 | 每 1 kg 可销售成品织物净质量 |

### 过程：纱线准备与织造（`yarn_preparation_weaving`）

#### 输入

##### 产品流

###### 金属线投入（`metal_thread_input`）

当金属线实际进入准备或织造路线时记录。

- 选定流：Metal thread
- 流属性/单位：Mass / kg
- 数量规则：按批次实测验收干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按实测未整理织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`un-cpc-3-0-27994-2025`

###### 金属化纱线投入（`metallized_yarn_input`）

金属化纱线应与实心金属线及其他纱线分别记录。

- 选定流：Metallized yarn
- 流属性/单位：Mass / kg
- 数量规则：按批次实测验收干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按实测未整理织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`un-cpc-3-0-27994-2025`

###### 改性淀粉浆料（`modified_starch_size_input`）

仅当场内使用改性淀粉浆料时记录；其他浆料物质须使用各自的原子流卡片。

- 选定流：Modified starch sizing agent
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减有记录的退回质量（如适用）
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按实测上浆经纱输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 织造电力（`weaving_electricity_input`）

记录分配给批次的准备、上浆、织造及局部抽风实测用电。

- 选定流：Electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：计量或分表用量；否则依据场址总表采用有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测未整理织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`ec-pef-method-2021`

###### 织造压缩空气（`weaving_compressed_air_input`）

所选织机或准备设备使用压缩空气时记录；不得与电力合并。

- 选定流：Compressed air
- 流属性/单位：Volume / m3
- 数量规则：按声明压力实测输送体积，或依据压缩机记录作有据可查的工程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按实测未整理织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`ec-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未整理机织物（`woven_grey_fabric_output`）

记录从织造转入整理或最终检验的织物实测质量。

- 选定流：Woven fabric of metal thread or metallized yarn, unfinished
- 流属性/单位：Mass / kg
- 数量规则：织造转出时实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按织造批次，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 织机废料（`loom_waste_output`）

记录与声明织物组成相同的纱头、织机废料和织造次品；成分实质不同的废物须另设卡片。

- 选定流：Loom waste containing metal thread or metallized yarn
- 流属性/单位：Mass / kg
- 数量规则：按废物去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按织造批次，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`ec-pef-method-2021`

##### 基本流

###### 织造颗粒物排放（`weaving_particulate_output`）

仅在通过实测或有据可查计算识别粒径和受纳空气环境舱时记录颗粒物排放。

- 选定流：Particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：分配给批次的场址实测或计算排放；不存在已识别基本流时省略
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按织造批次，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

### 过程：湿法预处理与整理（`wet_finishing`）

#### 输入

##### 产品流

###### 未整理织物投入（`unfinished_fabric_input`）

记录进入场内湿法路线的未整理织物。

- 选定流：Woven fabric of metal thread or metallized yarn, unfinished
- 流属性/单位：Mass / kg
- 数量规则：整理批次验收的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按实测成品织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 整理用水（`finishing_water_input`）

记录进入洗涤、退浆、精练、漂白、染色、印花或整理的工艺水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：计量或批次记录的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测成品织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 氢氧化钠投入（`sodium_hydroxide_input`）

仅在声明的整理配方使用氢氧化钠时记录；其他化学品须采用独立原子流卡片。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：投加至批次的实测活性物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按实测成品织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 过氧化氢投入（`hydrogen_peroxide_input`）

仅在声明的整理配方使用过氧化氢时记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：投加至批次的实测活性物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按实测成品织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 整理电力（`finishing_electricity_input`）

记录分配给湿整理批次的实测电力。

- 选定流：Electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：计量或分表用量；否则依据场址总表采用有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测成品织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`ec-pef-method-2021`

###### 整理天然气（`finishing_natural_gas_input`）

仅在声明整理路线直接消耗天然气时记录；外购蒸汽或其他燃料须采用独立卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：按声明热值基准计量燃料能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测成品织物输出，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品织物（`finished_fabric_output`）

记录转入最终检验的成品织物。

- 选定流：Woven fabric of metal thread or metallized yarn, finished
- 流属性/单位：Mass / kg
- 数量规则：整理放行的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理批次，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 整理废水（`finishing_wastewater_output`）

按适用的废物流记录转入场内处理、外部处理或直接排放的废水；已识别的水体基本流应另行记录。

- 选定流：Textile finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：按去向计量或批次平衡的废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按整理批次，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

### 过程：检验、卷装与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 待检验成品织物（`finished_fabric_pack_input`）

记录进入最终检验的成品织物或以未整理状态销售的织物。

- 选定流：Woven fabric of metal thread or metallized yarn, finished
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按最终检验批次，并归一化至 1 kg 可销售最终织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_records`
- 来源：`ec-pef-method-2021`

###### 检验电力（`inspection_electricity_input`）

记录分配给放行产品的检验、卷装和包装电力。

- 选定流：Electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：实测用量或依据场址总表采用有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_records`
- 来源：`ec-pef-method-2021`

###### 纸板芯（`paperboard_core_input`）

纸板芯应与包膜、托盘及其他包装组件分别记录。

- 选定流：Paperboard core
- 流属性/单位：Mass / kg
- 数量规则：分配给放行织物卷的实测或采购记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_records`
- 来源：`ec-pef-method-2021`

###### 聚乙烯包装膜（`polyethylene_film_input`）

聚乙烯保护膜应与其他每个包装组件分别记录。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：分配给放行织物卷的实测或采购记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_records`
- 来源：`ec-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售机织物（`reference_product_output`）

记录不含包装的可销售净产品；这是参考交换。

- 选定流：Woven fabrics of metal thread or metallized yarn n.e.c. `fc1c034a-6087-48d4-93ec-a57b94919068`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可销售净质量，归一化至 1 kg 参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_records`
- 来源：`un-cpc-3-0-27994-2025`

##### 废物流

###### 织物边角料和最终次品（`fabric_offcuts_output`）

记录与声明织物组成相同的边角料和最终次品；其他组成须另设卡片。

- 选定流：Offcuts of metal-thread or metallized-yarn woven fabric
- 流属性/单位：Mass / kg
- 数量规则：按废物去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按最终检验批次，并归一化至 1 kg 可销售最终织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_records`
- 来源：`ec-pef-method-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared foreground operations | 首先细分仪表、批次、生产线和废物记录，使织物特定投入和输出可以直接归属。 | `ec-pef-method-2021` |
| `allocation_physical_when_unavoidable` | inseparable multi-product operations | 无法实际细分时，采用反映共享作业因果使用的有记录物理关系，如机器时间结合实测功率、处理质量或废水体积。 | `ec-pef-method-2021` |
| `allocation_no_unjustified_credit` | wastes and recoverable material | 记录每个废物去向及任何收入或回收产品状态；未声明下游方法并保持系统模型一致时，不得在前景清单内采用避免负担抵扣。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_batch_records` | `yarn_preparation_weaving` | 所有纱线、浆料、电力、压缩空气、产品、废物和实测排放行 | 批次记录；仪表；领退料记录；过磅单；废物单；测试报告 | batch_id；product_code；纱线身份；组成；仪表起止读数；领用与退回物料；输出质量；废物质量与去向；排放方法 | 将带时间戳的生产、仪表、库存、称量和废物记录核对至批次 | 原始记录单位和 kg 归一化结果 | 每批；仪表至少每月 | 具有代表性的连续 12 个月，或声明的更短期间内全部批次 | 服务于声明前景路线的全部设备和公用工程 | 扣除有记录的退回；共享仪表仅按披露的因果驱动因素分配；按可销售净质量归一化 | 仪表校准；秤校准；采购和库存核对；签署的批次放行；废物转移记录 |
| `cp_finishing_batch_records` | `wet_finishing` | 未整理织物、水、每种化学品、电力、燃料、成品织物、废水和实测排放行 | 配方；批次记录；仪表；实验室报告；废水记录 | batch_id；织物质量；化学品身份与浓度；投加质量；水；能源；燃料；输出质量；废水体积；去向；实测污染物结果 | 将配方、仪表、实验室和转移记录核对至各路线与批次 | 原始记录单位和 kg 归一化结果 | 每批；公用工程连续或每日 | 具有代表性的连续 12 个月，或声明的更短期间内全部批次 | 服务于声明产品的全部场内湿法作业和处理设施 | 溶液投加量折算为活性物质；分别保留水和废水；按放行产品质量归一化 | 经校准仪表；配方授权；实验室方法；处理与排放记录 |
| `cp_release_packaging_records` | `inspection_packaging` | 受检织物、电力、每个包装组件、参考产品和次品行 | 检验记录；卷装单；称量记录；包装领用记录；仪表 | roll_id；batch_id；织物净质量；幅宽；长度；单位面积质量；质量等级；包装组件及质量；次品质量与去向 | 核对织物卷放行、经校准称量、包装领用和次品记录 | kg；m；m2；g/m2；kWh | 每个放行卷和批次 | 报告期内全部放行 | 报告场址的最终检验、卷装和包装 | 可销售净质量与包装分别求和；所有分配交换归一化至 1 kg 净放行织物 | 校准记录；签署的质量放行；包装库存核对；次品处置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | reference product | 实测放行织物卷总质量之和减去分别实测的纸芯和包装质量；可行时优先直接称量织物净质量。 | 卷质量；纸芯质量；包装质量 | kg 可销售织物净质量 | `ec-pef-method-2021` |
| `calc_area_to_mass` | area-based fabric records | 织物质量等于实测长度乘以成品幅宽和实测单位面积质量；与称量质量核对并保留差异。 | 长度；幅宽；单位面积质量；称量质量 | kg 织物及核对差异 | `ec-pef-method-2021` |
| `calc_active_chemical` | chemical solution inputs | 活性物质量等于投加溶液质量乘以有记录的活性浓度。 | 溶液质量；活性浓度 | kg 活性物质 | `jrc-textiles-bref-2023` |
| `calc_batch_normalization` | all foreground exchanges | 各批次归属交换除以该批次可销售织物净质量；不合格输出不计入分母，并记录为废物。 | 归属交换；可销售净质量 | 每 1 kg 参考产品的交换 | `ec-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material identity | 保留供应商与批次身份、金属或涂层身份、纱线结构、其他纤维组成、织法、幅宽、单位面积质量和整理状态。 | 供应商规格；来料检验；物料清单；实验室或质量报告 |
| `dq_temporal` | foreground activity data | 优先采用覆盖正常变动的连续 12 个月；披露较短期间、停机、试验、异常批次和季节性。 | 带日期的仪表导出；生产日历；批次登记 |
| `dq_completeness` | mass, energy, water, chemicals, wastes, and releases | 核对全部声明过程，并明确将每个条件过程或原子交换标为存在、不存在或超出场址边界。 | 质量平衡；公用工程核对；化学品库存；废物与废水登记 |
| `dq_technology_geography` | linked upstream datasets | 匹配纱线结构、金属或金属化路线、电力地域、水供应、燃料、化学品及包装技术；记录每个代理。 | 供应商数据集；数据集元数据；代理理由 |
| `dq_measurement` | meters and calculations | 保留原始读数、单位、校准状态、分配驱动因素、换算因子和计算版本。 | 校准证书；仪表记录；计算工作簿或机器可读记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | 确认所选参考流 UUID、Product flow 类型、精确 CPC 27994 分类、Mass 属性 UUID、kg 单位以及全部必需产品限定信息。 | `un-cpc-3-0-27994-2025` |
| `validate_atomic_inventory` | process inventory | 拒绝组合流或选择器流；每种电力供应、压缩空气供应、燃料、化学品、包装组件、废物、废水及基本流排放均须为独立交换，并声明路线适用性。 | `ec-pef-method-2021`; `jrc-textiles-bref-2023` |
| `validate_mass_balance` | foreground batches | 按声明水分口径核对投入材料、可销售产品、中间转移、留存材料、废物和实测排放；调查并披露无法解释的差异。 | `ec-pef-method-2021` |
| `validate_route_completeness` | optional operations | 确认上浆和每个湿整理作业均已用原子投入与输出表示，或明确标为不适用。 | `jrc-textiles-bref-2023` |
| `validate_evidence` | all reported values | 拒绝 AI 生成数量和无依据默认范围；数值须来自前景记录或有记录计算，且披露每个代理和分配。 | `ec-pef-method-2021` |
| `validate_bilingual_alignment` | PCR application | 确认中英文机器标识符、行顺序、UUID、受控词元及规范性规则编号完全一致。 | `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂大门处其他未列明金属线或金属化纱线机织物的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 用于 `process` 和 `lifecyclemodel` 投影 |
| allowed_use | 产品范围、组成、技术、地域、期间、整理、分配和包装状态与数据集匹配，或透明调整的研究 |
| excluded_use | 单独的金属化纱线生产；普通非金属织物；针织物或非织造布；服装；未披露代理；未经方法一致审查的比较声明 |
| required_metadata | PCR id 和版本；CPC 27994；参考流 UUID；地域；期间；金属线或金属化纱线结构及分数；其他纤维；织法；幅宽；单位面积质量；整理；路线；分配；废物和废水去向；包装状态；来源和数据集版本 |
| required_quality_disclosure | 一手数据覆盖；仪表和秤状态；质量平衡结果；缺失流；UUID 缺口；代理数据集；分配份额；排除项；不确定性和局限 |
| update_trigger | 产品结构、织机或整理技术、能源或水供应、化学品配方、废物处理、分配、场址地域、数据期间、来源方法或 Tiangong 身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-27994-2025` | Official guidance (`official_guidance`) | 联合国统计司，《CPC Version 3.0 Explanatory Notes》，子类 27994，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确产品类别范围及与相邻 CPC 子类的区分 |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Textiles Industry》，EUR 31316 EN，2023。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 纺织纤维和纱线准备、上浆、预处理、染色、印花、整理、水和能源使用、化学品、废水及直接排放数据需求 |
| `ec-pef-method-2021` | Standard (`standard`) | 欧盟委员会 2021 年 12 月 15 日关于环境足迹方法的 Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint method。ELI：http://data.europa.eu/eli/reco/2021/2279/oj | 生命周期清单完整性、企业特定数据、分配层级、数据质量、记录与核查 |
