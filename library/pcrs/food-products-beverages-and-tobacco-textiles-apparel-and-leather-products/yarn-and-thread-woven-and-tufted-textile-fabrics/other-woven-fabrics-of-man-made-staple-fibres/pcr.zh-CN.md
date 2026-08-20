---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-staple-fibres
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他人造短纤维机织织物

## 1. 范围与适用性

本 PCR 指导为归入 CPC 3.0 代码 26790“其他人造短纤维机织织物”的可销售机织织物生产前景制造数据包。产品为已声明组成在人造短纤维类别中、且排除更具体的合成短纤维、人工短纤维、棉混纺及羊毛或动物细毛混纺子类后归入该剩余子类的机织织物。数据包覆盖纱线接收、络筒和整经、实际实施的上浆、织造、达到已声明可销售状态所需的全部湿法或干法处理、检验、交付形态加工以及包装，直至工厂大门。

纤维制造、短纤维纺纱、外购纱线和化学品制造、场外电力和燃料生产、研究未纳入的进厂运输、服装或制成品制造、分销、使用和寿命终止不在前景边界内。针织物或钩编织物、非织造布、地毯、窄幅织物、绒头或雪尼尔织物、毛巾织物、轮胎帘子布、玻璃纤维织物以及归入更具体 CPC 子类的产品均不适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-staple-fibres |
| classification_refs | CPC 3.0：26790，其他人造短纤维机织织物，精确范围 |
| covered_products | 在应用已声明纤维组成以及对更具体 CPC 2674、2675、2676 和 2677 子类的排除后，归入 CPC 26790 的坯布或整理机织织物 |
| excluded_products | 人造长丝织物；达到 CPC 2674 门槛的合成短纤维织物；达到 CPC 2675 门槛的人工短纤维织物；CPC 2676 和 2677 覆盖的棉以及羊毛或动物细毛混纺织物；特种、针织、非织造、窄幅、绒头、雪尼尔、毛巾、轮胎帘子、玻璃纤维、地毯、服装和制成品 |
| representative_product | 以卷装或其他已声明商业形态供应、处于已声明坯布或整理状态的可销售人造短纤维机织织物 |
| production_route | 外购短纤维纱线接收、络筒、整经、条件性上浆、织机织造、条件性预处理和整理、检验及包装 |
| market_state | 工厂门口织物，声明纤维类型及质量比例、经纬纱支数、组织、可用幅宽、单位面积质量、颜色和整理、水分基准、疵点等级及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 处于已声明可销售状态的人造短纤维机织织物 |
| How much | 工厂门口按已声明水分基准计 1,000 kg 净可销售织物 |
| How well | 符合已声明的组成、纱线支数、组织、可用幅宽、单位面积质量、颜色或整理规范、疵点等级及水分基准 |
| How long or cycle | 一个已声明生产报告期及其所含批次；不表示使用阶段持续时间 |
| reference_flow_link | reference_product_mass |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 其他人造短纤维机织织物 `aa850d80-fcb5-40ab-8539-61771bb51c0f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维类型和干基质量比例；再生含量比例和核算方法；经纱和纬纱支数；组织；可用幅宽；单位面积质量；坯布或整理状态；每项实际实施的预处理、染色、印花、涂层、干燥、焙烘或功能整理工序；颜色规范；水分基准；疵点等级；地域；报告期；包装状态 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按参考流归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单结果归一化到同一已声明水分基准下 1,000 kg 验收可销售织物，不含卷芯和包装。 |
| `common_moisture_basis` | 纱线、织物、废物和参考产品质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实测质量及其水分或调湿基准，并在质量平衡前将全部纺织品质量项转换到同一已声明基准。 |
| `area_to_mass` | 按面积或长度采集的织物记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用批次特定的可用幅宽和实测单位面积质量换算面积或长度；保留原始测量值和公式。 |
| `carrier_separation` | 电力、蒸汽、燃料和回收热 | 载能体特定属性 | 载能体特定单位 | 将每种载能体作为独立交换并保留计量或发票单位；不得报告一个合并能源流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购经纱和纬纱到达前景设施收货点，并声明供应商、纤维组成、纱线支数、质量、水分基准和上游数据集引用 |
| starting_condition_role | 前景制造从纱线接收开始；纤维生产和纱线纺制属于上游 |
| product_classification_scope | 在应用组成证据和全部相邻子类排除项后，参考产品必须符合 CPC 3.0 代码 26790 |
| recursive_input_rule | 已属于本 PCR 类别的外购织物作为带有自身合规数据集的上游产品输入记录一次；不得在接收方前景过程中递归重建其制造 |
| upstream_dataset_requirement | 为每种外购纱线、化学品、包装组件、电力供应、蒸汽供应、供水、燃料、范围内运输服务和场外处理服务连接上游数据集 |
| disclosure | 声明全部厂内和外包工序；纤维及再生含量核算；水分基准；内部返工；拒收产出；共产品；水源；废水去向；废气控制；废物去向；以及任何排除工序 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 全部前景过程 | 纳入纱线接收和准备、织造、达到已声明可销售状态所需的全部工序、内部返工、公用工程、直接排放、移交前废物和废水处理、检验及包装，直至工厂大门。 | `jrc-txt-bref-2023`; `eu-txt-bat-2022` |
| `sb_conditional_finishing` | 预处理、染色、印花、涂层、干燥、焙烘和功能整理 | 当参考产品实际实施某项工序时纳入该工序。若工序外包，应记录织物转移并连接供应商数据集，不得表示该工序不存在。 | `jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing` |
| `sb_atomic_inventory` | 全部清单交换 | 将每种纱线、上浆化学品、染料、助剂、电力供应、蒸汽供应、燃料、包装组件、废物、废水流和基本流排放分别记录为独立交换。下列卡片未表示但实际使用的每种物质或产品必须新增原子行。 | `eu-txt-bat-2022` |
| `sb_no_silent_cutoff` | 已知前景交换 | 不得因实测数量小而省略已知交换。应记录该交换，或说明该精确交换为何不适用。 | `iso-14044-2006`; `eu-pef-2021` |
| `sb_treatment_transfer` | 废物、废水和捕集污染物 | 纳入厂内收集和处理。交换离开设施时，记录其物理状态、数量、接收经营者以及处理或排放去向。 | `eu-txt-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | 纱线络筒、整经和上浆 | required | 络筒和整经为必需；仅在实际上浆时适用上浆交换 | 前景准备 | 转入织造的已准备经纱 kg |
| `weaving` | 织机织造 | required | 机织参考产品始终纳入 | 前景生产 | 从织机转出的坯布 kg |
| `wet_and_dry_finishing` | 预处理和整理 | conditional | 纳入达到已声明可销售状态所需的每项处理；仅在明确声明坯布时缺省 | 前景整理 | 从最后一项纳入处理转出的织物 kg |
| `inspection_and_packaging` | 检验和包装 | required | 始终纳入至工厂门口交付形态 | 前景完工 | 1,000 kg 验收可销售参考织物 |

### 过程：纱线络筒、整经和上浆（`yarn_preparation`）

#### 输入

##### 产品流

###### 经纱（`warp_yarn`）

将指定聚酯-粘胶短纤维混纺经纱作为一个外购交换记录。若产品使用另一精确纱线身份，应为该纱线新增独立原子交换。

- 选定流：Polyester-viscose blended staple-fibre warp yarn
- 流属性/单位：Mass / kg
- 数量规则：进入络筒和整经的实测净发料质量，并修正库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

###### 马铃薯淀粉上浆剂（`potato_starch`）

仅在马铃薯淀粉实际加入经纱浆料配方时记录。

- 选定流：马铃薯淀粉 `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- 流属性/单位：Mass / kg
- 数量规则：实测马铃薯淀粉净消耗量，并修正库存变化、退料和回收浆液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`

###### 聚乙烯醇上浆剂（`polyvinyl_alcohol`）

仅在聚乙烯醇实际加入经纱浆料配方时记录。

- 选定流：聚乙烯醇 `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass / kg
- 数量规则：实测聚乙烯醇净消耗量，并修正库存变化、退料和回收浆液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`

###### 准备用水（`preparation_water`）

记录进入上浆和设备清洗的自来水；另行披露经核实的内部回用量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：进入纱线准备的实测自来水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`

###### 准备用电（`preparation_electricity`）

记录络筒、整经、上浆传动、泵、通风和分配辅助设备使用的中国国家电网低压电力。

- 选定流：Electricity, low voltage, China national grid mix
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电量，或从完整设施电表平衡中按设备运行时间进行有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`

###### 准备用蒸汽（`preparation_steam`）

当浆料干燥或另一纳入的准备工序使用蒸汽时，记录跨越过程边界的外购蒸汽。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：分配至纱线准备的计量外购蒸汽质量，并保留压力和凝结水返回状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备经纱（`prepared_warp`）

按共同水分基准记录转入织造的已上浆或未上浆经纱。

- 选定流：Sized polyester-viscose blended staple-fibre warp
- 流属性/单位：Mass / kg
- 数量规则：转入织造的实测净质量；实际上浆时包括织物所保留的浆料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

##### 废物流

###### 废经纱（`waste_warp_yarn`）

记录排除内部回用后的络筒、整经和上浆废弃经纱。

- 选定流：Waste polyester-viscose blended staple-fibre warp yarn
- 流属性/单位：Mass / kg
- 数量规则：移交至已说明接收处理的实测净废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

##### 基本流

### 过程：织机织造（`weaving`）

#### 输入

##### 产品流

###### 已准备经纱输入（`prepared_warp_input`）

记录从纱线准备过程接收的已准备经纱。

- 选定流：Sized polyester-viscose blended staple-fibre warp
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_warp` 输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

###### 纬纱（`weft_yarn`）

将指定聚酯-粘胶短纤维混纺纬纱作为一个外购交换记录。

- 选定流：Polyester-viscose blended staple-fibre weft yarn
- 流属性/单位：Mass / kg
- 数量规则：发至织机的实测净质量，并修正库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

###### 织机润滑油（`loom_lubricating_oil`）

记录加入织机系统的润滑油，并排除未改变而退回库存的油。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：实测净发油量，并修正库存变化和回收油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`

###### 织造用电（`weaving_electricity`）

记录织机和分配织造辅助设备使用的中国国家电网低压电力。

- 选定流：Electricity, low voltage, China national grid mix
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电量，或从完整设施电表平衡中按设备运行时间进行有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### 织造用水（`weaving_water`）

记录跨越织造过程边界、用于织机清洗或调湿的自来水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：进入织造的实测自来水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 坯布（`greige_fabric`）

记录在任何整理处理前离开织机的坯布。

- 选定流：Greige polyester-viscose woven fabric
- 流属性/单位：Mass / kg
- 数量规则：按共同水分基准计量、不含卷芯的实测净卷布质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

##### 废物流

###### 废纬纱（`waste_weft_yarn`）

记录排除内部回用后的废弃纬纱。

- 选定流：Waste polyester-viscose blended staple-fibre weft yarn
- 流属性/单位：Mass / kg
- 数量规则：移交至已说明接收处理的实测净废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

###### 等外坯布（`offspec_greige_fabric`）

记录作为废物离开产品系统的拒收坯布；内部返工仍为内部循环。

- 选定流：Off-spec greige polyester-viscose woven fabric
- 流属性/单位：Mass / kg
- 数量规则：移交至已说明接收处理的实测净拒收织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

##### 基本流

###### 排放到空气的颗粒物（`pm10_to_air`）

记录从织造区域排放到空气的未捕集 10 微米以下颗粒物。

- 选定流：Particulate matter, less than 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量或报告期内有文件支持的场址排放清单值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

### 过程：预处理和整理（`wet_and_dry_finishing`）

#### 输入

##### 产品流

###### 坯布输入（`greige_fabric_input`）

记录进入第一项纳入处理的坯布。

- 选定流：Greige polyester-viscose woven fabric
- 流属性/单位：Mass / kg
- 数量规则：与 `greige_fabric` 输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

###### 整理用水（`finishing_water`）

记录进入预处理、染色、水洗和整理的自来水；另行披露经核实的内部回用量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：进入纳入整理工序的实测自来水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### 氢氧化钠（`sodium_hydroxide`）

仅在纳入的预处理或整理浴液实际加入氢氧化钠时记录外购氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测氢氧化钠产品净消耗量，并修正库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### 过氧化氢溶液（`hydrogen_peroxide_50`）

仅在实际加入该精确产品浓度时记录 50% 过氧化氢溶液。

- 选定流：过氧化氢溶液，50%（水溶液） `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- 流属性/单位：Mass / kg
- 数量规则：实测溶液净消耗量，并修正库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### 乙酸（`acetic_acid`）

仅在 pH 调节或另一纳入工序实际加入乙酸时记录。

- 选定流：Acetic acid, 100%
- 流属性/单位：Mass / kg
- 数量规则：实测乙酸产品净消耗量，并修正库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### 氯化钠（`sodium_chloride`）

仅在纳入染浴实际加入氯化钠时记录外购氯化钠。

- 选定流：氯化钠
- 流属性/单位：Mass / kg
- 数量规则：实测氯化钠产品净消耗量，并修正库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### 分散染料（`disperse_blue_56`）

仅在实际加入该精确染料产品时记录 C.I. Disperse Blue 56。任何其他染料均须使用自身原子前景交换。

- 选定流：C.I. Disperse Blue 56 dye product
- 流属性/单位：Mass / kg
- 数量规则：实测染料产品净消耗量，并修正库存变化、退料和回收浴液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### 活性染料（`reactive_blue_19`）

仅在实际加入该精确染料产品时记录 C.I. Reactive Blue 19。任何其他染料均须使用自身原子前景交换。

- 选定流：C.I. Reactive Blue 19 dye product
- 流属性/单位：Mass / kg
- 数量规则：实测染料产品净消耗量，并修正库存变化、退料和回收浴液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts_and_dosing`
- 来源：`jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### 整理用电（`finishing_electricity`）

记录纳入湿法和干法整理设备使用的中国国家电网低压电力。

- 选定流：Electricity, low voltage, China national grid mix
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电量，或从完整设施电表平衡中按设备运行时间进行有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### 整理用蒸汽（`finishing_steam`）

记录纳入浴液、干燥或焙烘设备使用的外购蒸汽。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：分配至纳入整理工序的计量外购蒸汽质量，并保留压力和凝结水返回状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理织物（`finished_fabric`）

当可销售产品为整理织物时，记录离开最后一项纳入处理的织物。

- 选定流：其他人造短纤维机织织物 `aa850d80-fcb5-40ab-8539-61771bb51c0f`
- 流属性/单位：Mass / kg
- 数量规则：按共同水分基准计量、不含卷芯和包装的实测净织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

##### 废物流

###### 整理废水（`finishing_wastewater`）

记录在纳入厂内处理后排放至水体的纺织湿法加工废水；其他去向需要不同的原子废物流身份。

- 选定流：废水，纺织品湿法加工，至水体 `a60031a7-ea29-49ef-b578-90de910fcf8e`
- 流属性/单位：Mass / kg
- 数量规则：报告期内在排放点实测的废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### 干燥纺织废水处理污泥（`dried_textile_sludge`）

将离开厂内纺织废水处理的干燥污泥记录为独立废物移交。

- 选定流：Dried textile wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：移交至指定处理经营者的实测干物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

##### 基本流

###### 排放到空气的化石二氧化碳（`fossil_carbon_dioxide_to_air`）

记录纳入厂内燃烧排放的化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：纳入设备的实测或设施报告化石二氧化碳排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

###### 排放到空气的氮氧化物（`nitrogen_oxides_to_air`）

记录纳入厂内燃烧产生并以二氧化氮计的氮氧化物。

- 选定流：Nitrogen oxides, as nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：纳入设备的实测或设施报告氮氧化物排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开最后一项纳入处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-txt-bat-2022`

### 过程：检验和包装（`inspection_and_packaging`）

#### 输入

##### 产品流

###### 进入检验的坯布（`greige_fabric_to_inspection`）

仅在已声明可销售产品为坯布时记录进入最终检验的坯布。

- 选定流：Greige polyester-viscose woven fabric
- 流属性/单位：Mass / kg
- 数量规则：从织造转入检验的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

###### 进入检验的整理织物（`finished_fabric_to_inspection`）

仅在纳入整理时记录进入最终检验的整理织物。

- 选定流：其他人造短纤维机织织物 `aa850d80-fcb5-40ab-8539-61771bb51c0f`
- 流属性/单位：Mass / kg
- 数量规则：从最后一项纳入整理工序转入检验的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_and_fabric_mass`
- 来源：`jrc-txt-bref-2023`

###### 纸板管（`cardboard_tube`）

记录随织物发运的每个新纸板管或纸芯。

- 选定流：Cardboard tube for textile-roll packaging
- 流属性/单位：Mass / kg
- 数量规则：纳入发运卷装的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`

###### 低密度聚乙烯薄膜（`ldpe_film`）

记录用于发运织物的低密度聚乙烯薄膜。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：纳入发运包装的实测薄膜净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`

###### 聚丙烯打包带（`polypropylene_strap`）

记录用于发运织物的聚丙烯打包带。

- 选定流：Polypropylene packaging strap
- 流属性/单位：Mass / kg
- 数量规则：纳入发运包装的实测打包带净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`

###### 包装用电（`packaging_electricity`）

记录检验、卷装、裁切和包装设备使用的中国国家电网低压电力。

- 选定流：Electricity, low voltage, China national grid mix
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电量，或从完整设施电表平衡中按设备运行时间进行有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 来源：`eu-txt-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品（`reference_product`）

这是工厂门口的验收可销售织物，不含卷芯和包装。

- 选定流：其他人造短纤维机织织物 `aa850d80-fcb5-40ab-8539-61771bb51c0f`
- 流属性/单位：Mass / kg
- 数量规则：按已声明水分基准计恰好 1,000 kg 验收可销售织物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 等外最终织物（`offspec_final_fabric`）

记录排除内部返工后作为废物离开产品系统的可销售状态拒收织物。

- 选定流：Off-spec woven fabric of man-made staple fibres
- 流属性/单位：Mass / kg
- 数量规则：移交至指定接收处理的实测净拒收织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`

###### 废低密度聚乙烯薄膜（`waste_ldpe_film`）

记录包装过程中废弃的低密度聚乙烯包装薄膜。

- 选定流：废低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：移交至指定接收处理的实测废薄膜净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`

###### 废纸板管（`waste_cardboard_tube`）

记录纺织卷装包装中损坏或废弃的纸板管。

- 选定流：Waste cardboard tube from textile-roll packaging
- 流属性/单位：Mass / kg
- 数量规则：移交至指定接收处理的实测废管净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用工序和内部返工 | 优先采用过程细分、分表计量和批次直接归属。内部返工保留在产品系统内，不得同时作为废物输出和新的外部输入重复计算。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_mass` | 功能相当织物产出之间无法避免的共用负荷 | 无法直接归属时，按共同水分基准下的验收产出质量分配，并披露期间、产出和系数。 | `eu-pef-2021` |
| `allocation_causal` | 功能存在实质差异的共产品 | 使用反映因果关系且有文件支持的物理关系；若无可辩护关系，使用工厂门口收入，并报告与质量分配的敏感性比较。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_waste_status` | 回收纱线、织物、浆料、污泥和包装 | 仅当产出的规范、数量、接收方和市场均有文件记录时将其视为共产品。否则保留为废物并连接处理，且不得给予避免产品信用。 | `eu-pef-2021`; `eu-txt-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_and_fabric_mass` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing`; `inspection_and_packaging` | 纱线和织物转移 | 采购、仓库、卷布秤、生产订单和检验记录 | lot_id; material_id; supplier; fibre_types; fibre_mass_shares; yarn_count; gross_mass; tare; moisture_basis; process_from; process_to; grade; rework_status | 使用校准秤并与仓库和生产记录核对 | kg | 每次接收、发料、卷装或转移 | 与参考输出相同的已声明报告期 | 每条纳入生产线和外包转移 | 按精确材料身份和过程转移汇总净质量；核对内部输出与输入 | 秤校准；库存核对；卷号追踪；供应商规范 |
| `cp_chemical_receipts_and_dosing` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing` | 每个交换一种指定化学品 | 采购、库存、配方、投料、退料和回收记录 | chemical_id; trade_name; concentration; solids_fraction; batch_id; issued_mass; returned_mass; recovered_mass; opening_stock; closing_stock | 校准投料或称量并与批准配方和库存核对 | kg | 每批及库存核对 | 与相关过程输出相同的已声明报告期 | 每个纳入投料点 | 分别计算每个化学品身份的净消耗量；不得将不同物质合并为一个数量 | 校准；配方批准；安全数据表；库存平衡 |
| `cp_water_and_energy` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing`; `inspection_and_packaging` | 每个交换一种水或载能体 | 仪表、发票、凝结水和设备运行记录 | meter_id; carrier; opening_reading; closing_reading; purchased_quantity; reused_quantity; condensate_return; equipment_id; runtime; allocation_driver | 优先分表计量；否则使用有文件支持的完整仪表平衡和因果分配 | kg; kWh | 仪表或发票期间 | 与相关过程输出相同的已声明报告期 | 全部纳入设备和分配辅助系统 | 分开保留自来水、电力和蒸汽；归一化前核对场址总量 | 仪表校准；发票；仪表图；分配工作表 |
| `cp_waste_and_emissions` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing`; `inspection_and_packaging` | 每个交换一种指定废物或基本流排放 | 容器称重、转移联单、排放仪表、实验室报告以及烟道或设施排放记录 | flow_id; substance_or_waste_name; source_process; gross_mass; tare; dry_matter; discharge_point; concentration; gas_or_water_flow; destination; treatment_operator | 对每个指定交换进行校准称重或代表性监测 | kg | 每次转移或监测期间 | 与相关过程输出相同的已声明报告期 | 每条纳入废物去向和排放点 | 仅汇总相同流身份、状态和去向的测量值；排除经核实的内部返工 | 校准；监管链；认可实验室报告；转移收据；排放报告 |
| `cp_packaging_and_dispatch` | `inspection_and_packaging` | 每种包装组件和验收产品 | 物料清单、发料、称重和发运记录 | packaging_material_id; issued_mass; returned_mass; shipped_mass; roll_id; core_tare; product_grade | 校准称重并与包装发料和发运核对 | kg | 每次发运 | 与参考输出相同的已声明报告期 | 全部纳入包装和发运作业 | 分别汇总每种包装材料；验收产品不含卷芯和包装 | 秤校准；物料清单；发运单；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个非参考清单行 | 归一化数量 = 报告期采集数量 ÷ 共同水分基准下验收可销售织物质量 × 1,000 kg | 采集流数量；验收产品质量；水分修正 | 每 1,000 kg 参考产品数量 | `iso-14044-2006`; `eu-pef-2021` |
| `calc_mass_from_area` | 按长度或面积记录的织物 | 织物质量 = 实测长度 × 可用幅宽 × 实测单位面积质量；结果与秤重质量核对 | 长度；可用幅宽；单位面积质量；秤重质量 | 已声明水分基准下的织物 kg |  |
| `calc_material_balance` | 纱线准备、织造和整理 | 将共同基准下的材料输入与产品、库存变化、内部返工、各废物流及实测排放核对；披露带符号的未解释差额 | 全部材料输入输出；期初和期末库存 | 过程材料平衡说明 | `eu-txt-bat-2022` |
| `calc_water_balance` | 每个用水过程 | 将外购自来水与分别计量的回用、蒸发、产品保留、废水和库存变化核对，不合并这些交换 | 水输入；回用；废水；蒸发；保留；库存变化 | 过程水量平衡说明 | `eu-txt-bat-2022` |
| `calc_allocation_factor` | 无法避免的共用过程 | 分配系数 = 参考产品所选因果数量 ÷ 同期全部共产品相同数量 | 产出数量；因果驱动量或收入；报告期 | 已披露的分配系数 | `iso-14044-2006`; `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品、纱线、化学品、包装、废物和排放 | 为每个交换保留一个精确身份，包括适用时的产品浓度或组成、流类型、过程、状态和去向。 | 规范；安全数据表；采购记录；转移联单；实验室记录 |
| `dq_temporal` | 前景活动数据 | 使用一个代表性的已声明报告期，识别异常运行和产品组合变化，并说明排除日期或批次的理由。 | 带日期仪表导出；生产台账；停机和生产活动日志 |
| `dq_measurement` | 质量、水、电力、蒸汽、废物和排放 | 使用校准仪器，或完整记录计算、输入、单位和不确定性。 | 校准证书；原始读数；发票；计算工作表 |
| `dq_completeness` | 过程图和清单 | 覆盖每个必需过程、每个适用条件过程及每个实际原子交换，不得有未说明截断。 | 过程流程图；配方清单；投入产出清单；质量和水量平衡 |
| `dq_supplier_links` | 外购投入和外包工序 | 保留足以选择代表性上游数据的供应商、地域、技术、报告期、产品组成和数据集引用。 | 供应商声明；采购记录；相连数据集元数据 |
| `dq_uuid_status` | 清单流身份 | 仅在 hybrid 发现和公开行直读确认精确语义、流类型、参考属性及单位后采用 Tiangong UUID。未解决身份保留在 manifest 审查元数据中。 | 作者审查记录；公开行回读 |
| `dq_no_temporary_numbers` | 清单数量和范围 | 使用采集的前景值。任何 AI 编写的数值估计或范围均不是合规数量；未来加入的来源支持范围必须保留来源和基准。 | 前景记录；引用的范围来源；审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 数据集元数据和参考流 | CPC 26790 范围、纤维质量比例、经纬纱支数、组织、可用幅宽、单位面积质量、整理状态、水分基准、疵点等级或参考产品 UUID 缺失或不一致时判定不合规。 | `unsd-cpc-3-2025`; `iso-14044-2006` |
| `validation_reference_mass` | 参考流和归一化行 | 确认参考流恰为不含卷芯和包装的 1,000 kg 验收可销售织物，并确认全部行使用同一水分基准和验收产出分母。 | `iso-14044-2006`; `eu-pef-2021` |
| `validation_process_coverage` | 过程图 | 要求 `yarn_preparation`、`weaving` 和 `inspection_and_packaging`；当厂内或相连供应商实际实施任何预处理、染色、印花、涂层、干燥、焙烘或功能整理时，要求 `wet_and_dry_finishing`。 | `jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing` |
| `validation_atomic_flows` | 过程清单 | 拒绝将集合标签、选择器、合并载能体、合并化学品组、合并包装组、合并废物组或合并排放组作为 `Selected flow`；每个实际交换必须有独立行。 | `eu-txt-bat-2022` |
| `validation_transfer_balance` | 内部过程转移 | 按共同水分基准核对每个上游产品输出和相应下游输入，并披露任何转移差额。 | `eu-txt-bat-2022` |
| `validation_water_and_energy` | 使用水或能源的过程 | 要求分别记录自来水、电力和蒸汽；要求水量和能源平衡识别回用、回收和分配，且不得合并载能体。 | `eu-txt-bat-2022` |
| `validation_waste_and_emissions` | 废物、废水和直接排放 | 要求每个实际废物和基本流排放具有单一身份、数量、来源过程、监测或称量基准以及去向或环境介质；列出的卡片未发生时要求有文件支持的不适用结论。 | `eu-txt-bat-2022` |
| `validation_allocation` | 共用工序和共产品 | 可直接归属时要求直接归属；否则要求披露驱动量、系数、受影响过程、报告期和敏感性。 | `iso-14044-2006`; `eu-pef-2021` |
| `validation_sources_and_protocols` | 采集行、计算规则和带 UUID 的行 | 每个采集行必须引用已有协议，每个外部规则必须引用已列来源 id，每个采用 UUID 必须在作者审查中有精确公开行核验证据。 | `iso-14044-2006`; `eu-txt-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他人造短纤维机织织物工厂门口前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 织物组成、市场状态、生产工序、地域、报告期和分配方法与已声明数据集匹配的产品足迹、process、lifecyclemodel 和供应链研究 |
| excluded_use | 纤维制造；纱线纺制；人造长丝织物；更具体的 CPC 2674、2675、2676 或 2677 产品；针织或非织造织物；服装或制成品；使用；寿命终止 |
| required_metadata | canonical PCR id；CPC 引用；参考产品 UUID；纤维质量比例；经纬纱支数；组织；可用幅宽；单位面积质量；坯布或整理状态；每项纳入工序；颜色和整理；水分基准；地域；报告期；场址和技术覆盖；分配；上游数据集连接；废水和废物去向 |
| required_quality_disclosure | 前景和二手数据比例；测量和计算方法；代表性；缺失 UUID；数据缺口；质量和水量平衡；分配敏感性；外包工序；排放和处理覆盖；相对采集协议的偏离 |
| update_trigger | 组成、织机技术、整理配方、能源或供水、处理系统、包装规范、分配方法、参考流身份、官方 CPC 范围、BAT 结论或代表性报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0 explanatory notes，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，访问日期 2026-08-12 | CPC 26790 身份和相邻子类排除 |
| `jrc-txt-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf，访问日期 2026-08-12 | 整经、上浆、织造、湿法处理过程分解以及具体化学品和公用工程清单需求 |
| `eu-txt-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，ELI https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj，访问日期 2026-08-12 | 投入产出清单、水量和能源平衡、化学品管理、废物和排放监测以及过程变更审查 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，ISO 官方页 https://www.iso.org/standard/38498.html，ISO 于 2022 年确认仍有效，访问日期 2026-08-12 | LCI 范围、一致性、报告、解释和审查框架 |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，ELI https://eur-lex.europa.eu/eli/reco/2021/2279/oj，访问日期 2026-08-12 | 参考流归一化、上游连接、分配、数据质量和下游使用 |
| `zhang-et-al-2023-wet-processing` | `literature` | Zhang, S. et al., Environmental assessment of fabric wet processing from gate-to-gate perspective: Comparative study of weaving and materials, Science of the Total Environment 857 (2023) 159495, https://doi.org/10.1016/j.scitotenv.2022.159495 | 预处理、染色、后处理和定形的前景阶段分解，以及按织物和过程使用主要制造清单的必要性 |
