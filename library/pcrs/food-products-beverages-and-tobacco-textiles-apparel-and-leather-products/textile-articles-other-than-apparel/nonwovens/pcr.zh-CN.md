---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nonwovens
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非织造布

## 1. 范围与适用性

本 PCR 适用于归入 CPC 27922 的非织造片材、纤网和絮片的前景数据包。所覆盖产品由定向或随机排列的纤维或长丝制成，并通过摩擦、内聚或黏附而非机织或针织方式加固。覆盖路线包括干法梳理成网、气流成网、湿法成网、纺粘、熔喷及其声明组合，随后采用机械、热或化学粘合，以及不会使产品脱离 CPC 27922 的后整理。

前景边界始于非织造布工厂接收外购聚合物粒料、短纤维、纸浆或其他已声明的成纤原料。边界包括该工厂实际进行的原料准备、成网、加固、路线特定的洗涤或整理、干燥、分切、卷绕、检验和包装。每种纤维或聚合物组成、再生含量口径、成网路线、粘合路线、整理、多层结构、克重等级和生产线必须可识别。只有在完成代表性审查后方可聚合。

接收前的纤维和聚合物生产、工厂边界之外的运输、湿巾、服装、过滤器、卫生用品、医疗器械、土工织物系统或其他加工制品的制造、分销、使用和寿命终结均在前景边界之外。毡、絮料、纸、机织物、针织物、簇绒物以及不符合声明非织造定义的缝编产品不在范围内。涂层、浸渍、覆盖或层压材料只有在其分类仍为 CPC 27922 且新增层和工艺充分披露时才可覆盖。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nonwovens |
| classification_refs | CPC 3.0: 27922 - Nonwovens |
| covered_products | 归入 CPC 27922 的非织造片材、纤网和絮片，包括采用机械、热或化学加固的干法、气流、湿法、纺粘、熔喷及组合路线 |
| excluded_products | 毡；絮料；纸；机织、针织、簇绒或不符合条件的缝编织物；纤维或聚合物原料；纱线；以及产品身份不再是非织造材料的成品或加工制品 |
| representative_product | 非织造布制造工厂门口的可销售卷材或片材，并声明组成、克重、宽度、厚度、成网路线、粘合路线和整理 |
| production_route | 路线特定的纤维或聚合物准备、成网、纤网加固、有条件的整理和干燥，以及分切、卷绕、检验和包装；不得对实质不同的路线无条件平均 |
| market_state | 工厂门口可销售卷材或片材的净干质量或声明调湿状态质量，不包括包装和不合格产出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足声明组成、成网、粘合和性能规格的非织造材料 |
| How much | 1,000 kg 净非织造材料，不包括卷芯、包膜、纸箱和托盘 |
| How well | 在规定调湿和含水口径下满足声明的克重、宽度、厚度、拉伸性能和适用的终端用途规格 |
| How long or cycle | 非织造布工厂门口一个已放行生产批次；该中间材料不适用服务寿命 |
| reference_flow_link | 功能单位由声明产品状态下恰好 1,000 kg 净可销售非织造布产出实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净非织造材料 |
| 参考产品流 | Nonwovens `dd37c0b0-8d07-452a-a62a-aaffa8c42b61` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 27922 范围确认；纤维和聚合物身份及质量分数；原生和再生含量口径；成网路线；粘合路线；多层结构；克重（g/m2）；宽度；厚度；相关拉伸或性能规格；整理、涂层或层压状态；含水或调湿口径；卷材或片材形式；生产线；地理位置；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

参考流 UUID 由 flow-hybrid-search 返回，并经独立 Tiangong state-code-100 直读确认为公开 Product flow，精确分类为 CPC 27922 且参考属性为 Mass。其他混合检索候选因其公开分类叶分别为 CPC 27991、CPC 27999 或 CPC 27120 而被拒绝。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 准确报告 1,000 kg 净可销售非织造布。参考数量不包括卷芯、包膜、纸箱、托盘、边料和不合格产出。 |
| `conditioned_mass_basis` | 纤维投入、中间品、废物和产品 | Mass | kg | 在整个物料平衡中使用一种声明的含水或调湿口径。没有实测水分和明确换算时，不得混合绝干、调湿和收货状态质量。 |
| `basis_weight_measurement` | 参考产品 | Mass per unit area | g/m2 | 采用 ISO 9073-1:2023 或有文件记录的等效方法测定单位面积质量。保留试样面积、试样质量、取样位置和调湿记录。 |
| `thickness_measurement` | 参考产品 | Length | mm | 报告厚度时说明适用试验方法、压力和调湿状态；未披露时不得比较不同压力下测得的厚度。 |
| `tensile_measurement` | 参考产品 | Force and elongation | N and % | 当拉伸性能是产品限定信息时，分别报告机器方向和横向结果，并说明试样宽度、标距和调湿条件。 |
| `composition_mass_fraction` | 纤维、聚合物、粘合剂和产品组成 | Mass fraction | kg/kg | 分别记录每一种有意加入的纤维、聚合物和粘合剂，采用干基或声明调湿口径。各分数必须与声明产品组成核对一致。 |
| `energy_carrier_separation` | 电力、压缩空气、蒸汽、外购热和燃料 | Energy or delivered service | kWh, MJ or Nm3 | 保留每种载能体和计量口径。不得将电力、蒸汽、热、压缩空气或燃料合并为一行能源。 |
| `water_balance_units` | 湿法成网、水刺、洗涤和水性整理 | Volume or Mass | m3 or kg | 分别记录新鲜水取用、回用水、蒸发或产品带出以及废水。质量-体积换算应说明密度和温度假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 非织造布工厂接收的外购聚合物粒料、短纤维、纸浆或其他已识别成纤原料，并声明组成、牌号、原生或再生状态、含水率、前序加工和包装状态 |
| starting_condition_role | 上游产品投入，其聚合物、纤维或纸浆生产负荷由供应特定的上游数据集表示 |
| product_classification_scope | 仅 CPC 27922 非织造布；身份不明确的纸、毡、絮料、涂层织物或加工制品在使用本 PCR 前必须进行分类审查 |
| recursive_input_rule | 若外购投入本身已是 CPC 27922 非织造布，则链接其上游数据集，并仅清单化新增的场内层压、整理或加工操作；不得重复构建上游已表示的负荷 |
| upstream_dataset_requirement | 聚合物、纤维、纸浆、粘合剂、化学品、包装和公用工程应采用组成、再生含量、牌号、地理和路线特定的数据集；披露每一项代理和不匹配 |
| disclosure | 声明原料门、路线顺序、成网和粘合技术、所有有条件的湿法和热工操作、多层结构、再生含量、内部回用、末端治理、产品调湿、包装处理、排除的加工阶段和数据缺口 |

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 非织造布制造工厂 | 包括从实际接收和内部搬运、原料准备、成网、加固、范围内整理和干燥、分切、卷绕、检验、末端治理到工厂门口放行和包装。 | `un-cpc-v3-2025`; `iso-9092-2026`; `gaynor-nonwovens-2022` |
| `boundary_route_separation` | 数据集分层 | 干法、气流、湿法、纺粘、熔喷及组合路线应保持分开，除非实测证据表明聚合具有代表性；保留粘合和整理分层。 | `gaynor-nonwovens-2022`; `eu-pef-method-2021` |
| `boundary_upstream_inputs` | 外购原料和辅助材料 | 链接每种已识别聚合物、纤维、纸浆、粘合剂、化学品、包装和公用工程的上游负荷。除非物理上在现场进行，不得将上游聚合、纤维制造或制浆纳入前景过程。 | `eu-pef-method-2021`; `ec-jrc-txt-bref-2023` |
| `boundary_wet_processing` | 湿法成网、水刺、洗涤和水性整理 | 只要发生该操作，就应包括取水、循环、泵送、干燥、化学品投加、废水处理、污泥和直接排放。 | `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_converted_articles` | 下游产品制造 | 排除可销售非织造布放行后湿巾、服装、过滤器、卫生用品、医疗器械、土工织物系统和其他加工产品的制造；链接独立下游数据集。 | `un-cpc-v3-2025`; `epd-pcr-nonwovens-2011-06` |
| `boundary_no_hidden_cutoff` | 纳入的前景过程 | 记录所有已知材料、能源、水、产品、废物和直接排放交换。任何排除都需要记录截断依据和敏感性评估；UUID 缺失不是截断理由。 | `eu-pef-method-2021`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_web_formation` | 原料准备与成网 | required | 所有路线均必需；仅记录实际使用的路线特定原料和公用工程 | 前景准备和成网 | kg 未加固纤网或直接铺网纤网 |
| `web_consolidation` | 机械、热或化学纤网加固 | required | 必需；声明针刺、水刺、热粘合、化学粘合或组合技术 | 前景粘合 | kg 已粘合非织造纤网 |
| `finishing_drying` | 整理、洗涤和干燥 | conditional | 出售前发生洗涤、水性处理、涂层、浸渍、干燥、热定型或其他整理时纳入 | 前景整理 | kg 整理后非织造布 |
| `slitting_packaging` | 分切、卷绕、检验和包装 | required | 直至可销售卷材或片材放行均必需 | 前景加工和放行 | 1,000 kg 净参考产品 |

### 过程：原料准备与成网（`feedstock_web_formation`）

#### 输入

##### 产品流

###### 用于纺丝成网的聚丙烯粒料（`polypropylene_granulate`）

聚丙烯粒料作为适用纺粘或熔喷路线的成纤聚合物跨越工厂边界。根据收货和库存核对记录实际牌号及原生或再生状态。

- 选定流：Polypropylene granulate
- 流属性/单位：Mass / kg
- 数量规则：适用生产批次或匹配期间实测消耗的净聚丙烯粒料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`gaynor-nonwovens-2022`

###### 用于纺丝成网的聚酯粒料（`polyester_granulate`）

聚对苯二甲酸乙二醇酯粒料是适用纺丝成网路线的另一种成纤聚合物。与聚丙烯分开记录其实际牌号和再生含量口径。

- 选定流：Polyethylene terephthalate granulate
- 流属性/单位：Mass / kg
- 数量规则：适用生产批次或匹配期间实测消耗的净 PET 粒料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`gaynor-nonwovens-2022`

###### 用于湿法或气流成网的漂白纤维素纸浆（`bleached_cellulosic_pulp`）

漂白纤维素木浆仅在声明的湿法或气流成网路线中作为主要纤维配料跨越过程边界。与合成纤维投入分开记录浆种、干度、来源和认证。

- 选定流：Bleached cellulosic wood pulp
- 流属性/单位：Mass / kg dry pulp
- 数量规则：由收货质量和实测干固体分数得到的实测干浆投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`gaynor-nonwovens-2022`

###### 用于干法成网的棉短纤维（`cotton_staple_fibre`）

棉短纤维作为一个已识别纤维组分进入适用干法路线。按批次记录等级、来源、再生状态、含水率和净质量。

- 选定流：Cotton staple fibre
- 流属性/单位：Mass / kg
- 数量规则：适用生产批次或匹配期间实测消耗的净棉短纤维
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`ilo-textile-competency-2006`

###### 用于干法成网的粘胶短纤维（`viscose_staple_fibre`）

粘胶短纤维作为一个已识别再生纤维素组分进入适用干法路线。分别记录纤维牌号、供应商、含水率、油剂和净质量。

- 选定流：Viscose staple fibre
- 流属性/单位：Mass / kg
- 数量规则：适用生产批次或匹配期间实测消耗的净粘胶短纤维
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`ec-jrc-txt-bref-2023`

###### 原料准备与成网用电力（`web_formation_electricity`）

电力驱动适用路线的开松、混合、梳理、气流成网、湿法泵送或熔体纺丝和铺网。使用专用电表或有文件记录的设备分配，不与热能合并。

- 选定流：Electricity supplied to the nonwoven production line
- 流属性/单位：Energy / kWh
- 数量规则：匹配生产期内原料准备和成网的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-method-2021`

###### 成网用压缩空气（`web_formation_compressed_air`）

压缩空气用于纤维输送、牵伸或清洁时跨越成网过程边界。按声明压力记录交付体积，不与电力合并。

- 选定流：Compressed air
- 流属性/单位：Volume / Nm3
- 数量规则：匹配期间在声明压力下计量或生产记录的压缩空气交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`gaynor-nonwovens-2022`

###### 湿法成网工艺水（`wetlaid_process_water`）

仅当声明的湿法路线形成纤维悬浮液时，工艺水才是产品投入。新鲜供应水与内部循环水分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：湿法配浆和成网的实测新鲜工艺水取用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-txt-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未加固非织造纤网（`unconsolidated_nonwoven_web`）

未加固纤网是从成网转入粘合的路线特定中间品。按匹配调湿质量口径测量，并保持干法、气流、湿法、纺粘和熔喷纤网分开。

- 选定流：Unconsolidated nonwoven web
- 流属性/单位：Mass / kg
- 数量规则：转入加固的实测纤网质量，并按匹配在制品变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`gaynor-nonwovens-2022`

##### 废物流

###### 混合不合格纤维或聚合物原料（`mixed_feedstock_reject`）

本行表示成网前或成网中清除的一股物理隔离的混合废料。记录实测质量、组成、内部回用和外部处理，不得以回用材料抵减新料投入。

- 选定流：Mixed off-spec fibre or polymer feed
- 流属性/单位：Mass / kg
- 数量规则：分开记录内部回用后实测外弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

###### 捕集纤维粉尘（`captured_fibre_dust`）

捕集纤维粉尘是成网线抽风或过滤系统排出的一股固体废物。按干基或收集状态记录质量和纤维组成，并与残余空气排放分开。

- 选定流：Captured fibre dust
- 流属性/单位：Mass / kg
- 数量规则：成网粉尘治理系统排出的滤箱或容器实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ilo-textile-competency-2006`; `eu-textiles-bat-2022`

##### 基本流

###### 排放到空气的残余 PM10（`pm10_air_web_formation`）

只有在通过源特定测试测量或计算声明排放点的残余排出质量时，才将 PM10 记录为一个基本流。不得用捕集粉尘质量替代排放 PM10。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：匹配生产期实测或源测试得到的 PM10 排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-textiles-bat-2022`

### 过程：机械、热或化学纤网加固（`web_consolidation`）

#### 输入

##### 产品流

###### 转入粘合的未加固纤网（`web_bonding_input`）

路线特定的未加固纤网进入实际针刺、水刺、热粘合或化学粘合操作。其身份和质量必须与成网过程输出匹配。

- 选定流：Unconsolidated nonwoven web
- 流属性/单位：Mass / kg
- 数量规则：按匹配调湿质量口径实测进入加固的纤网质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`gaynor-nonwovens-2022`

###### 丁苯胶乳粘合剂（`styrene_butadiene_latex`）

丁苯胶乳仅在声明的胶乳粘合路线中跨越粘合边界。根据投料和库存记录实际商业产品质量和干固体含量。

- 选定流：Styrene-butadiene latex binder
- 流属性/单位：Mass / kg commercial product
- 数量规则：适用粘合纤网投加的实测胶乳产品质量，并保留干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`gaynor-nonwovens-2022`

###### 双组分粘合纤维（`bicomponent_bonding_fibre`）

采用该技术时，双组分皮芯纤维作为一种热活化粘合纤维投入。与结构纤维分开记录聚合物组合、皮芯比、纤维形态和质量。

- 选定流：Bicomponent sheath-core bonding fibre
- 流属性/单位：Mass / kg
- 数量规则：适用产品批次实测净双组分粘合纤维投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`gaynor-nonwovens-2022`

###### 纤网加固用电力（`bonding_electricity`）

电力驱动所选粘合技术的针刺机、泵、抽吸、轧光机、烘箱、风机和控制装置。粘合用电与成网和整理用电分开记录。

- 选定流：Electricity supplied to the nonwoven bonding line
- 流属性/单位：Energy / kWh
- 数量规则：匹配生产期纤网加固的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-method-2021`

###### 水刺用水（`hydroentanglement_water`）

工艺水在水刺工艺中跨越粘合边界。新鲜取水与过滤回用及后续排放分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：水刺循环系统实测新鲜补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`gaynor-nonwovens-2022`; `eu-textiles-bat-2022`

###### 热粘合或干燥用外购蒸汽（`purchased_steam`）

仅当加固线从前景边界之外接收蒸汽时，外购蒸汽才是一种交付热能载体。与燃料和电力分开记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：按声明压力、冷凝水和焓值口径计量或开票的蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已粘合非织造纤网（`bonded_nonwoven_web`）

已粘合非织造纤网是离开机械、热或化学粘合的加固中间品。测量其质量并保留粘合技术、组成和克重分层。

- 选定流：Bonded nonwoven web
- 流属性/单位：Mass / kg
- 数量规则：转入整理或加工的已粘合纤网实测产出，并按在制品变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`iso-9092-2026`; `gaynor-nonwovens-2022`

##### 废物流

###### 湿法粘合废水（`bonding_wastewater`）

本行表示水刺或水性化学粘合在内部回用之后排出的一股废水。分别记录排放体积、处理状态和实测污染物浓度。

- 选定流：Nonwoven bonding wastewater
- 流属性/单位：Volume / m3
- 数量规则：匹配期间粘合工序实测排放废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`

###### 粘合水处理污泥（`bonding_sludge`）

处理污泥是粘合水处理产生的一股外运固体废物。记录湿质量、干固体、危险状态和处理路线。

- 选定流：Nonwoven bonding wastewater-treatment sludge
- 流属性/单位：Mass / kg wet sludge
- 数量规则：实测外运污泥质量，并保留干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 排放到空气的苯乙烯（`styrene_air`）

苯乙烯是适用丁苯胶乳粘合路线的一种物质特定空气排放。仅根据匹配的测量或经验证的工厂计算纳入。

- 选定流：Styrene, to air
- 流属性/单位：Mass / kg
- 数量规则：匹配胶乳粘合期间实测或经验证计算的苯乙烯排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-textiles-bat-2022`

###### 排放到空气的 1,3-丁二烯（`butadiene_air`）

1,3-丁二烯是适用丁苯胶乳路线的一种物质特定空气排放。不得与苯乙烯或一般挥发性有机物合并。

- 选定流：1,3-Butadiene, to air
- 流属性/单位：Mass / kg
- 数量规则：匹配胶乳粘合期间实测或经验证计算的 1,3-丁二烯排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-textiles-bat-2022`

### 过程：整理、洗涤和干燥（`finishing_drying`）

#### 输入

##### 产品流

###### 进入整理的已粘合非织造布（`finishing_input_nonwoven`）

已粘合非织造布在出售前接受洗涤、整理、涂层、浸渍、干燥或热定型时进入本条件过程。其质量和基材规格必须与粘合输出匹配。

- 选定流：Bonded nonwoven web
- 流属性/单位：Mass / kg
- 数量规则：进入整理线的已粘合纤网实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`ec-jrc-txt-bref-2023`

###### 整理和干燥用电力（`finishing_electricity`）

电力驱动声明整理工序的泵、施加器、干燥机、风机、轧光机和控制装置。按生产线或有文件记录的设备口径记录。

- 选定流：Electricity supplied to the nonwoven finishing line
- 流属性/单位：Energy / kWh
- 数量规则：匹配期间整理和干燥的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

###### 洗涤或水性整理用工艺水（`finishing_process_water`）

当产品接受洗涤或水性整理时，新鲜工艺水跨越边界。新鲜取水与回用水和废水分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：整理线实测新鲜供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`

###### 整理和干燥用外购蒸汽（`finishing_steam`）

从前景边界外接收时，外购蒸汽向整理或干燥线供应热能。按压力和冷凝水口径与其他载能体分开记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：可归属于整理和干燥的计量或开票蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

###### 整理用氢氧化钠（`sodium_hydroxide`）

只有在声明整理配方使用时，氢氧化钠才作为一个化学投入。分别记录商业溶液质量和氢氧化钠有效分数。

- 选定流：Sodium hydroxide solution
- 流属性/单位：Mass / kg commercial solution
- 数量规则：适用整理批次实测投加溶液质量，并保留浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`ec-jrc-txt-bref-2023`

###### 整理用过氧化氢（`hydrogen_peroxide`）

只有在声明整理或漂白配方使用时，过氧化氢溶液才作为一个化学投入。分别记录溶液质量和有效浓度。

- 选定流：Hydrogen peroxide solution
- 流属性/单位：Mass / kg commercial solution
- 数量规则：适用整理批次实测投加溶液质量，并保留浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`ec-jrc-txt-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后非织造中间品（`finished_nonwoven_intermediate`）

整理后非织造布离开条件整理线时，应声明基材、整理、涂层或层压、干增重、含水率和性能状态。在分切和包装前测量。

- 选定流：Finished nonwoven material
- 流属性/单位：Mass / kg
- 数量规则：转入加工的整理后非织造布实测质量，并按在制品变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`ec-jrc-txt-bref-2023`

##### 废物流

###### 非织造布整理废水（`finishing_wastewater`）

本行表示内部回用后离开整理工序的一股废水。记录排放体积、处理状态，并在适用时将每种实测污染物作为独立的物质特定基本流记录。

- 选定流：Nonwoven finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：匹配期间整理工序实测排放废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`

###### 整理水处理污泥（`finishing_sludge`）

整理处理污泥是一股外运废物。记录湿质量、干固体、危险状态和去向；除非物理混合且有记录，不得与粘合污泥合并。

- 选定流：Nonwoven finishing wastewater-treatment sludge
- 流属性/单位：Mass / kg wet sludge
- 数量规则：实测外运污泥质量，并保留干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：分切、卷绕、检验和包装（`slitting_packaging`）

#### 输入

##### 产品流

###### 进入加工的非织造材料（`converting_input_nonwoven`）

进入分切和卷绕的已粘合或整理后非织造布是一种已识别中间品，其组成、路线和质量与前序过程输出匹配。不得合并无关产品分层。

- 选定流：Nonwoven material before slitting and winding
- 流属性/单位：Mass / kg
- 数量规则：按匹配调湿质量口径实测进入加工的非织造布质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`iso-9073-1-2023`

###### 分切和卷绕用电力（`converting_electricity`）

电力驱动分切、卷绕、检验和包装设备。与成网、粘合和整理用电分开记录。

- 选定流：Electricity supplied to the nonwoven converting line
- 流属性/单位：Energy / kWh
- 数量规则：匹配期间分切、卷绕、检验和包装的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-method-2021`

###### 纸板卷芯（`paperboard_roll_core`）

纸板卷芯是纳入可销售卷材但从净参考质量中扣除的一个包装组件。记录等级、尺寸、单位质量和再生含量。

- 选定流：Paperboard roll core
- 流属性/单位：Mass / kg
- 数量规则：实测单位质量乘以使用卷芯数量，并与库存记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 聚乙烯包膜（`polyethylene_wrap_film`）

聚乙烯包膜是保护可销售卷材或片材的一种包装材料。记录薄膜牌号、厚度和质量，不与捆扎带或其他塑料合并。

- 选定流：Polyethylene wrapping film
- 流属性/单位：Mass / kg
- 数量规则：发放给放行产品的实测薄膜质量，并与期初库存、入库和期末库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 瓦楞纸板包装（`corrugated_board_packaging`）

瓦楞纸板是适用片材包装或卷材保护的一个包装组件。其等级、单位质量和再生含量与纸板卷芯分开记录。

- 选定流：Corrugated-board packaging
- 流属性/单位：Mass / kg
- 数量规则：发放给放行产品的实测瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 木托盘（`wooden_pallet`）

木托盘是随产品发运时的一种运输包装组件。其质量、处理方式和重复使用核算与其他包装分开记录。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：实测或核实的单位质量乘以随产品发出的托盘数，仅扣除有记录的同系统返还
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行的 CPC 27922 非织造布（`reference_nonwoven_output`）

放行的可销售非织造布是唯一参考产品。已接受 Tiangong UUID 对公开 Product flow、CPC 27922 和 Mass 精确匹配；净质量不包括任何包装。

- 选定流：Nonwovens `dd37c0b0-8d07-452a-a62a-aaffa8c42b61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测放行毛质量减去实测卷芯和外部包装皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output`
- 来源：`un-cpc-v3-2025`; `iso-9073-1-2023`

##### 废物流

###### 非织造布边料废物（`edge_trim_waste`）

边料是分切时从纤网切除的一股组成特定非织造废物。分别记录边料总量、清洁内部回用量和外部处理残余量。

- 选定流：Nonwoven edge-trim waste
- 流属性/单位：Mass / kg
- 数量规则：分开记录清洁内部回用后实测外弃边料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

###### 废弃聚乙烯包膜（`waste_polyethylene_film`）

本行记录工厂因损坏或未使用包膜而产生的一股聚乙烯薄膜废物，不表示随产品发运的薄膜。

- 选定流：Waste polyethylene wrapping film
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测废薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-method-2021`

###### 废弃瓦楞纸板（`waste_corrugated_board`）

本行记录损坏或未使用包装产生的一股瓦楞纸板废物。与纸板卷芯和混合废物分开。

- 选定流：Waste corrugated board
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测废瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-method-2021`

###### 废弃木托盘（`waste_wooden_pallet`）

本行记录托盘被废弃而非回用或发运时的一股木托盘废物。记录处理方式，未执行分配规则时不得给出回用抵扣。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：送往声明废物处理路线的实测托盘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净非织造布产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-method-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多生产线和多产品操作 | 优先进行过程细分以及路线、生产线或产品特定计量。不得对可避免的共享交换进行分配。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_shared_utilities` | 共享电力、蒸汽、压缩空气、水和处理 | 无法细分时，使用有文件记录的因果驱动因素，例如计量运行时间乘以实测负荷、蒸汽需求、水流量或处理污染物负荷。只有没有更具因果性的驱动因素时才使用产品质量，并披露敏感性。 | `eu-pef-method-2021` |
| `allocation_internal_recycling` | 同一前景系统内回用的清洁纤维、纤网和边料 | 记录产生总量和回用总量，但在净外部清单中只抵消一次内部循环。收集和再处理能耗分配给使用它的过程；不得主张避免产品抵扣。 | `eu-pef-method-2021` |
| `allocation_exported_material` | 销售或外运的不合格非织造布、纤维或聚合物残余 | 只有具备有文件记录的市场和规格时才将外运材料视为共产品。采用 PEF 分配层级并报告方法、驱动因素、负荷份额和敏感性；否则按实际处理作为废物。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_reusable_packaging` | 可重复使用卷芯、托盘或容器 | 按有记录的运输次数或使用循环分配制造和返还负荷。没有库存记录、损失率和寿命终结披露时不得假定重复使用次数。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_records` | `feedstock_web_formation`; `web_consolidation` | 聚合物、纤维、纸浆和粘合纤维投入 | 供应商规格、收货记录、称重单和库存台账 | lot_id, supplier, material_identity, grade, polymer_or_fibre, mass_fraction, virgin_or_recycled_status, moisture, dry_solids, gross_mass, tare_mass, net_mass, receipt_time, process_id | 将每批次与供应商证据匹配，并将称重用量与库存变化核对 | kg and kg/kg | 每次收货和领用；每月或按生产批核对 | 与产出相同的代表期 | 每个纳入工厂、生产线和产品分层 | 仅在库存核对后聚合相同材料和路线分层 | 经校准秤、供应商证书、批次追溯和签字库存核对 |
| `cp_energy_records` | all processes | 电力、压缩空气和外购蒸汽 | 分表、公用工程发票、流量计或设备运行记录 | carrier, meter_id, opening_reading, closing_reading, pressure, enthalpy_basis, equipment_id, runtime, measured_load, process_id, lot_or_period | 优先过程分表；否则采用有文件记录的因果分配 | kWh, MJ or Nm3 | 连续或每批；按匹配期间聚合 | 代表性正常运行期 | 每条纳入生产线和公用工程 | 保留每种载能体和过程；在可计量时扣除非生产使用 | 仪表校准、发票、运行日志、负荷证据和分配工作表 |
| `cp_water_records` | route-dependent wet processes | 新鲜水、循环水和废水 | 进排水表、槽罐记录和实验室分析 | water_source, intake_volume, recirculated_volume, discharge_volume, carryover_or_evaporation, sample_time, substance, concentration, treatment_state, process_id | 建立过程水量平衡并将样品与排水量匹配 | m3, kg and mg/L as applicable | 连续计量；按许可和风险采样 | 与产出相同的湿法路线期间 | 所有湿法回路、处理单元和排放点 | 分开新鲜水、内部回用和排放；分别计算每种污染物负荷 | 仪表校准、采样计划、监管链、认可结果和水量平衡核对 |
| `cp_chemical_records` | `web_consolidation`; `finishing_drying` | 胶乳和单项整理化学品 | 配方、批次投料单、领料、SDS 和库存台账 | product_name, supplier, function, composition, active_fraction, dose, opening_stock, receipts, closing_stock, lot_id, process_id | 分别记录每种商业产品，并将投料与库存变化核对 | kg commercial product and kg active substance | 每批或每次投料；每月核对 | 与产出相同的路线和期间 | 每条使用该化学品的生产线 | 不得聚合不同配方；分别归一化商业品和有效物质量 | 经校准投料记录、签字配方、SDS 或组成证书和库存核对 |
| `cp_mass_balance` | all processes | 原料、中间品、产品、内部回用和移除材料 | 料斗、棉包、卷材或平台秤及在制品台账 | process_id, lot_id, input_mass, output_mass, internal_return_mass, exported_waste_mass, opening_wip, closing_wip, moisture_basis | 在一种调湿口径上建立过程和生产线物料平衡 | kg | 可行时每批；否则每班或每生产批 | 匹配投入产出期间 | 每条纳入路线和生产线 | 保留内部循环总量；核对后仅使用净外部值 | 秤校准、签字平衡以及每项无法解释差异的原因 |
| `cp_air_emissions` | emission-relevant processes | 每条记录一个具名空气物质 | 烟道测试、连续监测或物质特定计算 | emission_point, substance, compartment, concentration, gas_flow, operating_time, abatement_state, production_mass, method, detection_limit | 匹配同一时段的浓度和流量，或使用经验证的工厂特定因子 | kg substance, mg/Nm3 and Nm3 | 按许可和工艺风险；发生实质变化后重复 | 代表性运行状态 | 每个相关排放点 | 分别计算每种物质；不得合并 VOC、颗粒物或环境区室 | 实验室报告、仪器校准、采样计划和运行日志 |
| `cp_waste_records` | all processes | 每条记录一股已识别废物流 | 容器秤、废物转移联单和处理回执 | waste_identity, composition, process_id, gross_mass, tare_mass, moisture_or_dry_solids, internal_return, destination, treatment, date | 称量每股物流并链接到产生过程和去向 | kg wet and kg dry where applicable | 每个容器或每次装运 | 与产出相同的期间 | 每个纳入过程 | 保持废物身份、含水率和去向分层 | 称重记录、联单、处理回执和组成证据 |
| `cp_packaging_records` | `slitting_packaging` | 单项包装组件和包装废物 | 物料清单、单位质量测试和库存台账 | component, material, grade, recycled_content, unit_mass, units_used, stock_change, shipped_units, damaged_units, waste_mass | 按材料核对包装领用、发运和废弃 | kg | 每个发运批；每月核对 | 与参考产出相同的期间 | 每种包装形式 | 保留每种材料和回用状态 | 包装规格、单位质量检查、库存记录和废物回执 |
| `cp_reference_output` | `slitting_packaging` | 净参考产品和限定信息 | 经校准秤、卷材图、放行记录和实验室测试 | lot_id, gross_roll_mass, core_mass, external_packaging_tare, net_nonwoven_mass, composition, recycled_content, formation_route, bonding_route, finish, basis_weight, width, thickness, tensile_results, moisture_basis, geography, release_time | 计算净产品质量并在放行前核实全部必需限定信息 | kg and declared test units | 每个放行批次 | 与全部归一化投入产出相同的期间 | 每种代表产品和生产线 | 保持产品分层，直至完成代表性审查 | 秤校准、放行证书、ISO 方法测试记录和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 放行产品批次 | net_nonwoven_mass = gross_roll_or_pack_mass - roll_core_mass - external_packaging_tare | gross mass; core mass; packaging tare | kg net nonwoven | `iso-9073-1-2023`; `eu-pef-method-2021` |
| `calc_normalize_1000kg` | 每项前景交换 | normalized_amount = matched_period_or_lot_amount / matched_net_nonwoven_mass * 1000 kg | exchange amount; matched net product mass | amount per 1,000 kg net nonwoven | `eu-pef-method-2021` |
| `calc_basis_weight` | 参考产品 | basis_weight = conditioned_specimen_mass / specimen_area，并采用 ISO 9073-1 取样和精度 | specimen mass; specimen area | g/m2 | `iso-9073-1-2023` |
| `calc_conditioned_mass` | 不同含水状态间换算的材料 | target_mass = measured_mass * (1 - measured_initial_moisture_fraction) / (1 - declared_target_moisture_fraction)；使用一致的湿基或干基分数 | measured mass; initial moisture; target moisture | kg at declared conditioning state | `eu-pef-method-2021` |
| `calc_process_mass_balance` | 每个过程和匹配期间 | unexplained_difference = inputs + opening_wip - outputs - exported_waste - closing_wip；内部回用在同一系统内抵消 | inputs; outputs; wastes; opening and closing WIP; internal returns | kg unexplained difference | `eu-textiles-bat-2022` |
| `calc_water_pollutant_load` | 直接废水排放 | substance_mass = matched_concentration * matched_discharge_volume，并明确单位换算 | substance concentration; discharge volume; sample period | kg named substance | `eu-textiles-bat-2022` |
| `calc_air_mass_load` | 有组织空气排放 | substance_mass = concentration * gas_flow_on_same_reference_basis * operating_time，并明确换算 | concentration; gas flow; operating time; reference conditions | kg named substance | `eu-textiles-bat-2022` |
| `calc_shared_utility` | 无分表的共享公用工程 | 按有文件记录的因果驱动因素分配；若无可用驱动因素，披露缺口并测试质量分配敏感性，不得宣称实测场址特定性 | shared amount; causal driver; product strata | allocated kWh, MJ, Nm3 or m3 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 投入、中间品和产出 | 通过原料批次、路线、粘合、整理、加工和测试追溯每个放行批次；保留精确 CPC 27922 产品身份。 | 供应商记录、路线流转单、批次记录、卷材图和放行证书；`un-cpc-v3-2025` |
| `dq_route_representativeness` | 聚合数据集 | 未经有文件记录的代表性测试，不得聚合实质不同的组成、再生含量、成网、粘合、整理、克重或生产线分层。 | 分解清单和聚合审查；`eu-pef-method-2021`; `gaynor-nonwovens-2022` |
| `dq_temporal_match` | 全部前景数据 | 将材料、能源、水、废物、排放和产出匹配到同一代表性正常运行期；识别开机、停机、维护和异常生产。 | 带日期台账、仪表期间和运行日志；`eu-pef-method-2021` |
| `dq_measurement_quality` | 质量、公用工程、测试和排放 | 保留仪器身份、校准或核查、方法、取样位置、检出限和单位换算。说明每个值是实测还是计算。 | 校准证书、实验室报告、仪表导出和计算工作簿 |
| `dq_completeness` | 纳入的前景过程 | 包括每项已知独立材料、公用工程、产品、废物和直接排放交换。Tiangong UUID 缺失不构成省略理由。 | 投入产出登记、物料和水量平衡、废物联单和排放点登记；`eu-textiles-bat-2022` |
| `dq_chemical_specificity` | 粘合剂和整理化学品 | 每种商业配方作为一个产品投入，每种报告排放物质作为一个基本流；保留有效分数和 SDS 信息。 | 配方、SDS、供应商组成、投料和物质特定监测；`ec-jrc-txt-bref-2023` |
| `dq_product_testing` | 参考产品 | 使用有代表性的调湿试样，并报告克重、宽度、厚度以及适用拉伸或终端性能方法，并与批次链接。 | ISO 9073 测试记录和放行规格；`iso-9073-1-2023`; `iso-9073-2-1995`; `iso-9073-3-2023` |
| `dq_no_ai_ranges` | 定量清单指南 | 本候选未定义任何 AI 编写数量范围。数值应来自前景记录，只有经审查的路线特定证据或前景分布支持时方可引入范围。 | 前景采集记录或经审查范围来源及批准记录 |

## 9. 校验规则

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求 Product flow UUID dd37c0b0-8d07-452a-a62a-aaffa8c42b61、Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 和 kg。 | `un-cpc-v3-2025` |
| `validation_scope` | 产品类别 | 确认产出是归入 CPC 27922 的非织造片材、纤网或絮片。拒绝毡、絮料、纸、机织物、针织物、簇绒物和下游加工制品。 | `un-cpc-v3-2025`; `iso-9092-2026` |
| `validation_required_qualifiers` | 产品元数据 | 缺少组成、再生含量、成网路线、粘合路线、多层结构、克重、宽度、厚度、整理、含水口径、生产线、地理或报告期时判为不完整。 | `iso-9073-1-2023`; `eu-pef-method-2021` |
| `validation_process_inclusion` | 过程图 | 要求 `feedstock_web_formation`、`web_consolidation` 和 `slitting_packaging`；只要发生声明的洗涤、整理、涂层、浸渍、干燥或热定型，就纳入 `finishing_drying`。 | `gaynor-nonwovens-2022`; `ec-jrc-txt-bref-2023` |
| `validation_atomic_exchanges` | 清单行 | 每行必须只有一个物理或化学交换。拒绝合并载能体、复数材料选择器、成组包装、成组废物和一般排放物集合。 | `eu-pef-method-2021` |
| `validation_mass_balance` | 过程和生产线清单 | 要求一种含水口径、匹配在制品、内部回用总量披露、净包装扣除，并对每项物料平衡差异提供签字说明。 | `eu-textiles-bat-2022`; `eu-pef-method-2021` |
| `validation_wet_routes` | 湿法、水刺和水性整理路线 | 路线适用时要求新鲜水、循环、泵送和干燥能耗、每种化学品、废水、处理污泥和每项报告直接排放。 | `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022` |
| `validation_air_emissions` | 成网、粘合和整理排放点 | 要求捕集废物与残余排放分开；用测量或经验证计算证据分别记录每种排放物质和环境区室。 | `eu-textiles-bat-2022` |
| `validation_allocation` | 共享和多产出操作 | 验证已优先尝试细分，每项剩余分配均采用有文件记录的因果驱动因素、计算和所需敏感性。拒绝未披露的避免负荷抵扣。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `validation_product_tests` | 放行非织造布 | 验证克重采用 ISO 9073-1 或有文件记录的等效方法，厚度和拉伸声明说明方法、调湿和方向。 | `iso-9073-1-2023`; `iso-9073-2-1995`; `iso-9073-3-2023` |
| `validation_temporal_completeness` | 前景数据包 | 验证投入、产出、公用工程、水、废物和排放记录覆盖同一代表性运行窗口，并披露异常期间和缺失测量。 | `eu-pef-method-2021`; `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 路线、产品、生产线和工厂特定的 CPC 27922 非织造布工厂门口生产前景数据集 |
| downstream_use | 仅在方法学审查、清单 UUID 补全和证据审查后，方可成为下游制品的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 对已披露的组成、再生含量口径、成网路线、粘合路线、整理、克重等级、多层结构、地理、生产线和期间建模 |
| excluded_use | 毡、絮料、纸、机织物或针织物的一般代理；纤维或聚合物生产；下游加工制品；未披露的路线或组成替代；使用或寿命终结 |
| required_metadata | 规范 PCR id；CPC 坐标；参考 UUID；组成；再生含量；原料来源；成网和粘合路线；整理；多层结构；克重；宽度；厚度；性能测试；含水口径；工厂、生产线、地理和期间；上游数据集；分配；审查状态 |
| required_quality_disclosure | 前景和次级数据占比；校准和方法状态；时间、地理和技术覆盖；物料和水量核对；内部回用；分配；缺失 UUID；数据缺口；异常期间；不确定性和来源版本 |
| update_trigger | 产品分类、参考流身份、材料或再生含量、路线、粘合剂或整理化学品、设备、生产线、末端治理、水回路、包装、分配、上游数据、法律要求、BAT 结论或测试标准发生变化；或缺失 UUID 和经审查定量证据得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | 官方指南（`official_guidance`） | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, code 27922, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-13 | 官方类别身份以及与毡、絮料和其他纺织制品的区分 |
| `iso-9092-2026` | 标准（`standard`） | ISO 9092:2026, Nonwovens - Vocabulary, https://www.iso.org/standard/90537.html, retrieved 2026-08-13 | 现行非织造术语及与其他片材的区分 |
| `iso-9073-1-2023` | 标准（`standard`） | ISO 9073-1:2023, Nonwovens - Test methods - Part 1: Determination of mass per unit area, https://www.iso.org/standard/83590.html, retrieved 2026-08-13 | 克重测量、取样和参考产品质量证据 |
| `iso-9073-2-1995` | 标准（`standard`） | ISO 9073-2:1995, Textiles - Test methods for nonwovens - Part 2: Determination of thickness, https://www.iso.org/standard/16651.html, retrieved 2026-08-13 | 厚度限定信息和测试方法披露 |
| `iso-9073-3-2023` | 标准（`standard`） | ISO 9073-3:2023, Nonwovens - Test methods - Part 3: Determination of tensile strength and elongation at break using the strip method, https://www.iso.org/standard/83591.html, retrieved 2026-08-13 | 机器方向和横向拉伸质量证据 |
| `gaynor-nonwovens-2022` | 文献（`literature`） | Gaynor et al., Lignin use in nonwovens: A review, BioResources 17(2), 3445-3488, DOI 10.15376/biores.17.2.Gaynor, https://bioresources.cnr.ncsu.edu/resources/lignin-use-in-nonwovens-a-review/, retrieved 2026-08-13 | 同行评审正文支持的干法、湿法、纺粘、熔喷和粘合路线过程分解 |
| `ilo-textile-competency-2006` | 官方指南（`official_guidance`） | International Labour Office, Regional Model Competency Standards: Manufacturing Industry, carding unit H14, https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40asia/%40ro-bangkok/documents/publication/wcm_041777.pdf, retrieved 2026-08-13 | 原料接收字段、梳理控制、空气过滤、纤网检查和生产记录 |
| `ec-jrc-txt-bref-2023` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874, retrieved 2026-08-13 | 纤维准备、湿法加工、整理、化学品、水、能源、排放和过程监测 |
| `eu-textiles-bat-2022` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj, retrieved 2026-08-13 | 适用操作的投入产出清单、监测、水、能源、化学品、废物、废水和空气排放管理 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-13 | 功能单位归一化、企业特定数据、数据质量、系统边界和分配层级 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, with Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html, retrieved 2026-08-13 | LCI 完整性、透明度和分配层级 |
| `epd-pcr-nonwovens-2011-06` | 标准（`standard`） | International EPD System PCR 2011:06 version 4.0.0, Nonwovens for clothing, protective clothing and upholstery, https://www.environdec.com/pcr-library/pcr2011-06, retrieved 2026-08-13 | 官方 PCR 证据：终端用途非织造布子类别需要类别特定范围和下游使用披露 |
