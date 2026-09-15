---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.gimped-yarn-and-strip-chenille-yarn-loop-wale-yarn
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 粗松螺旋花线及条带、绳绒纱线、起圈纵行纱线

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 `27995` 所列特种纺织纱线产品的工厂大门生产：粗松螺旋花线及条带、绳绒纱线和起圈纵行纱线。范围包括已声明纱线或条带组分的受控喂入、包绕、起圈、适用时切割、加捻或固结、卷绕、检验以及工厂包装。天然纤维、再生纤维素纤维、合成纤维、矿物纤维、金属材料及其混纺组分路线均可适用，但须声明准确组成和结构。

本 PCR 不包括分类归属其他代码的普通单纱、股线、缆线、变形纱、缝纫线、轮胎帘子线及零售纱线；由本类特种纱线制成的机织、针织、簇绒或编织织物及制品；纤维和聚合物生产；使用阶段；以及生命末期。投入纱线的纤维准备和常规纺纱、染色或湿法整理属于上游，除非这些工序在报告场址运行，并作为独立过程加入且具有完整的原子清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.gimped-yarn-and-strip-chenille-yarn-loop-wale-yarn` |
| classification_refs | CPC 3.0 `27995` — 粗松螺旋花线及条带、绳绒纱线、起圈纵行纱线 |
| covered_products | 围绕芯纱形成的粗松螺旋花线或纺织条带；短绒夹持在芯纱或固结纱之间的绳绒纱线；带有刻意形成圈状花型的起圈纵行纱线 |
| excluded_products | CPC 27995 以外的普通纱线和线；由纱线制成的织物及纺织成品；未加工纤维、聚合物以及上游常规纱线生产 |
| representative_product | 以商业包装供应的一种已声明结构的成品特种纱线 |
| production_route | 已声明组分纱线或条带接收；喂入和张力控制；产品特定的粗松螺旋花线成形、绳绒成形或起圈成形；固结或最终加捻；卷绕；检验；包装 |
| market_state | 生产工厂大门处的已制成特种纱线或条带；参考数量不包括其包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 保持已声明 CPC 27995 结构和材料组成的成品粗松螺旋花线或条带、绳绒纱线或起圈纵行纱线 |
| How much | 工厂大门处 `1 kg` 合格成品净质量 |
| How well | 符合已声明组分材料、组分排列、线密度、捻度或固结结构、花型或绒毛几何特征、颜色/整理状态以及商定验收试验 |
| How long or cycle | 一个报告期内的工厂大门生产输出；使用寿命不属于质量参考量 |
| reference_flow_link | TianGong Product flow `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8` — Gimped yarn and strip, chenille yarn, loop wale-yarn |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `1` |
| 参考产品流 | 粗松螺旋花线及沙条，绳绒纱线，起圈纵行纱线 `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | `kg` |
| 必需限定信息 | 产品子类型：粗松螺旋花线、粗松螺旋条带、绳绒纱线或起圈纵行纱线；芯纱/固结纱、花型纱、绒纱、绑纱和条带的材料组成及再生含量；组分数量及排列；线密度和试验基准；捻向与捻度或其他固结结构；适用时的绒长、绒密度、圈形几何或螺旋花型；颜色及染色阶段；施加的整理；商业包装类型与净质量；合格/不合格产品准则；生产技术、场址、地理范围及参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 合格成品特种纱线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 卷绕和检验后称量或核对合格纱线净质量。1 kg 参考量不包括纸管、锥形管、纸箱、薄膜、托盘和不合格产品，并须分别记录。 |
| `component_mass` | 芯纱/固结纱、花型纱、绒纱、绑纱和纺织条带 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收质量和库存变化分别记录每项已声明组分。不得合并不同纤维组成或组分角色。 |
| `linear_density` | 投入组分和成品特种纱线 | Linear density | tex 或声明的等效单位 | 按已声明调湿和制样程序测定单位长度质量；说明换算为 tex 的方法。在满足适用性限制时可使用 ISO 2060。 |
| `twist_measurement` | 加捻或固结产品及组分 | Twist | turns/m | 记录捻向、试验方法、试样调湿及单位长度捻回数。仅在符合产品和伸长适用性限制时使用 ISO 2061，否则记录商定方法。 |
| `energy_measurement` | 成形、加捻、卷绕、检验和包装 | Energy | kWh | 使用代表期的分表电量或经核对的场址电表记录。共用能源只能按第 7 节分配。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有代表性生产路线 | 包括外购组分纱线或条带、电力、包装和处理服务的上游数据集；包括从前景喂入、成形、加捻或固结、卷绕、检验、生产损失、内部返工和工厂包装直至合格工厂大门输出。 | `ec-pef-2021`, `eu-textiles-bat-2022` |
| `boundary_route_separation` | 粗松螺旋、绳绒和起圈纵行路线 | 保留实际路线和组分架构。不得以绳绒成形模型替代粗松螺旋或起圈纵行生产，也不得在没有生产量加权记录时合并实质不同的路线结果。 | `unsd-cpc-27995`, `ortlek-ulku-2004`, `wang-et-al-2025` |
| `boundary_wet_processing` | 染色、洗涤、化学整理或热处理 | 外购组分已具有声明颜色和整理时，将湿法加工视为上游。在报告场址实施时，应作为单独计量过程加入，并逐一记录每种化学品、水流、能源载体、废水流和直接排放。 | `eu-textiles-bref-2023`, `eu-textiles-bat-2022` |
| `boundary_no_silent_cutoff` | 材料、能源、废物和排放记录 | 不得因已知流数量小而省略。任何不可获得的记录或排除过程必须具名、说明理由并评价潜在重要性。 | `ec-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 组分纱线或纺织条带以已声明纤维组成、颜色、整理、包装形式和市场状态交付特种纱线生产场址，并链接上游数据集 |
| starting_condition_role | `supplier_gate_component_yarn_or_strip_inputs` |
| product_classification_scope | 仅限 CPC 3.0 `27995` 成品粗松螺旋花线及条带、绳绒纱线和起圈纵行纱线 |
| recursive_input_rule | 外购 CPC 27995 特种纱线作为组分投入时，按同类产品投入记录其供应商数据集和声明质量；不得静默拆分，也不得再次计作场址生产。 |
| upstream_dataset_requirement | 为每项外购组分、电力供应、包装、运输或处理服务链接尽可能匹配其材料、结构、市场状态、地理、技术和参考期的数据集，并披露替代项。 |
| disclosure | 声明产品子类型、组分清单、成形路线、可选湿法或热工操作、场址范围、报告期、分配驱动因子、内部返工、损失、包装、上游数据缺口、排除过程，以及结果代表单一结构还是生产量加权产品族。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | 组分接收、准备和喂入 | `required` | 始终 | 已声明芯纱/固结纱、花型纱、绒纱、绑纱或条带的前景准备 | 每报告期投产质量 |
| `specialty_yarn_formation` | 粗松螺旋、绳绒或起圈成形及固结 | `required` | 始终；仅执行已声明产品路线 | CPC 27995 产品结构的前景成形 | 每报告期合格和不合格成形纱质量 |
| `wet_or_thermal_finishing` | 场址内湿法或热工整理 | `conditional` | 仅当染色、洗涤、化学整理、干燥或热定形在报告边界内运行时纳入 | 单独计量的前景整理 | 每项声明操作的处理质量 |
| `winding_inspection_packaging` | 卷绕、检验和包装 | `required` | 始终 | 合格商业包装的前景放行 | 每报告期合格产品净质量 |

### 过程：组分接收、准备和喂入（`component_preparation`）

#### 输入

##### 产品流

###### 芯纱或固结纱投入（`core_yarn_input`）

芯纱或固结纱跨入生产时作为一个产品投入记录。记录须保留纤维组成、纱线结构、颜色、整理、供应商及组分角色。

- 选定流：Core yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投向代表性生产订单的接收质量，并按期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_records`
- 来源：`ortlek-ulku-2004`, `wang-et-al-2025`

###### 花型纱投入（`effect_yarn_input`）

花型纱是经包绕、起圈或其他排列形成已声明粗松螺旋或起圈纵行结构的独立组分。

- 选定流：Effect yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投向适用粗松螺旋或起圈纵行生产订单的接收质量，并按库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：适用路线每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_records`
- 来源：`niscpr-fancy-yarn-2007`

###### 绒纱投入（`pile_yarn_input`）

绒纱在绳绒生产中单独记录，因为它被切成短段并夹持在芯纱或固结纱之间。

- 选定流：Pile yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投向绳绒订单的绒纱接收质量，并按库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品绳绒纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_records`
- 来源：`ortlek-ulku-2004`, `wang-et-al-2025`

###### 纺织条带投入（`textile_strip_input`）

仅当已声明粗松螺旋条带路线使用条带而非纱线作为花型组分时记录纺织条带。

- 选定流：Textile strip
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投向适用生产订单的条带接收质量，并按库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品粗松螺旋条带产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_records`
- 来源：`unsd-cpc-27995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：粗松螺旋、绳绒或起圈成形及固结（`specialty_yarn_formation`）

#### 输入

##### 产品流

###### 成形设备电力（`electricity_input`）

记录喂入器、旋转头、切割系统、锭子、驱动装置、局部抽风、控制装置及本过程辅助设备的电力。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：归属于代表性成形订单的分表电量，或经设备和场址电表核对的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

#### 输出

##### 产品流

###### 转至卷绕的成形特种纱线（`formed_specialty_yarn_output`）

场址记录最终卷绕和检验前离开成形工序的产品特定质量。这是内部产品输出，而不是公开参考流。

- 选定流：Formed specialty yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转至卷绕的成形纱线实测质量，包括随后在卷绕处判废的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每成形批次或生产订单
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`ortlek-ulku-2004`, `wang-et-al-2025`

##### 废物流

###### 纺织纱线边角料（`textile_yarn_waste_output`）

切头、开机损失、断头、修剪绒毛和不可回用的不合格纱线，须按每种已声明组成和去向作为一个物理具体的纺织纱线废物流记录。

- 选定流：Textile yarn offcuts
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：代表性生产订单移出的称量废物质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：场址内湿法或热工整理（`wet_or_thermal_finishing`）

#### 输入

##### 产品流

通用 PCR 不预先授权湿法加工投入的集合行。若本条件过程适用，在使用本 PCR 构建数据包前，必须为每种实际染料、助剂、化学品、供水、电力、蒸汽或外购热力及燃料分别添加原子卡片。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

通用 PCR 不预先授权合并的废水或残渣流。须为每条实际废水和固体废物流及其处理去向分别添加卡片。

##### 基本流

须为场址内整理过程释放的每项实测或计算直接排放分别添加卡片；不得使用空气或水排放集合选择器。

### 过程：卷绕、检验和包装（`winding_inspection_packaging`）

#### 输入

##### 产品流

###### 纸质纱管（`paper_tube_input`）

随商业纱线包装保留的纸管或锥形管须与参考产品净质量分开记录。

- 选定流：Paper yarn tube
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格包装所用纸管的采购或领用质量，并按库存变化及可重复使用退回量调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-pef-2021`

###### 瓦楞纸板纸箱（`paperboard_carton_input`）

实际使用的瓦楞纸板运输纸箱作为单独包装投入记录。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发运产品所用纸箱的采购或领用质量，并按库存变化及重复使用调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-pef-2021`

###### 聚乙烯包装薄膜（`polyethylene_film_input`）

用于保护成品包装的聚乙烯薄膜须按聚合物牌号和再生含量声明单独记录。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发运产品所用薄膜的采购或领用质量，并按库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-pef-2021`

#### 输出

##### 产品流

###### 合格 CPC 27995 成品（`reference_product_output`）

合格纱线净质量是卷绕和检验后的公开参考产品输出；其质量不包括包装组分。

- 选定流：粗松螺旋花线及沙条，绳绒纱线，起圈纵行纱线 `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格产品净质量实测值，归一化为恰好 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品特种纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`unsd-cpc-27995`, `iso-2060-1994`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用成形、卷绕、检验和包装操作 | 首先细分电表、生产订单、机器时间、物料领用和废物记录，使每种产品结构承担其直接计量负荷。 | `ec-pef-2021` |
| `allocation_physical` | 细分后剩余的共用投入和输出 | 当细分无法消除共用流时，采用引起该流的物理驱动因子：有记录运行状态下的计量机器能耗、机器小时、处理质量，或包装数量和质量。记录驱动因子和所有产品总量。 | `ec-pef-2021` |
| `allocation_economic_last_resort` | 缺乏可辩护物理关系的多输出操作 | 只有在无法证明因果物理关系时才允许经济分配；使用同期工厂大门价值，披露方法并进行敏感性分析。 | `ec-pef-2021` |
| `allocation_internal_rework` | 可回收的开机纱、断头和不合格产品 | 内部回用材料无信用返回原过程，并从废物输出中扣除一次。不得把同一材料同时计作避免投入和外运废物。 | `eu-textiles-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_material_records` | `component_preparation` | 芯纱/固结纱、花型纱、绒纱和纺织条带投入 | 接收、领用、BOM、批次和库存记录 | 组分角色；纤维组成；供应商；批次；接收/领用质量；期初/期末库存；颜色/整理；再生含量；订单 | 将采购和库房记录与生产订单领用及实物库存核对 | kg | 每次接收和领用；每月或每生产活动核对 | 与代表性生产相同期间 | 所有纳入场址和库房 | 按 row_id、材料身份、批次、路线和产品订单汇总领用质量及库存调整 | 经校准秤；签字接收/领用记录；BOM 修订；批次可追溯性；库存核对 |
| `cp_energy_records` | `specialty_yarn_formation` | 电力投入 | 分表、总表、机器小时和运行状态记录 | 电表 id；起止读数；时间戳；机器；订单；运行/空闲时间；共用负荷 | 优先使用专用分表；按有记录因果驱动因子核对共用电表 | kWh | 连续或每班/订单；每月核对 | 包括正常损失的代表性连续期间 | 所有纳入生产区域 | 汇总实测用量；扣除单独计量的排除负荷；按第 7 节分配剩余共用负荷 | 电表校准；账单；抄表日志；停机和生产日志；核对记录 |
| `cp_production_output_records` | `specialty_yarn_formation`; `winding_inspection_packaging` | 成形、合格、不合格及返工纱线 | 批次/订单、卷绕、秤量、检验和发运记录 | 订单；子类型；结构；毛/净质量；包装/皮重；合格/不合格/返工质量；日期；机器；试验结果 | 称量输出和皮重；按订单核对卷绕和检验状态 | kg | 每批、订单或包装 | 与投入相同期间 | 所有纳入生产和检验线 | 按状态汇总净质量；清单仅按合格净输出归一化 | 秤校准；皮重检查；检验记录；发运核对；产率质量平衡 |
| `cp_waste_records` | `specialty_yarn_formation` | 纺织纱线边角料 | 容器称量、废物转移和处理记录 | 组成；来源订单；毛/皮/净质量；内部回用；去向；处理 | 称量每个组成特定容器并核对转移文件 | kg | 每容器或班次；每月核对 | 与代表性生产相同期间 | 所有纳入机器和废物储存区 | 按组成和去向汇总扣除有记录内部回用后的净外运废物 | 秤校准；标签；转移单；处理接收证明；质量平衡核对 |
| `cp_packaging_records` | `winding_inspection_packaging` | 纸管、纸箱和薄膜投入 | 采购、领用、包装规格和库存记录 | 包装材料；供应商；单位质量；数量；领用/退回数量；再生含量；产品订单 | 称量代表性包装单元并核对领用数量和库存 | kg 和 count | 每批次或规格变化；每月核对 | 与发运输出相同期间 | 所有纳入包装线 | 单位质量乘净领用数量，并与采购和库存质量校核 | 秤校准；包装规格；领用/退回日志；发票和库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 报告期行数量除以同一代表性订单和场址的 CPC 27995 合格产品净质量。 | 行数量；合格产品净质量 | 每 1 kg 参考产品数量 | `ec-pef-2021` |
| `calc_component_mass_balance` | 组分准备和特种纱线成形 | 核对组分投入 = 合格产品 + 外运废物 + 有记录库存变化 + 其他单独识别输出；调查无法解释的差异，不得强制平衡。 | 组分领用；成形/合格/不合格/返工质量；废物；库存变化 | 质量平衡残差和完整性发现 | `eu-textiles-bat-2022` |
| `calc_linear_density` | 纱线线密度报告 | 对调湿试样质量和长度应用已声明试验程序并以 tex 报告；保留原始观测和换算。 | 调湿试样质量；试样长度；调湿及试验方法 | 成品和组分纱线线密度 | `iso-2060-1994` |
| `calc_shared_energy` | 共用电力 | 扣除直接计量的排除负荷后，仅按已披露因果驱动因子分配剩余共用计量用量。 | 共用电表总量；直接电表；机器小时/处理质量及运行状态 | 代表性订单分配 kWh | `ec-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和组分投入 | 保留产品子类型、组分角色、纤维组成、结构、颜色/整理、供应商批次、路线和产品订单链接；不得只从商品名推断组成。 | 产品规格、BOM、供应商声明、接收及订单记录 |
| `dq_temporal_representativeness` | 所有前景记录 | 使用代表正常生产、开机损失、产品切换、维护、返工和不合格品的连续期间；披露缺口和异常事件。 | 有日期的电表、生产日志、维护记录、库存及废物核对 |
| `dq_technical_representativeness` | 产品族数据集 | 仅按参考期实际生产结构加权并保留路线特定组分和能源记录；披露每个加权因子。 | 订单级输出质量、机器/路线记录、产品规格 |
| `dq_measurement_control` | 质量、能源、线密度、捻度、绒毛/圈形几何及质量试验 | 识别设备、校准状态、抽样方案、调湿、单位、原始观测和数据转换。 | 校准证书、试验报告、实验室工作表、电表和秤量日志 |
| `dq_completeness` | 清单和边界 | 核对采购/领用材料、合格/不合格输出、内部回用、废物、包装和能源。具名每项缺失记录并评价潜在重要性。 | 质量和能源平衡、完整性清单、来源文件索引 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 state-code-100 Product flow `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8`、精确 CPC `27995` 身份、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，以及恰好 1 kg 合格产品净质量。 | `unsd-cpc-27995` |
| `validate_route_and_qualifiers` | 产品身份 | 缺少子类型、组分角色及组成、线密度、捻度/固结结构、适用的绒毛/圈形/螺旋花型几何、颜色/整理状态、包装基准、场址、地理范围或期间时失败。 | `unsd-cpc-27995`, `iso-2060-1994`, `iso-2061-2015`, `ortlek-ulku-2004` |
| `validate_atomic_inventory` | 过程清单 | 要求每个记录卡片仅表示一个具体交换。拒绝集合标签、备选项、未解决选择器、合并公用工程、合并包装、合并废物及合并排放。 | `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | 清单数量 | 要求每项数量可追溯至声明采集协议和原始记录。拒绝无依据固定值、虚构范围及按另一场址或期间输出归一化的数量。 | `ec-pef-2021` |
| `validate_balance_and_allocation` | 材料、能源、输出、废物和共用操作 | 要求记录质量平衡残差、电表核对、细分尝试、分配驱动因子，以及使用经济分配时的敏感性分析。 | `ec-pef-2021`, `eu-textiles-bat-2022` |
| `validate_conditional_finishing` | 场址内湿法或热工过程 | 若纳入，要求单独扩展过程，为每种实际化学品、水、能源、废水、废物和直接排放流设置一个卡片；否则整理路线不完整。 | `eu-textiles-bref-2023`, `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明 CPC 27995 结构或透明生产量加权产品族的前景工厂大门数据集 |
| downstream_use | 可作为使用已声明特种纱线的纺织品、地面覆盖物、家具织物、服装装饰、工艺品和其他产品的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 产品子类型、组分架构、组成、路线、颜色/整理状态、地理、技术、期间和包装范围兼容时用于从摇篮到工厂大门建模 |
| excluded_use | 不得替代普通纱线、织物、簇绒/机织/针织、纤维或聚合物生产、未披露湿法加工路线、其他产品子类型，或在没有附加情景数据时替代使用/生命末期 |
| required_metadata | PCR id/版本；CPC 代码；参考流 UUID 和单位；子类型；组分角色、材料、再生含量及结构；线密度；捻度/固结和花型几何；颜色/整理；路线和设备；场址/地理/期间；合格输出及包装基准；分配；上游数据集；排除项及数据缺口 |
| required_quality_disclosure | 前景数据占比；电表/秤/试验覆盖；调湿和抽样；质量/能源核对；不合格品、返工及废物处理；时间和技术代表性；分配及产品族加权；UUID 缺口及上游替代 |
| update_trigger | 产品子类型或组分结构、纤维组成或再生含量、成形技术、染整位置、电力供应、包装、分配、场址、生产组合、试验规格、废物处理或参考期发生可能实质改变清单的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-27995` | `official_guidance` | United Nations Statistics Division, CPC detail and CPC Version 3.0 explanatory-note record for code 27995, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/27995 and https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf（检索于 2026-08-13） | 产品类别名称、层级、纳入范围和分类身份 |
| `ec-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-13） | 功能/参考流、边界、企业特定数据、分配层级、数据质量、完整性、报告和校验 |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://eippcb.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-13） | 纺织准备及条件性预处理、染色和整理过程分解 |
| `eu-textiles-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13） | 条件性湿法加工的投入/输出清单、资源监测、废物预防、水/能源及排放记录 |
| `iso-2060-1994` | `standard` | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method, https://www.iso.org/standard/6837.html（检索于 2026-08-13） | 线密度测量和适用性披露 |
| `iso-2061-2015` | `standard` | ISO 2061:2015, Textiles — Determination of twist in yarns — Direct counting method, https://www.iso.org/standard/65146.html（检索于 2026-08-13） | 捻向、单位长度捻回数、试验方法和适用性披露 |
| `ortlek-ulku-2004` | `literature` | H. G. Ortlek and S. Ulku, “Factors influencing the abrasion properties of chenille yarns,” Indian Journal of Fibre & Textile Research 29 (2004) 353–356, full text: https://nopr.niscpr.res.in/bitstream/123456789/24645/1/IJFTR%2029%283%29%20353-356.pdf（检索于 2026-08-13） | 绳绒芯纱/固结纱和绒纱身份；包绕、切割、压合、加捻；结构相关质量 |
| `niscpr-fancy-yarn-2007` | `literature` | “Modelling the structure of fancy yarns,” Indian Journal of Fibre & Textile Research 32 (2007) 21–26, full text: https://nopr.niscpr.res.in/bitstream/123456789/399/1/FTR%2032%281%29%20%282007%29%2021-26.pdf（检索于 2026-08-13） | 芯纱、花型纱和绑纱组分；圈、波和绳绒花型；路线特定结构参数 |
| `wang-et-al-2025` | `literature` | “Sustainable Pattern Innovation in Chenille Tufted Carpets: A Spatial Color Mixing Approach Using Dope-Dyed Filament,” Fibers 13(9), 126, 2025, https://doi.org/10.3390/fib13090126（检索于 2026-08-13） | 开放获取的绳绒成形顺序、组分排列、切割、加捻和过程变量记录 |
