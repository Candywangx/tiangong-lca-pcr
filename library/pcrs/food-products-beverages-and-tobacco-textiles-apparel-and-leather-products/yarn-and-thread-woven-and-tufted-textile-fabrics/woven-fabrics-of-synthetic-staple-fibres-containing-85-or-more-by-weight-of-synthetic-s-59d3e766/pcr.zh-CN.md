---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-synthetic-staple-fibres-containing-85-or-more-by-weight-of-synthetic-s-59d3e766
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含合成短纤维重量达85%或以上的机织织物

## 1. 范围与适用性

本 PCR 适用于产品质量中合成短纤维含量至少为 85% 的机织织物。它支持从外购纱线开始，经纱线准备、织造、检验和成卷形成的织物前景数据包；只有在报告设施边界内实际实施时，才纳入湿法前处理、染色、印花、涂层、层压或后整理。

本 PCR 覆盖在工厂大门交付的坯布或成品机织物，前提是声明纤维成分、织物组织、整理状态、幅宽和单位面积质量。它不包括纱线生产、人造纤维或聚合物生产、针织物或簇绒织物、以合成纤维长丝为主的织物、服装制造、分销、使用和寿命终止。外购纱线、化学品、能源、水和包装的上游生产应通过上游数据集链接表示，不得在前景过程中重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-synthetic-staple-fibres-containing-85-or-more-by-weight-of-synthetic-s-59d3e766 |
| classification_refs | CPC 3.0：26740（exact） |
| covered_products | 合成短纤维质量占比至少 85% 的机织织物，包括坯布、染色、印花、涂层、层压或其他整理品种，但须声明其处理路线 |
| excluded_products | 合成纤维长丝机织物；针织物和簇绒织物；合成短纤维质量占比低于 85% 的织物；纱线、聚合物、纤维、服装及制成品生产 |
| representative_product | 主要由涤纶、锦纶、腈纶或其他合成短纤维纱线制成的市场平均机织物卷 |
| production_route | 外购纱线接收和调湿；整经和可选上浆；织造；检验和成卷；可选湿法前处理、着色和后整理；工厂大门包装 |
| market_state | 制造厂大门处的坯布或成品织物卷；声明干质量、整理状态和织物组织 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以所声明坯布或成品状态供应、合成短纤维质量占比至少 85% 的机织织物 |
| How much | 工厂大门处 1 kg 净干质量合格织物 |
| How well | 满足声明的纤维成分、织物组织、幅宽、单位面积质量、整理状态和适用产品规范 |
| How long or cycle | 在工厂大门交付的一个生产批次；该中间产品不指定使用寿命 |
| reference_flow_link | 按不含包装的净干质量归一化的 1 kg 声明织物产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Woven fabrics of synthetic staple fibres, containing 85% or more by weight of synthetic staple fibres `b72e06e9-57a4-4e56-8c34-10fa61220193` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合成短纤维质量分数及聚合物类型；其他纤维组分；坯布或成品状态；织物组织；幅宽；单位面积质量；染色/印花/涂层/层压/整理路线；如有则声明再生含量；生产地理位置；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考织物输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有清单结果归一化到 1 kg 净干合格织物；排除包装，并单独报告实测水分基准及干质量换算。 |
| `fibre_composition_mass_fraction` | 产品类别资格 | 质量分数 | % by mass | 通过供应商证明、物料清单或实验室结果确认合成短纤维至少占声明织物质量的 85%。 |
| `fabric_area_conversion` | 面积计量的生产记录 | 质量和面积 | kg and m2 | 使用批次特定的实测单位面积质量换算面积记录；不得在无披露的情况下使用通用换算因子。 |
| `process_normalization` | 所有过程投入和产出 | 质量或计量活动量 | kg, kWh, MJ, m3, or pollutant-specific mass | 使用相同报告期和生产分母进行归一化，并记录采用的仪表、批次或生产线分配。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `foreground_gate_boundary` | foreground_system_boundary | 纳入从外购纱线接收到工厂大门声明织物之间的全部场内纱线准备、整经、上浆、织造、检验、成卷和包装活动；场内实施时还须纳入湿法和热处理。 | `eu-textiles-bat-2022`; `eu-textiles-bref-2023` |
| `purchased_input_linkage` | upstream_product_inputs | 将外购纱线、化学品、能源载体、水和包装记录为产品投入，并为各物料投入链接地理和技术上具有代表性的上游数据集。 | `eu-pef-recommendation-2021` |
| `conditional_route_disclosure` | conditional_processes | 声明上浆、退浆、洗涤、染色、印花、涂层、层压、热定型和整理是在场内、场外实施还是未实施；不得静默遗漏达到声明市场状态所需的活动。 | `eu-textiles-bat-2022` |
| `direct_release_boundary` | elementary_and_waste_flows | 将场内空气排放和直接水排放记录为基本流输出；将送至外部处理的废水及送至废物管理的固体残余物记录为废物流输出，并声明去向和处理路线。 | `eu-textiles-bat-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购合成短纤维纱线及其他组分纱线在报告设施大门接收，并声明成分、质量、水分基准、供应商和来源。 |
| starting_condition_role | 外购纱线是上游产品投入，也是前景织物制造的起始材料。 |
| product_classification_scope | 合成短纤维质量占比至少 85% 的机织织物；CPC 3.0 代码 26740 仅为分类语境，不是 canonical PCR identity。 |
| recursive_input_rule | 若投入使用同类别机织物，须将其保留为带独立上游数据集的显式产品投入；不得在该前景数据包中递归重建其制造。 |
| upstream_dataset_requirement | 对外购纱线、其他纤维或纱线、上浆剂、染料及助剂、燃料、电力、水、包装和外部废物处理使用有代表性的上游数据集；披露地理、技术和时间匹配度。 |
| disclosure | 声明设施、报告期、织机技术、织物组织、成分、整理状态、所纳入的场内处理、场外处理、分配、再生含量和数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | 纱线接收、调湿、整经和上浆 | required | 未施加浆料时，上浆投入为条件项 | 为织造准备外购经纬纱 | kg 准备后纱线 |
| `weaving` | 织造 | required | 对合格机织物始终纳入 | 将经纱和纬纱交织为坯布 | kg 坯布 |
| `wet_finishing` | 湿法前处理、着色和后整理 | conditional | 纳入为达到声明产品状态而在场内实施的各项操作 | 将坯布转化为处理后或成品织物 | kg 处理后织物 |
| `inspection_packaging` | 检验、修补、成卷和包装 | required | 产品随附包装时适用包装投入 | 生产工厂大门处合格织物卷 | kg 合格织物 |

### 过程：纱线接收、调湿、整经和上浆（`yarn_preparation`）

#### 输入

##### 产品流

###### 外购涤纶短纤维纱线（`purchased_synthetic_yarn`）

外购涤纶短纤维纱线是代表性合成纱线投入。使用锦纶、腈纶、聚丙烯或其他合成短纤维纱线的设施，必须为每个实际纱线标识增加单独的原子产品流行。

- 选定流：Polyester staple-fibre yarn
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的实测接收干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 外购棉纱（`other_component_yarn`）

仅在棉纱作为非合成组分使用时记录外购棉纱。设施所用每种其他组分纱线均须表示为独立原子行，成品仍须满足 85% 成分阈值。

- 选定流：Cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的实测接收干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 聚乙烯醇上浆剂（`sizing_chemicals`）

使用聚乙烯醇作为经纱浆料时，按商品等级和活性成分记录。所用淀粉、聚丙烯酸酯、润滑剂、抗静电剂或其他准备化学品，均须新增为独立原子产品流行。

- 选定流：Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass / kg
- 数量规则：批次领用量减去有记录的退回量或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- 来源：`eu-textiles-bat-2022`

###### 准备设备用电（`preparation_electricity`）

纳入调湿、络筒、整经、上浆、通风及分配的辅助设备用电。

- 选定流：Electricity, at facility
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电或有记录的生产线级分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后的上浆涤纶经纱（`prepared_yarn`）

准备后的上浆涤纶经纱是转移至织造的内部经纱中间产品。若单独跟踪准备后的纬纱，则须使用不同的数据集行表示。

- 选定流：Prepared sized polyester warp yarn
- 流属性/单位：Mass / kg
- 数量规则：投入纱线干质量加保留浆料减去记录的纱线和浆料损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 准备过程中产生的涤纶纱头（`preparation_waste`）

记录络筒、整经或上浆期间移出的涤纶纱头。清扫物、不可用纱筒和浆料残余物属于不同废物标识，不得并入本行。

- 选定流：Polyester yarn ends from preparation
- 流属性/单位：Mass / kg
- 数量规则：从准备过程移出的称量废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery`

##### 基本流

### 过程：织造（`weaving`）

#### 输入

##### 产品流

###### 准备后的上浆涤纶经纱投入（`weaving_yarn_input`）

记录转移至各织造批次的准备后上浆涤纶经纱。每种不同纬纱标识均须在所生成数据包中记录为独立原子产品流行。

- 选定流：Prepared sized polyester warp yarn
- 流属性/单位：Mass / kg
- 数量规则：向织造领用的实测或经库存平衡核对的干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 织机和织造辅助用电（`weaving_electricity`）

纳入织机驱动、喷气织机空气压缩机、调湿、通风和可直接归属的辅助设备。

- 选定流：Electricity, at facility
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或有记录的设备功率与运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`
- 来源：`eu-textiles-bat-2022`

###### 喷气织机压缩空气（`weaving_compressed_air`）

使用喷气织机时纳入供给织机的压缩空气；仅在不存在压缩空气织机或其他直接织造需求时方可省略本行。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：分表计量压缩空气体积，或将有记录的压缩机供气量分配至织造批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

###### 织造过程排放的 PM2.5（`weaving_dust_air`）

当经治理后的实测 PM2.5 跨越环境边界时予以记录。其他实测粒径区间须使用独立基本流行；不得与作为废物报告的捕集粉尘重复。

- 选定流：Particulate matter, less than 2.5 µm, to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测质量流量按运行时间积分，或有记录的场址排放计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_monitoring`
- 来源：`eu-textiles-bat-2022`

#### 输出

##### 产品流

###### 机织坯布（`greige_fabric`）

坯布是可选湿法处理或最终检验前的机织中间产品。

- 选定流：Greige woven fabric of synthetic staple fibres
- 流属性/单位：Mass / kg
- 数量规则：实测生产的合格及不合格坯布净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 涤纶机织物布边废物（`weaving_textile_waste`）

记录织造或切边期间移出的涤纶机织物布边废物。断纱、开机废料和其他纤维成分属于独立废物流行。

- 选定流：Polyester woven-fabric selvedge waste
- 流属性/单位：Mass / kg
- 数量规则：从织造和切边移出的称量废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：湿法前处理、着色和后整理（`wet_finishing`）

#### 输入

##### 产品流

###### 处理用坯布（`wet_process_fabric_input`）

仅当场内实施洗涤、退浆、染色、印花、涂层、层压、热定型或整理时纳入该投入。

- 选定流：Greige woven fabric of synthetic staple fibres
- 流属性/单位：Mass / kg
- 数量规则：投入处理线的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 工艺水（`wet_process_water`）

记录供给洗涤、退浆、染色、漂洗、整理和设备清洁的水，并扣除按同一过程分母单独计量、返回该过程的再使用水。

- 选定流：Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位：Mass / kg
- 数量规则：计量水体积按实测或声明的水密度换算，并减去单独计量的过程再使用或再循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每吨处理纺织材料，并换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-textiles-bat-2022`
- 数量范围：合成材料洗涤年度平均用水强度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：20
  - 单位：m3
  - 基准：每吨洗涤合成材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`
- 数量范围：织物间歇染色年度平均用水强度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10
  - 上限：150
  - 单位：m3
  - 基准：每吨间歇染色织物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`
- 数量范围：连续染色年度平均用水强度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：16
  - 单位：m3
  - 基准：每吨连续染色纺织材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`

###### 氢氧化钠（`wet_process_chemicals`）

按产品浓度和活性成分记录用于精练、pH 调节或其他已声明湿法处理步骤的氢氧化钠。

- 选定流：Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：领用量减去有记录的退回、回收或未用余量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- 来源：`eu-textiles-bat-2022`

###### 50% 过氧化氢水溶液（`hydrogen_peroxide_50`）

使用 50% 过氧化氢溶液进行漂白或氧化处理时予以记录；其他供货浓度属于不同产品流标识。

- 选定流：Hydrogen peroxide solution, 50% in water `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- 流属性/单位：Mass / kg
- 数量规则：领用产品质量减去有记录的退回量或未用余量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- 来源：`eu-textiles-bat-2022`

###### 乙酸（`acetic_acid`）

记录用于染浴 pH 控制、中和或已声明整理配方的乙酸；前景记录须能区分已声明浓度的供货溶液。

- 选定流：Acetic acid `e2450fd4-acdc-4ab3-b8e3-269f8882a44e`
- 流属性/单位：Mass / kg
- 数量规则：领用产品质量减去有记录的退回量或未用余量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- 来源：`eu-textiles-bat-2022`

###### C.I. 分散蓝 56 染料（`disperse_blue_56`）

仅在供应商标识或染料索引声明确认其为 C.I. 分散蓝 56 时记录本染料。其他每种染料、载体、表面活性剂、盐、碱、还原剂、涂层剂、黏结剂或整理剂均须使用独立原子产品流行。

- 选定流：C.I. Disperse Blue 56
- 流属性/单位：Mass / kg
- 数量规则：领用产品质量减去有记录的退回量或未用余量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- 来源：`eu-textiles-bat-2022`

###### 湿法和整理操作用外购蒸汽（`wet_process_thermal_energy`）

纳入干燥、固化、热固定或热定型使用的外购蒸汽。记录蒸汽质量和状态，并根据有记录的压力、温度、凝结水回流和焓计算有用能量。任何直接燃烧燃料或其他外购热量均须使用独立原子行。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：计量外购蒸汽质量，并根据有记录的蒸汽及凝结水状态另行计算有用能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每吨热处理纺织材料，并换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`
- 来源：`eu-textiles-bat-2022`
- 数量范围：热处理年度平均比能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：4.4
  - 单位：MWh
  - 基准：每吨热处理纺织材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后或成品织物（`treated_fabric`）

记录转移至检验的干质量，并声明确定输出状态的每项处理。

- 选定流：Treated or finished woven fabric of synthetic staple fibres
- 流属性/单位：Mass / kg
- 数量规则：按处理批次实测净干输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 送至处理的废水（`wet_process_wastewater`）

记录离开前景设施、送往处理的废水流量、处理去向和相关污染物负荷。

- 选定流：Wastewater, textile wet processing, to water `a60031a7-ea29-49ef-b578-90de910fcf8e`
- 流属性/单位：Mass / kg
- 数量规则：报告期内计量废水体积按实测或声明密度换算，并开展污染物表征
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 排放到水体的化学需氧量（`direct_water_emissions`）

废水直接排入环境时，报告场内处理后的化学需氧量；不得与送至外部处理的废水所含负荷重复。其他每种相关污染物均须使用独立基本流行。

- 选定流：Chemical oxygen demand, to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- 流属性/单位：Mass / kg
- 数量规则：排放体积乘以代表性实测浓度，并对报告期积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_monitoring`
- 来源：`eu-textiles-bat-2022`

###### 热处理产生的化石二氧化碳（`thermal_air_emissions`）

场内燃烧化石燃料时，报告相关热处理或燃烧出口释放的化石二氧化碳。一氧化碳、氮氧化物、颗粒物粒径区间、挥发性有机物和其他监测污染物均须使用独立基本流行。

- 选定流：Carbon dioxide, fossil, to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测质量流量按运行时间积分，或有记录的场址排放计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_monitoring`
- 来源：`eu-textiles-bat-2022`

### 过程：检验、修补、成卷和包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 最终检验用坯布（`inspection_fabric_input`）

场内未实施湿法处理时记录机织坯布。不得用本行记录处理后或成品织物投入。

- 选定流：Greige woven fabric of synthetic staple fibres
- 流属性/单位：Mass / kg
- 数量规则：转移至最终检验的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 最终检验用处理后织物（`inspection_treated_fabric_input`）

记录从场内湿法整理过程转移的处理后机织物。产品保持坯布状态时省略本行。

- 选定流：Treated woven fabric of synthetic staple fibres
- 流属性/单位：Mass / kg
- 数量规则：从湿法整理转移至最终检验的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 瓦楞纸板包装（`packaging_materials`）

记录随织物产品供应的瓦楞纸板芯管、套筒或箱体。其他每个包装组件均须使用独立产品流行。

- 选定流：Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：分配给已发运合格织物的领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚乙烯包裹膜（`polyethylene_packaging_film`）

成品卷随产品供应聚乙烯包裹膜时予以记录。

- 选定流：Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：分配给已发运合格织物的聚乙烯膜领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚丙烯捆扎带（`polypropylene_strapping`）

记录用于固定织物卷或托盘的聚丙烯捆扎带。聚丙烯绳和扎带属于不同产品标识，不得替代。

- 选定流：Polypropylene strapping
- 流属性/单位：Mass / kg
- 数量规则：分配给已发运合格织物的聚丙烯捆扎带领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 木托盘（`wooden_pallet`）

记录随装运供应的木托盘；须声明可重复使用托盘的所有权和返还安排。

- 选定流：Wooden pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：按声明的重复使用约定将托盘质量分配至已发运合格织物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 检验和成卷用电（`inspection_electricity`）

纳入验布机、修补、成卷、裁切、局部抽风和分配的辅助用电。

- 选定流：Electricity, at facility
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或有记录的设备功率与运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门处合格机织物（`reference_fabric_output`）

这是参考产品流。净干质量不含包装，并随附所有必需限定信息。

- 选定流：Woven fabrics of synthetic staple fibres, containing 85% or more by weight of synthetic staple fibres `b72e06e9-57a4-4e56-8c34-10fa61220193`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净干合格织物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）

##### 废物流

###### 等外合成短纤维机织物（`final_textile_waste`）

记录被拒收的等外合成短纤维机织物。检验裁片和边料属于不同废物标识，产生时须新增为独立原子行。

- 选定流：Off-grade woven synthetic staple-fibre fabric
- 流属性/单位：Mass / kg
- 数量规则：检验、裁切和成卷过程中移出的称量废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | independently_meterable_lines_and_batches | 首先细分过程并采用生产线、机器、批次或产品特定的测量，从而在可行时避免分配共享负荷。 | `eu-pef-recommendation-2021` |
| `shared_utility_causal_allocation` | shared_energy_water_air_and_treatment | 使用有记录的因果驱动因素分配共享公用工程和处理负荷，例如计量消耗、机器运行时间与额定负荷、压缩空气需求，或废水体积及污染物负荷。 | `eu-textiles-bat-2022`; `eu-pef-recommendation-2021` |
| `mass_allocation_fallback` | inseparable_fabric_outputs | 若无法进行因果细分且共同生产多个织物等级，则按净干输出质量分配剩余负荷，并披露物理质量为何是适当的备用基准；不得向立即返回同一过程的内部废料分配负荷。 | `eu-pef-recommendation-2021` |
| `recovered_material_disclosure` | exported_scrap_recovered_size_and_heat | 分别报告回收纱线、织物废料、浆料、水、溶剂或热量，并披露选用的下游再循环或替代方法；没有下游建模规则时不得主张避免负荷。 | `eu-textiles-bat-2022`; `eu-pef-recommendation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `yarn_preparation`; `weaving`; `wet_finishing`; `inspection_packaging` | 物料投入、中间产品、合格输出 | 称重单、生产订单、库存移动、质量记录 | lot_id; material_id; fibre composition; wet_mass; moisture; dry_mass; input/output/rework status; timestamp | 经校准秤具和批次级库存平衡核对 | kg 干质量 | 每批次，按月汇总 | 至少连续 12 个有代表性的月份，或完整的较短生产期 | 所有纳入的生产线和设施 | 按过程和批次汇总干质量投入与产出；核对库存变化、返工和废物；归一化至合格输出 | 秤具校准、供应商成分证据、水分方法和签署的平衡核对 |
| `cp_chemical_use` | `yarn_preparation`; `wet_finishing` | 浆料、染料、助剂和整理剂 | 批次配方、领退料记录、供应商规范 | chemical_id; active_content; issued_mass; returned_mass; recovered_mass; batch_id; hazard classification | 批次级领退料平衡核对 | kg 产品和 kg 活性物质 | 每批次 | 与生产数据相同期间 | 所有纳入的准备和湿法处理线 | 净使用量等于领用量减退回量和回收量；归一化至处理后输出 | 配方批准、库存核对、供应商安全和技术资料 |
| `cp_energy_use` | all foreground processes | 电力、燃料、蒸汽和有用热 | 仪表、账单、燃料日志、运行记录 | meter_id; start/end reading; energy carrier; fuel quantity; heating value; recovered_heat; machine_hours; allocation_driver | 优先分表计量；否则采用有记录的工程分配 | kWh, MJ, or MWh | 连续或每账单期；按月汇总 | 至少连续 12 个有代表性的月份，或完整生产期 | 设施和所纳入过程线 | 扣除返回同一过程的有记录回收能量；按声明的因果驱动因素分配共享消耗 | 仪表校准、账单核对和分配工作表 |
| `cp_water_and_wastewater` | `wet_finishing` | 工艺水和废水 | 流量计、批次日志、水量平衡、排放记录 | inlet_volume; reused_volume; recycled_volume; discharge_volume; process; batch_id; sampling_period | 按过程计量水量平衡；在相关点表征废水 | m3 和污染物特定质量 | 连续或每批次；按月汇总 | 至少连续 12 个有代表性的月份，或完整生产期 | 所有纳入的湿法处理和处理单元 | 净工艺水等于进水减去单独计量的再使用/再循环水；核对排放、蒸发、产品带水和库存变化 | 仪表校准、水量平衡闭合、采样及实验室报告 |
| `cp_waste_and_recovery` | all foreground processes | 固体和液体残余物、回收材料 | 地磅单、容器记录、联单、回收商收据 | waste_id; mass; moisture; origin_process; hazardous_status; destination; treatment; recovered_quantity | 按废物流和去向称量 | kg 干质量（相关时） | 每次装运；按月汇总 | 与生产数据相同期间 | 整个前景设施 | 按废物类型和路线汇总；避免重复计算内部回用 | 经校准秤具、联单和接收设施证明 |
| `cp_emissions_monitoring` | `weaving`; `wet_finishing` | 直接空气和水排放 | 烟囱测试、连续监测、排水采样、运行小时 | pollutant; concentration; flow; duration; method; detection_limit; abatement_status; sampling_time | 采用适用的公认监测方法和代表性采样 | kg 污染物；mg/Nm3；mg/L；m3；h | 按许可或 BAT 相关频率，并覆盖代表性运行 | 与生产数据相同期间 | 所有相关直接排放点 | 污染物质量等于代表性浓度乘流量和持续时间；汇总排放点且不重复计算 | 实验室认可、方法引用、QA/QC 空白、校准和许可报告 |
| `cp_packaging_records` | `inspection_packaging` | 随产品供应的包装 | 包装物料清单和领用记录 | material_id; component; unit_mass; quantity; reusable_flag; shipment_id | 计数组件并验证代表性单件质量 | kg | 每次装运或每种包装配置 | 与生产数据相同期间 | 范围内全部发运产品 | 汇总材料特定包装质量并按净干织物输出归一化 | 批准的包装规范和定期称重检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | 纱线和织物质量 | dry_mass = measured_wet_mass × (1 - moisture_mass_fraction)；使用声明的测量基准并保留实测值 | measured_wet_mass; moisture_mass_fraction | kg 干质量 |  |
| `calc_normalized_inventory` | 每个清单流 | normalized_amount = reporting_period_flow_amount / reporting_period_net_dry_conforming_fabric_output | flow amount; net dry conforming output | 每 kg 参考流的数量 | `eu-pef-recommendation-2021` |
| `calc_fibre_fraction` | 产品资格 | synthetic_staple_fraction = dry mass of synthetic staple-fibre components / total dry fibre mass × 100 | component dry masses or verified composition certificate | % by mass |  |
| `calc_direct_emission_mass` | 直接空气和水排放 | emission_mass = representative concentration × measured flow × applicable operating or discharge duration，并披露单位换算和未检出值处理 | concentration; flow; duration; unit conversion | kg 污染物 | `eu-textiles-bat-2022` |
| `calc_mass_balance` | 各过程和报告期 | mass_balance_gap = material inputs + opening stock - product outputs - waste outputs - closing stock；具有实质性时单独披露实测挥发或水相损失 | input/output/waste/stock masses | kg 和投入百分比 | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和物料投入 | 保留批次级成分、聚合物类型、短纤维证据、织物组织、整理状态、幅宽、单位面积质量及供应商或生产标识。 | 产品规范、供应商证明、物料清单和批次质量记录 |
| `dq_temporal_representativeness` | 所有前景记录 | 可获得时采用有代表性的连续 12 个月；较短生产期须披露日期、产量覆盖、季节性及其代表性理由。 | 生产日历、仪表覆盖和生产期记录 |
| `dq_technology_geography` | 过程和上游数据集 | 标识织机类型、湿法处理技术、治理、设施地理位置以及上游数据集的地理与技术；论证代理数据。 | 设备台账、工艺流程图和数据集元数据 |
| `dq_completeness` | 投入、产出、废物和直接排放 | 核对物料、水和能源清单；记录排除流并证明条件过程与声明市场状态一致。 | 签署的平衡表、投入产出清单审查和排除日志 |
| `dq_measurement_traceability` | 实测和计算数量 | 保留原始读数、校准状态、公式、分配驱动因素、采样方法、检出限处理和责任人。 | 校准证书、实验室报告、账单和计算工作簿 |
| `dq_external_verifiability` | 发布数据包 | 在不披露受保护商业数据的情况下，提供来源引用、前景协议、质量披露和计算谱系以供独立审查。 | 验证包和审查人记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_category_composition` | reference_product | 确认合成短纤维质量占比至少为 85%，且产品为机织物而非针织物、簇绒织物或以长丝为主的织物。 | `un-cpc-3.0-2025` |
| `validate_reference_identity` | reference_flow | 确认产品流 UUID `b72e06e9-57a4-4e56-8c34-10fa61220193`、Mass 流属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 1 kg 净干参考数量。 |  |
| `validate_route_coverage` | foreground_process_map | 确认纳入纱线准备、织造、检验和成卷，且为达到声明产品状态而使用的每项湿法、热处理、涂层、印花、层压或整理操作均已纳入或明确链接为场外过程。 | `eu-textiles-bat-2022` |
| `validate_material_balance` | process_inventory | 要求各过程具有记录的物料平衡核对，并在发布前调查物料差额。 | `eu-textiles-bat-2022` |
| `validate_wet_process_performance` | conditional_wet_processing | 适用时，按匹配的过程基准将年度平均用水强度与合成材料洗涤 5–20 m3/t、织物间歇染色 10–150 m3/t 或连续染色 2–16 m3/t 比较；超出相关筛查范围须解释，但不自动判为无效。 | `eu-textiles-bat-2022` |
| `validate_thermal_energy` | conditional_thermal_treatment | 纳入热处理时，将净年度平均比能耗与每吨热处理纺织材料 0.5–4.4 MWh 比较；超出筛查范围须解释，但不自动判为无效。 | `eu-textiles-bat-2022` |
| `validate_emission_routing` | waste_and_elementary_outputs | 确认送至外部处理的废水为废物流，直接排放为基本流，捕集残余物为废物流，且污染物质量没有重复计算。 | `eu-textiles-bat-2022` |
| `validate_allocation_and_quality` | published_foreground_package | 确认共享负荷采用披露的因果驱动因素或有理由的质量备用分配，并保留时间、技术、地理、完整性和可追溯性证据。 | `eu-pef-recommendation-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 合成短纤维机织物制造前景生产数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当成分、组织、整理状态、技术、地理、报告期、系统边界和分配与研究相容时，用于产品及供应链 LCA |
| excluded_use | 未建立功能等效时直接比较不同功能或整理状态的织物；服装使用阶段声明；聚合物或纤维生产；针织物、簇绒织物或合成纤维长丝织物建模；无依据的设施或区域外推 |
| required_metadata | PCR id；产品流 UUID；成分和聚合物类型；短纤维证据；织物组织；坯布/成品状态；幅宽；单位面积质量；处理路线；织机技术；设施和地理；报告期；再生含量；分配；上游数据集；数据所有者 |
| required_quality_disclosure | 前景覆盖；仪表和秤具覆盖；干质量换算；物料/水/能源平衡结果；条件过程；排放监测；分配驱动因素；上游代理选择；排除流；不确定性和未解决数据缺口 |
| update_trigger | 纤维成分或阈值资格、纱线来源、织机或湿法处理技术、产品整理、设施、分配、治理、上游数据集、法规要求发生变化，或水、能源、化学品、废物或排放强度发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3.0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 26740, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 官方产品类别名称、85% 合成短纤维阈值，以及与相邻长丝织物、人造短纤维织物、特种织物和针织物类别的排除边界 |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508（检索于 2026-08-11） | 织物生产和织造过程范围；投入产出清单；监测；化学品、水、能源、废物、废水和空气排放规则；官方用水和热能筛查范围 |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, published January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-11） | 行业和纤维适用性；合成纺织材料及整理路线的过程分解 |
| `eu-pef-recommendation-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 生命周期数据集建模、上游链接、分配层级、数据质量、披露和验证语境 |
