---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-knitted-or-crocheted-fabrics
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他针织或钩编织物

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 类别 28190 中可销售的针织或钩编织物，包括以坯布、预处理、染色、印花、涂层、层压、热定形或其他后整理状态供应的织物。边界涵盖针织或钩编成形，以及生产者为使申报织物批次达到工厂门状态而实际运行的预处理、着色、印花、后整理、检验和厂内废水处理步骤。

本 PCR 不包括 CPC 28110 的绒头织物和毛圈织物、机织物、非织造布、纱线、制成纺织品、服装以及下游裁剪和缝制。纤维和纱线生产属于上游，除非其在报告场址内进行并作为独立过程明确加入。数据集必须声明准确的纤维组成、纱线形态、针织或钩编结构、织物幅宽和单位面积质量、后整理状态、着色路线与含水率基准，避免用坯布中间品代表整个成品织物类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-knitted-or-crocheted-fabrics |
| classification_refs | CPC 3.0：28190 其他针织或钩编织物 |
| covered_products | 绒头织物和毛圈织物以外的针织或钩编织物，包括经编和纬编织物以及含弹性纱线或橡胶线的织物，市场状态可为已声明的坯布或后整理状态 |
| excluded_products | CPC 28110 针织或钩编绒头织物和毛圈织物；纱线；机织物和非织造布；服装；制成纺织品；裁剪和缝制工序 |
| representative_product | 以已声明生产批次供应的针织或钩编织物（绒头织物和毛圈织物除外） |
| production_route | 针织线上纱线准备；针织或钩编；路线特定的预处理、着色、印花或后整理；检验与放行；实际运行时的厂内废水处理 |
| market_state | 工厂门织物卷或织物片，明确声明坯布、漂白、染色、印花、涂层、层压、热定形或其他后整理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有指定结构和后整理状态的针织或钩编织物批次（绒头织物和毛圈织物除外） |
| How much | 工厂门处 1 kg 净干重可销售织物 |
| How well | 符合已声明的纤维组成、结构、幅宽、单位面积质量、着色与后整理规范，参考量不含不合格材料 |
| How long or cycle | 一个生产批次直至工厂门放行；本中间产品不赋予使用寿命功能 |
| reference_flow_link | 提供声明单位所需的可销售织物质量；所有清单交换均归一化到 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净干重可销售织物 |
| 参考产品流 | 其他针织或钩编织物（绒头织物和毛圈织物除外） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 按干重计的纤维组成；纱线形态和线密度规范；针织或钩编技术；经编或纬编结构；织物幅宽；单位面积质量；坯布或后整理状态；预处理路线；着色或印花路线；后整理或涂层路线；地理与时间范围；净干重和水分校正方法 |

`reference_product` 未分配 Tiangong 产品流 UUID。已复核的 Tiangong 流 `73008d55-ab26-442b-be93-1e2869b6e66e` 明确限于湿处理前的针织或钩编坯布，其边界窄于本 PCR。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按干重基准确定净可销售织物质量。记录实测到厂质量、含水率或校正系数、排除的包装及不合格织物；没有明确换算时不得混用湿重和干重。 |
| `areal_density_disclosure` | 产品识别 | 单位面积质量 | g/m2 | 记录声明值和实测单位面积质量及所用试验或生产控制方法；单位面积质量是限定信息，不得替代质量参考量。 |
| `energy_carrier_separation` | 电力、蒸汽和燃料 | 能量或载体特定属性 | kWh、MJ 或 kg | 每种购入或自产能源载体分别保留一个交换。电力以 kWh 记录，气体或液体燃料按已声明低位热值记录，蒸汽按质量及压力、温度记录，或按实测交付能量记录。 |
| `water_mass_conversion` | 工艺用水和废水 | 质量或体积 | kg 或 m3 | 直接使用实测质量，或使用有记录的密度和温度换算实测体积。进水和出水必须是两个独立交换。 |

## 5. 系统边界

前景边界始于纱线及其他申报材料进入织物生产场址，止于净干重可销售织物在工厂门放行。纳入生产者实际运行的织物成形以及路线特定的湿法或干法加工。购入纱线、水、电力、蒸汽、燃料、化学品和处理服务的上游生产以链接的上游数据集表示，不在前景清单中重复构建。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入报告场址的纱线及分别购入的工艺材料，并声明供应商识别、纤维组成、纱线形态、数量、水分基准和上游数据集引用 |
| starting_condition_role | 织物成形的前景起点；仅后整理路线可使用购入的同类别织物，但必须披露其为中间产品输入 |
| product_classification_scope | 仅限 CPC 3.0 28190；CPC 28110 中针织或钩编绒头织物和毛圈织物不在范围内 |
| recursive_input_rule | 如果购入坯布或部分加工的 CPC 28190 织物用于进一步处理，将其作为一个原子产品投入记录并链接上游数据集，不得递归重复其先前针织清单 |
| upstream_dataset_requirement | 每种购入纱线、材料、公用工程、燃料、处理服务和同类别织物投入均采用组成、技术、地理和时期具有代表性的数据集 |
| disclosure | 声明针织或钩编、预处理、染色、印花、涂层、层压、热法或机械后整理、检验及废水处理是在场址内、外包、不适用还是已由上游表示 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_disclosure` | 所有前景数据集 | 只纳入申报织物批次实际运行的操作，并披露每项排除或外包的路线步骤；不得将仅生产坯布的路线建模为成品织物生产。 | `un-cpc-v3-28190`; `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |
| `boundary_atomic_recipes` | 湿法加工和后整理 | 每种配方化学品、染料、颜料、粘合剂、涂层剂、助剂、燃料、制冷剂、废物流和基本排放分别记录为一个交换；下列卡片仅构成最低过程图，不得作为选择器或聚合载体。 | `eu-textiles-bat-2022-2508` |
| `boundary_wastewater_treatment` | 废水 | 实际运行厂内废水处理时将其纳入；否则记录一个流向已识别厂外处理数据集的废物流，并避免重复计算处理。 | `eu-textiles-bat-2022-2508` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabric_formation` | 针织或钩编 | required | 始终纳入；仅当后整理数据集以购入同类别织物为起点时可不纳入 | 前景织物成形 | 离开针织或钩编线的成形织物 kg |
| `pretreatment` | 织物预处理 | conditional | 进行洗涤、煮练、漂白、丝光、热准备或其他预处理时纳入 | 前景湿法加工 | 处理的干织物 kg |
| `coloration` | 染色或印花 | conditional | 报告场址对申报织物进行染色或印花时纳入 | 前景湿法或印花过程 | 着色或印花的干织物 kg |
| `finishing` | 物理或化学后整理 | conditional | 进行涂层、层压、热定形、干燥、固化、柔软、轧光、防缩或其他后整理时纳入 | 前景后整理 | 后整理干织物 kg |
| `wastewater_treatment` | 厂内废水处理 | conditional | 仅在报告场址边界内实际运行废水处理时纳入 | 前景处理 | 处理废水 kg |
| `quality_release` | 检验与产品放行 | required | 所有申报工厂门产品均纳入 | 前景质量与质量核对 | 放行的净干重可销售织物 kg |

### 过程：针织或钩编（`fabric_formation`）

#### 输入

##### 产品流

###### 棉纱投入（`cotton_yarn`）

仅当申报织物组成实际消耗棉纱时记录。

- 选定流：棉纱
- 流属性/单位：质量 / kg
- 数量规则：该批次领用量减去有记录退料量后的棉纱干重当量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-pef-method-2021`

###### 聚酯长丝纱投入（`polyester_filament_yarn`）

仅当申报织物组成实际消耗聚酯长丝纱时记录。

- 选定流：聚酯长丝纱
- 流属性/单位：质量 / kg
- 数量规则：该批次领用量减去有记录退料量后的聚酯长丝纱干重当量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-pef-method-2021`

###### 聚酰胺长丝纱投入（`polyamide_filament_yarn`）

仅当申报织物组成实际消耗聚酰胺长丝纱时记录。

- 选定流：聚酰胺长丝纱
- 流属性/单位：质量 / kg
- 数量规则：该批次领用量减去有记录退料量后的聚酰胺长丝纱干重当量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-pef-method-2021`

###### 粘胶短纤维纱投入（`viscose_yarn`）

仅当申报织物组成实际消耗粘胶短纤维纱时记录。

- 选定流：粘胶短纤维纱
- 流属性/单位：质量 / kg
- 数量规则：该批次领用量减去有记录退料量后的粘胶纱干重当量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-pef-method-2021`

###### 氨纶纱投入（`elastane_yarn`）

实际消耗氨纶纱时单独记录，不得与主纱合并。

- 选定流：氨纶纱
- 流属性/单位：质量 / kg
- 数量规则：该批次领用量减去有记录退料量后的氨纶纱干重当量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`un-cpc-v3-28190`

###### 织物成形用电力（`formation_electricity`）

记录针织或钩编机器及直接相关准备和抽风设备的计量用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：织物成形分表电量或有记录的成形电表分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成形织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 针织机油投入（`knitting_machine_oil`）

将加入针织或钩编设备的润滑油作为独立材料投入记录。

- 选定流：针织机润滑油
- 流属性/单位：质量 / kg
- 数量规则：报告期初库存加采购量减期末库存和有记录回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成形织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成形织物中间品（`formed_fabric`）

记录针织或钩编线后、任何路线特定湿法或后整理前的织物干重当量。

- 选定流：针织或钩编坯布
- 流属性/单位：质量 / kg
- 数量规则：转入下一工序或放行检验的成形织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个织物成形批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-textiles-bat-2022-2508`; `khan-islam-2015`

##### 废物流

###### 纱线和织物成形废料（`formation_textile_waste`）

仅在边角料、开机纱、断纱、布边和不合格成形织物被实际混合收集时，将其作为一个物理混合固体纺织废物流记录。

- 选定流：棉与合成纤维混合的织物成形纺织废料
- 流属性/单位：质量 / kg
- 数量规则：送往再使用、回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成形织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 针织机废油（`used_knitting_oil`）

记录从设备移出并送往回收或处理的废润滑油。

- 选定流：针织机废润滑油
- 流属性/单位：质量 / kg
- 数量规则：从设备移出并运往场外的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成形织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

###### 纺织颗粒物排放至空气（`formation_particulate_air`）

记录纱线和织物操作经厂内治理后的实测空气颗粒物排放。

- 选定流：未特定颗粒物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：实测浓度乘以实测排风体积，或采用有记录的场址排放计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成形织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_formation_records`
- 来源：`eu-textiles-bat-2022-2508`

### 过程：织物预处理（`pretreatment`）

#### 输入

##### 产品流

###### 预处理坯布投入（`pretreatment_fabric_input`）

记录进入预处理的针织或钩编坯布。

- 选定流：针织或钩编坯布
- 流属性/单位：质量 / kg
- 数量规则：投入预处理的坯布干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个预处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 预处理工艺用水（`pretreatment_water`）

记录洗涤、煮练、漂白、漂洗和设备清洗的进水。

- 选定流：工艺用水
- 流属性/单位：质量 / kg
- 数量规则：进水实测量减去单独计量且未接触工艺的直接回水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 预处理氢氧化钠（`pretreatment_sodium_hydroxide`）

仅当场址配方含氢氧化钠时记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：根据配方和批次记录得到的活性氢氧化钠投加质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 预处理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 漂白用过氧化氢（`pretreatment_hydrogen_peroxide`）

仅在实施过氧化物漂白时记录。

- 选定流：过氧化氢
- 流属性/单位：质量 / kg
- 数量规则：根据浓度和批次记录得到的活性过氧化氢投加质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 预处理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 预处理用电力（`pretreatment_electricity`）

预处理设备和泵的用电与蒸汽分别记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：预处理分表电量或有记录的预处理电表分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 预处理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 预处理用蒸汽（`pretreatment_steam`）

单独记录交付蒸汽并声明压力、温度和冷凝水回收。

- 选定流：蒸汽
- 流属性/单位：质量 / kg
- 数量规则：预处理交付蒸汽实测量；仅当蒸汽数据集采用净交付量时扣除单独测量的返回冷凝水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 预处理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理织物输出（`pretreated_fabric`）

按干重当量记录离开申报预处理序列的织物。

- 选定流：预处理针织或钩编织物
- 流属性/单位：质量 / kg
- 数量规则：转入着色、后整理或放行的织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个预处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

###### 预处理废水（`pretreatment_wastewater`）

记录从预处理排往厂内或厂外处理的废水，不得与固体残渣合并。

- 选定流：纺织预处理废水
- 流属性/单位：质量 / kg
- 数量规则：预处理废水实测排放量，并与进水和织物滞留水核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

### 过程：染色或印花（`coloration`）

#### 输入

##### 产品流

###### 着色织物投入（`coloration_fabric_input`）

记录以实际着色前状态投入染色或印花过程的织物。

- 选定流：预处理针织或钩编织物
- 流属性/单位：质量 / kg
- 数量规则：投入着色的织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个着色批次或印花运行
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 着色工艺用水（`coloration_water`）

记录染色或印花准备、洗涤、漂洗和设备清洗用水。

- 选定流：工艺用水
- 流属性/单位：质量 / kg
- 数量规则：分配到着色过程的进水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 着色用氯化钠（`coloration_sodium_chloride`）

仅在配方投加氯化钠时记录。

- 选定流：氯化钠
- 流属性/单位：质量 / kg
- 数量规则：批次和配方记录中的氯化钠实测投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 着色用碳酸钠（`coloration_sodium_carbonate`）

仅在配方投加碳酸钠时记录。

- 选定流：碳酸钠
- 流属性/单位：质量 / kg
- 数量规则：批次和配方记录中的碳酸钠实测投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 着色用乙酸（`coloration_acetic_acid`）

仅在申报着色配方中投加乙酸时记录。

- 选定流：乙酸
- 流属性/单位：质量 / kg
- 数量规则：根据交付浓度和批次投加量计算的活性乙酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### C.I. 活性蓝 19 染料（`coloration_reactive_blue_19`）

仅在使用 C.I. 活性蓝 19 时记录；每种不同染料、颜料、粘合剂和助剂都必须另增原子交换。

- 选定流：C.I. 活性蓝 19
- 流属性/单位：质量 / kg
- 数量规则：根据产品浓度和配方投加量计算的活性染料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 着色用电力（`coloration_electricity`）

记录染色或印花设备、泵、投料和直接相关控制设备的用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：着色分表电量或有记录的着色电表分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 着色用蒸汽（`coloration_steam`）

蒸汽与电力和燃料分别记录。

- 选定流：蒸汽
- 流属性/单位：质量 / kg
- 数量规则：着色交付蒸汽实测量，并记录压力、温度和冷凝水回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 染色或印花织物输出（`colored_fabric`）

按干重当量记录离开染色或印花的织物。

- 选定流：染色针织或钩编织物
- 流属性/单位：质量 / kg
- 数量规则：转入后整理或放行的织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个着色批次或印花运行
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`; `khan-islam-2015`

##### 废物流

###### 着色废水（`coloration_wastewater`）

将染色或印花洗涤和清洗的液体排放记录为独立废物流。

- 选定流：纺织着色废水
- 流属性/单位：质量 / kg
- 数量规则：着色废水实测排放量，并与进水和织物滞留水核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 着色或印花干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

### 过程：物理或化学后整理（`finishing`）

#### 输入

##### 产品流

###### 后整理织物投入（`finishing_fabric_input`）

记录进入申报后整理序列的针织或钩编织物。

- 选定流：后整理前针织或钩编织物
- 流属性/单位：质量 / kg
- 数量规则：投入后整理的织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个后整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 后整理工艺用水（`finishing_water`）

记录施加或洗去整理剂以及清洗后整理设备所用的水。

- 选定流：工艺用水
- 流属性/单位：质量 / kg
- 数量规则：分配到后整理的进水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### DMDHEU 整理剂（`finishing_dmdheu`）

仅在免烫整理中使用二羟甲基二羟基乙烯脲时记录；其他每种整理化学品均须另设原子交换。

- 选定流：二羟甲基二羟基乙烯脲
- 流属性/单位：质量 / kg
- 数量规则：根据产品浓度和配方投加量计算的活性整理剂质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 后整理用电力（`finishing_electricity`）

记录后整理、干燥、抽吸、涂层或机械后整理设备的用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：后整理分表电量或有记录的后整理电表分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 后整理用蒸汽（`finishing_steam`）

将干燥、加热、固化或其他后整理用途的蒸汽与燃料分别记录。

- 选定流：蒸汽
- 流属性/单位：质量 / kg
- 数量规则：后整理交付蒸汽实测量，并记录压力、温度和冷凝水回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 后整理用外购热能（`finishing_purchased_heat`）

仅在热能由外部或场址集中供热网络计量供应，且尚未计入蒸汽或燃料交换时记录。

- 选定流：工业热能，已交付
- 流属性/单位：能量 / MJ
- 数量规则：分配到后整理的交付热量实测值，扣除有记录的返回热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 直接加热用天然气（`finishing_natural_gas`）

仅在本过程边界内为后整理或热处理直接燃烧天然气时记录。

- 选定流：天然气
- 流属性/单位：能量 / MJ，低位热值
- 数量规则：计量燃气体积乘以场址特定低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### R-134a 制冷剂补充量（`finishing_refrigerant_r134a`）

将后整理相关冷却或空调设备补充的 R-134a 作为独立交换记录；其他每种制冷剂均须另设物种特定卡片。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：质量 / kg
- 数量规则：报告期内实测补充且可归属于后整理设备的制冷剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 后整理织物输出（`finished_fabric`）

按干重当量记录离开申报后整理序列的织物。

- 选定流：后整理针织或钩编织物
- 流属性/单位：质量 / kg
- 数量规则：转入放行检验的织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个后整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`; `khan-islam-2015`

##### 废物流

###### 后整理废水（`finishing_wastewater`）

记录后整理排出的废水，不得与固体整理残渣合并。

- 选定流：纺织后整理废水
- 流属性/单位：质量 / kg
- 数量规则：后整理废水实测排放量，并与进水和织物滞留水核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

###### 直接加热产生的化石二氧化碳（`finishing_fossil_co2`）

记录用于后整理的天然气燃烧产生的化石二氧化碳排放。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：根据实测天然气消耗及有记录的含碳量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 排放至空气的 R-134a 制冷剂（`finishing_r134a_air`）

将后整理相关冷却或空调设备泄漏的 R-134a 与制冷剂补充量及其他制冷剂物种分别记录。

- 选定流：1,1,1,2-四氟乙烷，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：R-134a 泄漏实测值或有记录的设备质量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 后整理干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022-2508`

### 过程：厂内废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电力（`wwt_electricity`）

记录泵送、曝气、混合、分离和污泥处理用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：废水处理分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 废水处理用氯化铁（`wwt_ferric_chloride`）

仅在以氯化铁作为申报混凝剂投加时记录。

- 选定流：氯化铁
- 流属性/单位：质量 / kg
- 数量规则：根据产品浓度和加药记录计算的活性氯化铁质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

###### 进入厂内处理的纺织废水（`wwt_influent`）

将进入厂内处理设施的混合纺织废水记录为一个实测进水流。

- 选定流：混合纺织工艺废水
- 流属性/单位：质量 / kg
- 数量规则：厂内废水处理进水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥（`wwt_sludge`）

记录送往处理、回收或处置的脱水污泥。

- 选定流：纺织废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：实测湿重，并记录干固体含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

###### 处理后水排放（`wwt_treated_water`）

记录厂内处理后排往申报受纳水体的处理废水。

- 选定流：水，排放至淡水
- 流属性/单位：质量 / kg
- 数量规则：排往淡水的处理出水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022-2508`

### 过程：检验与产品放行（`quality_release`）

#### 输入

##### 产品流

###### 待放行织物批次（`release_fabric_input`）

记录进入最终检验的实际坯布或后整理织物批次。

- 选定流：待放行针织或钩编织物批次
- 流属性/单位：质量 / kg
- 数量规则：进入最终检验的织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个放行批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_release_records`
- 来源：`un-cpc-v3-28190`; `eu-pef-method-2021`

###### 检验和卷装用电力（`release_electricity`）

记录检验、测量、卷装或折叠以及直接相关控制设备的用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或有记录的检验放行批次用电分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_release_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品（`reference_product`）

只记录符合已声明纤维组成、结构、尺寸、单位面积质量、着色、后整理状态和干重基准的可销售织物。

- 选定流：其他针织或钩编织物（绒头织物和毛圈织物除外）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：检验后 1 kg 净干重可销售织物，不含包装和不合格材料
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-v3-28190`; `eu-pef-method-2021`

##### 废物流

###### 检验不合格织物（`release_rejected_fabric`）

将最终检验不合格织物与可销售产品分开记录为一个废物流。

- 选定流：不合格针织或钩编织物
- 流属性/单位：质量 / kg
- 数量规则：送往返工、回收、处理或处置的不合格织物干重当量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干重可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_release_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产线和公用工程 | 技术可行时，通过按过程和产品批次分别计量或其他细分方式避免分配，尤其应分开织物成形、湿法加工、后整理和处理记录。 | `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |
| `allocation_mass_when_unavoidable` | 联产可销售织物等级 | 无法物理细分且多个可销售织物等级共用一个过程时，按净干重分配剩余共用负担，除非有记录的因果物理关系能更好表示驱动因素。报告分配方法和数量。 | `eu-pef-method-2021` |
| `allocation_waste_and_recovery` | 不合格品、回收材料和外供能量 | 没有有记录的去向及适用系统模型时，不得将不合格品或回收材料作为共产品抵扣。明确保留处理负担以及任何替代或回收假设。 | `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabric_formation_records` | `fabric_formation` | 每个原子纱线、电力、油品、成形织物、废油、固体废物和粉尘行 | 批次领退料、仪表、库存、秤量和排放测量记录 | lot_id; yarn_id; fibre_composition; yarn_mass; returns; formed_fabric_mass; electricity_kwh; oil_stock_and_purchase; waste_mass; dust_concentration; exhaust_volume; moisture_basis | 将材料领用和退料与批次产出核对；读取专用仪表和校准秤；仅用实测浓度和体积计算粉尘质量 | kg; kWh; mg/Nm3; Nm3 | 每批次，公用工程和库存至少每月核对 | 代表性连续 12 个月或较短生产活动的全部记录 | 生产申报产品的所有针织或钩编线 | 按批次汇总原子交换并除以干成形织物输出；每种纱线身份分开保留 | 采购与退料记录；校准证书；仪表日志；批次流转单；废物转移单；排放测试报告 |
| `cp_pretreatment_records` | `pretreatment` | 每个原子织物、水、化学品、电力、蒸汽、产出和废水行 | 批次配方、投料、仪表和秤量 | lot_id; dry_fabric_in; water_in; chemical_product; concentration; charge_mass; electricity_kwh; steam_mass; condensate_return; dry_fabric_out; wastewater_mass | 采集每个批次配方和直接仪表读数；将产品投加量换算为活性化学品质量，不得合并不同化学品 | kg; kWh | 每批次，每月核对 | 代表性连续 12 个月或较短生产活动的全部记录 | 生产申报产品所用全部厂内预处理设备 | 仅在按干织物产出归一化后汇总同一原子流 | 已签核配方；投料日志；仪表校准；秤量记录；质量平衡复核 |
| `cp_coloration_records` | `coloration` | 每个原子织物、水、染料、颜料、粘合剂、助剂、电力、蒸汽、产出和废水行 | 配方、印花浆记录、投料、仪表和秤量 | lot_id; route; fabric_in; chemical_identity; concentration; charge_mass; water_in; electricity_kwh; steam_mass; fabric_out; wastewater_mass | 按化学品或商业产品身份分别记录每种配方成分，并保留路线和批次可追溯性 | kg; kWh | 每批次或印花运行，每月核对 | 代表性连续 12 个月或较短生产活动的全部记录 | 生产申报产品所用全部厂内染色和印花线 | 仅在按干织物产出归一化后汇总同一原子流和相同路线 | 已批准配方；化学品 SDS；投料记录；仪表校准；批次流转单；废水仪表 |
| `cp_finishing_records` | `finishing` | 每个原子织物、水、整理化学品、电力、蒸汽、天然气、产出、废水和直接排放行 | 配方、投料、仪表、燃料记录和烟气计算 | lot_id; finish_route; fabric_in; chemical_identity; concentration; charge_mass; water_in; electricity_kwh; steam_mass; gas_volume; net_calorific_value; fabric_out; wastewater_mass; emission_factor | 采集每个后整理步骤和每种载体的直接记录；用有记录因子计算活性化学品、燃料能量和燃烧排放 | kg; kWh; MJ | 每批次，仪表每月核对 | 代表性连续 12 个月或较短生产活动的全部记录 | 生产申报产品所用全部厂内后整理和热处理设备 | 路线汇总前，将每个原子交换归一化到干后整理织物输出 | 已批准配方；SDS；仪表和燃料发票；校准记录；排放因子引用；批次流转单 |
| `cp_wastewater_treatment_records` | `wastewater_treatment` | 每个原子进水、处理化学品、电力、污泥和水排放行 | 流量计、投料、实验室结果、秤量和处置记录 | influent_mass; effluent_mass; electricity_kwh; chemical_identity; concentration; dose; sludge_wet_mass; sludge_dry_solids; discharge_compartment; monitored_parameter; concentration | 可行时采用流量比例直接监测；每种化学品和排放物质分别保留 | kg; kWh; mg/L | 连续或逐批流量；参数频率按许可证和工艺变化确定 | 与前景生产相同期间 | 接收所纳入过程废水的厂内处理设施 | 核对进水、出水、污泥和滞留水；实测污染物分别作为基本流报告 | 仪表日志；实验室认可；采样计划；校准；污泥转移单；许可证报告 |
| `cp_quality_release_records` | `quality_release` | 放行投入、检验电力、参考产品和不合格织物 | 卷或片秤量、检验和规范记录 | lot_id; product_code; fibre_composition; construction; width; areal_density; finish_state; wet_mass; moisture_content; dry_mass; rejected_mass; electricity_kwh | 称量每个放行批次，记录水分校正，核对合格与不合格织物，并验证全部必需限定信息 | kg; g/m2; m; kWh | 每个放行批次 | 与前景生产相同期间 | 申报产品的每条放行和检验线 | 仅汇总合格干重；所有纳入的前景交换归一化到 1 kg 合格干重 | 校准秤；水分测试；检验报告；产品规范；不合格记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_reference_mass` | 参考产品 | dry_mass = measured_wet_mass × (1 − measured_moisture_fraction)；排除包装和不合格织物 | measured_wet_mass; measured_moisture_fraction; packaging_mass; rejected_mass | 净干重可销售织物 kg | `eu-pef-method-2021` |
| `calc_exchange_normalization` | 每个前景交换 | normalized_exchange = 归属于申报产品的交换数量 ÷ 净干重可销售织物质量 | atomic exchange quantity; attributable share after subdivision; net dry saleable fabric mass | 每 1 kg 参考产品的交换 | `eu-pef-method-2021` |
| `calc_active_chemical` | 配制化学品 | active_chemical_mass = 交付产品质量 × 声明活性浓度；支持记录中保留交付产品身份和浓度 | product_mass; active_concentration | 活性化学品 kg 和交付产品 kg，且不合并不同化学品 | `eu-textiles-bat-2022-2508` |
| `calc_fuel_energy` | 天然气及作为独立行加入的其他燃料 | fuel_energy = 计量燃料数量 × 有记录低位热值 | fuel_quantity; density when required; net_calorific_value | 单项燃料净能量 MJ | `eu-textiles-bat-2022-2508` |
| `calc_process_mass_balance` | 每个纳入过程 | 核对干材料投入、干产品产出、分别测量的废物、滞留材料和有记录排放；调查无法解释的不平衡，不得将其计入产品 | atomic material inputs; dry outputs; wastes; emissions; stock change | 过程级质量平衡检查 | `eu-textiles-bat-2022-2508` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留批次级纤维组成、纱线形态、结构、幅宽、单位面积质量、后整理状态、着色路线、后整理路线和水分基准。 | 产品规范、物料清单、批次流转单、试验和检验记录 |
| `dq_primary_activity` | 所有生产者运行过程 | 对相同报告期使用过程或场址级消耗、库存、仪表、配方、排放、废物和销售记录；披露估算和分配。 | 仪表、发票、库存变化、配方、实验室报告、废物单据、生产记录 |
| `dq_temporal_coverage` | 前景数据集 | 生产规律时使用代表性连续 12 个月；较短生产活动须纳入全部活动记录并披露季节性和停机。 | 带日期来源登记及完整性核对 |
| `dq_recipe_completeness` | 湿法加工和后整理 | 每种配方成分作为独立交换核算，并将配方总量与投料或库存记录核对；不得用聚合配方行替代化学品。 | 已批准配方、SDS、投料日志、库存核对 |
| `dq_route_consistency` | 过程图 | 声明市场状态和场内路线必须与纳入过程一致。坯布输出不得纳入未实施的着色或后整理，成品输出不得遗漏生产者运行的处理。 | 工艺流程图、批次路线、外包记录、产品声明 |
| `dq_source_traceability` | 所有计算值 | 保留原始字段、单位、换算、因子、来源 id、责任人和计算版本，使每个归一化交换可复现。 | 计算工作簿或机器可读溯源记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 CPC 28190 范围，排除绒头织物和毛圈织物，要求全部参考限定信息；若将已拒绝的坯布 UUID 用作整个类别的参考产品，UUID 校验失败。 | `un-cpc-v3-28190` |
| `validate_reference_mass` | 参考数量 | 确认恰为 1 kg 净干重可销售织物，并记录水分校正、包装排除和不合格织物排除。 | `eu-pef-method-2021` |
| `validate_process_route` | 过程清单 | 每个 conditional 过程必须与申报批次路线一致；生产者运行的每个预处理、着色、后整理和厂内处理步骤必须恰好出现一次。 | `eu-textiles-bat-2022-2508`; `khan-islam-2015` |
| `validate_atomic_exchanges` | 过程清单 | 拒绝合并多种纱线、化学品、能源载体、燃料、制冷剂、废物、去向或排放的交换；每个选定流必须代表一个物理或化学交换。 | `eu-textiles-bat-2022-2508` |
| `validate_collection_links` | 前景数量 | 每个 `foreground_record` 或 `calculated_value` 行必须链接已声明采集协议，并保留生成归一化数量所用原始记录。 | `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |
| `validate_mass_balance` | 织物成形和湿法加工 | 检查过程级质量平衡并调查无法解释的差异；不得通过修改参考产品数量强制平衡。 | `eu-textiles-bat-2022-2508` |
| `validate_no_unsupported_ranges` | 所有清单数量 | 不得由单一案例、重复点值或摘要引入定量范围。外部来源经验范围至少需要两份独立且边界兼容的原始来源。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 表示申报针织或钩编织物工厂门生产的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于构建消耗 CPC 28190 织物的 LCA process 和 lifecyclemodel，但须匹配组成、结构、后整理状态、技术、地理、时期和废水路线 |
| allowed_use | 所有必需限定信息及纳入路线匹配下游研究时，可作为中间织物数据集使用 |
| excluded_use | 不得用于 CPC 28110 绒头织物或毛圈织物、纱线、机织物、非织造布、服装、裁剪和缝制，也不得用于数据集未表示的后整理状态和纤维组成 |
| required_metadata | PCR id 和版本；产品流身份状态；CPC 代码；纤维组成；纱线和结构规范；幅宽；单位面积质量；后整理状态；过程路线；地理；参考年；技术；分配；水分基准；上游数据集；废水去向 |
| required_quality_disclosure | 初级数据占比；时间、地理和技术代表性；仪表和秤量覆盖；配方完整性；质量平衡结果；分配；缺失 UUID；排除项；外包步骤；数据缺口和不确定性 |
| update_trigger | 纤维组成、结构、后整理配方、工艺技术、能源或供水、废水路线、分配方法、场址配置、参考年发生变化，或精确 Tiangong 参考产品 UUID 得到解析 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-28190` | 官方指南（`official_guidance`） | 联合国统计司，《CPC Version 3.0 Structure》，28190 类“其他针织或钩编织物”，https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf（检索日期 2026-08-23） | 产品类别边界，并排除另列为 CPC 28110 的绒头织物和毛圈织物 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279 附件 I 和 II，《Product Environmental Footprint Method》，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索日期 2026-08-23） | 中间产品声明单位、参考流归一化、系统边界、企业特定数据、分配、数据质量和验证 |
| `eu-textiles-bat-2022-2508` | 官方指南（`official_guidance`） | 欧盟委员会实施决定 (EU) 2022/2508，纺织工业 BAT 结论，ELI：http://data.europa.eu/eli/dec_impl/2022/2508/oj（检索日期 2026-08-23） | 织物生产和后整理定义、过程图、输入输出清单、水、能源、化学品、废水、废物、排放和监测规则 |
| `khan-islam-2015` | 论文（`literature`） | Khan, M. M. R. 和 Islam, M. M. (2015)，Materials and manufacturing environmental sustainability evaluation of apparel product: knitted T-shirt case study，Textiles and Clothing Sustainability 1:8，https://doi.org/10.1186/s40689-015-0008-8 | 全文交叉核验针织、预处理、染色或印花、后整理工序链及制造商记录需求；不用于定量范围 |
