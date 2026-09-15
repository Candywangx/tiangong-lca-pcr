---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-artificial-staple-fibres-containing-85-or-more-by-weight-of-artificial-21aa3bb0
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含人造短纤维重量达85%或以上的机织织物

## 1. 范围与适用性

本 PCR 适用于人造短纤维占纤维总质量至少 85% 的机织织物厂门生产。人造短纤维包括粘胶、莫代尔、莱赛尔、铜氨或醋酸等再生或其他非合成的人造短纤维，但成品必须满足该组成阈值。申报织物可为坯布，也可包含湿法前处理、染色、印花、涂层或功能整理；凡为达到申报销售状态而实施的工序均须明确报告。

前景边界从织造厂验收成纱开始，包括纱线准备、整经、条件性上浆、织造、检验及为达到申报厂门状态所需的场内整理。纤维和纱线生产采用关联的上游数据集。服装制造、分销、使用、洗涤和寿命终结不在本 PCR 范围内。非织造布、针织物、簇绒地毯、特种织物、人造短纤维占比低于 85% 的织物以及以合成短纤维为主的织物均不适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-artificial-staple-fibres-containing-85-or-more-by-weight-of-artificial-21aa3bb0 |
| classification_refs | CPC 3.0：26750，精确映射语境 |
| covered_products | 纤维总质量中人造短纤维至少占 85% 的机织织物；当申报生产路线包含相应工序时，可为坯布、染色、印花、涂层或其他整理织物 |
| excluded_products | 针织物和非织造布；地毯和簇绒织物；特种织物；服装和制成品；低于 85% 阈值的织物；以合成短纤维为主的织物 |
| representative_product | 主要由人造短纤维纱线制成的厂门机织织物 |
| production_route | 来纱验收、络筒或准备、整经、条件性上浆、织造、检验及条件性湿法前处理或整理 |
| market_state | 生产设施厂门处干燥、可销售、尚未制衣的申报坯布或整理织物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产纤维质量中人造短纤维至少占 85% 的机织织物 |
| How much | 厂门处 1 kg 可销售织物 |
| How well | 满足申报的纤维组成、组织、幅宽、单位面积质量、颜色或整理、质量等级及含湿状态 |
| How long or cycle | 对以质量计量的中间产品不适用；一个申报生产批次为报告周期 |
| reference_flow_link | 最后一个纳入前景过程的可销售织物输出，归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 人造短纤维机织物，按重量计，人造短纤维含量为 85%或以上 `7037e578-630a-4ba2-8768-7858df8a46aa` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人造纤维类型和供应商组成证明；按质量计的纤维总组成；坯布或整理状态；织物组织；幅宽；单位面积质量；存在时的颜色、涂层或功能整理；含湿或调湿状态；质量等级；生产地域；报告期 |

构建前景数据包时，`必需限定信息` 中的信息须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任一必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在申报含湿状态调湿后测定可销售织物净质量；排除托盘、卷芯和外包装。 |
| `composition_threshold` | 产品类别归属 | 纤维质量分数 | 质量百分比 | 以供应商证明、物料清单或适用 ISO 1833 方法的定量纤维分析结果，验证人造短纤维占纤维总质量至少 85%；按检测方法要求去除非纤维物质，纤维分母不得包含涂层或包装。 |
| `area_to_mass_conversion` | 以面积记录的生产数据 | 质量和面积 | kg 和 m2 | 仅使用批次实测单位面积质量和成品幅宽将面积换算为质量，并保留原始测量值与公式。 |
| `water_volume_conversion` | 计量的工艺水和废水 | 体积 | m3 | 保留实测体积；如需质量表示，应采用有记录的密度和温度基准，不得作无依据换算。 |
| `energy_carrier_separation` | 电力、蒸汽和燃料 | 能量 | kWh 或 MJ | 电力、外购蒸汽和燃料分别记录，并在换算为统一能量单位前保留原始计量单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 织造设施厂门处已验收的人造短纤维纱线及少量其他纤维纱线，并有组成、质量、含湿状态和供应商身份记录 |
| starting_condition_role | 进入前景织造路线的上游产品投入 |
| product_classification_scope | 纤维总质量中人造短纤维至少占 85% 的机织织物；分类仅用于范围核对，不构成 canonical PCR 身份 |
| recursive_input_rule | 外购的同类别坯布或部分整理织物只作为一个上游产品投入记录，并关联独立上游数据集；不得在接收过程中递归重建其既往生产 |
| upstream_dataset_requirement | 为纤维、纱线、上浆化学品、水、电力、燃料、其他工艺化学品、纳入的包装与运输以及废物处理关联具有代表性的上游数据集 |
| disclosure | 披露纤维类型和组成、纱线来源、纳入工序、坯布或整理状态、湿法加工路线、分配选择、排除工序、截断、再生成分声明以及公用工程或处理设施是场内还是外供 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | 前景起点 | 从有记录的成纱接收开始；纤维和纱线制造采用上游数据集，不得静默省略。 | `eu-pef-method-2021` |
| `boundary_process_completeness` | 前景工序 | 纳入纱线准备、整经、织造和检验，以及为达到申报可销售织物状态而实际实施的全部条件性上浆或整理工序。 | `eu-jrc-textiles-bref-2023`; `zhang-et-al-2023-wet-processing` |
| `boundary_recursive_input` | 同类别中间织物 | 在外购同类别织物投入处停止递归前景展开，并要求独立上游数据集和供应状态披露。 | `eu-pef-method-2021` |
| `boundary_environmental_flows` | 投入和产出 | 在相关时按过程盘查材料、水、能量、化学品、废水、废气和固体废物流；披露任何排除流及理由。 | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-conclusions-2022`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_warping` | 来纱验收、准备和整经 | `required` | 始终纳入从来纱接收到经轴和准备后纬纱产出的阶段 | 前景材料准备 | 送至织造的准备后纱线 kg |
| `sizing` | 经纱上浆和干燥 | `conditional` | 报告设施对经纱上浆时纳入 | 用于织造的前景纱线保护 | 上浆经纱 kg |
| `weaving` | 织机织造和织物检验 | `required` | 始终纳入 | 前景织物形成 | 经检验坯布 kg |
| `wet_pretreatment_and_finishing` | 退浆、洗涤、染色、印花、涂层或功能整理 | `conditional` | 为达到申报市场状态而在场内或运营控制下实施相应工序时逐项纳入 | 前景整理 | 可销售整理织物 kg |

### 过程：来纱验收、准备和整经（`yarn_preparation_and_warping`）

#### 输入

##### 产品流

###### 人造短纤维纱线（`incoming_yarn`）

记录进入前景的非零售人造短纤维纱线。任何少量其他纤维纱线须按实际身份另建原子卡片。

- 选定流：含人造短纤维重量达85%或85%以上的纱（缝纫线除外），不供零售 `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- 流属性/单位：Mass / kg
- 数量规则：申报生产批次消耗的已验收纱线实测调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 络筒和整经用电（`preparation_electricity`）

记录纱线处理、络筒和整经设备的分表电量或有记录的总表分配量。

- 选定流：Electricity, medium voltage, declared grid；精确 Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：生产批次实测或按电表分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 纺织纱线润滑油（`warping_lubricant`）

记录纱线准备或整经中实际施用的润滑油配方；任何抗静电配方须另建原子卡片。

- 选定流：Textile yarn lubricating oil, declared formulation；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

##### 废物流

除非有意重新引入回收纱线，否则本过程不预设废物输入；使用时应按法律和物理状态另列为产品流或废物流输入。

##### 基本流

不规定类别特定的基本流输入；跨越环境边界的场址特定资源投入仍须记录。

#### 输出

##### 产品流

###### 准备后经轴和纬纱（`prepared_yarn_output`）

记录送往上浆或直接织造的准备后纱线质量，并与来纱、在制品及损失核对。

- 选定流：Prepared artificial staple-fibre yarn；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据实测转移质量和批次在制品变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 废人造短纤维纱线（`preparation_yarn_waste`）

称量作为废物离开过程的人造短纤维纱头和破损纱包。

- 选定流：Waste artificial staple-fibre yarn；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测废物质量，扣除有记录的内部再用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 废纸板纱管（`preparation_paper_core_waste`）

将废纸板纱管与纱线废料和塑料废物分开称量。

- 选定流：Waste paperboard yarn core；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：发运为废物的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 废聚乙烯包装膜（`preparation_plastic_film_waste`）

将废聚乙烯薄膜与纸板和纱线废物分开称量。

- 选定流：Waste polyethylene packaging film；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：发运为废物的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

##### 基本流

###### 未捕集纤维粉尘排入空气（`preparation_dust_to_air`）

仅在粉尘越过场址边界进入空气时记录直接排放；捕集粉尘仍作为废物流。

- 选定流：Particles (PM10) to air, site emission compartment；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据有记录的控制装置质量平衡或批准因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 准备后纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-textiles-bref-2023`

### 过程：经纱上浆和干燥（`sizing`）

#### 输入

##### 产品流

###### 准备后经纱（`prepared_warp_input`）

记录进入上浆的经纱实测质量，并保留与准备批次的关联。

- 选定流：Prepared artificial staple-fibre warp yarn；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：进入上浆的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 聚乙烯醇浆料（`polyvinyl_alcohol_size`）

仅在聚乙烯醇为实际经纱浆料组分时记录；其他浆料组分或助剂须各自建立原子卡片。

- 选定流：聚乙烯醇 `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass / kg
- 数量规则：实测配方领用量减回收和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 上浆工艺水（`sizing_water`）

分别记录新水、回用水和循环水，并避免重复计算回收浆液。

- 选定流：Process water；精确 Tiangong UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：用于调浆、设备清洗和相关作业的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-textiles-bref-2023`

###### 上浆用电（`sizing_electricity`）

记录浆液制备、泵、上浆机及电加热或电驱设备的用电。

- 选定流：Electricity, medium voltage, declared grid；精确 Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或依据电表的有记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 上浆和干燥用蒸汽（`sizing_steam`）

记录输送到上浆过程的外购或场内转移蒸汽。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：计量蒸汽质量，或根据校准冷凝水和有记录损失计算的蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 上浆直接供热用天然气（`sizing_natural_gas`）

仅在天然气为上浆或干燥供热而燃烧时记录，不得与蒸汽合并。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：按有记录气体状态和密度将实测燃气体积换算为质量，或使用直接燃料质量记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

##### 废物流

不规定废物输入。由外部处理系统返回的回收浆料应另行记录并关联其处理数据集。

##### 基本流

只有未由供水产品流表示时，才将场址特定取水记录为基本流输入。

#### 输出

##### 产品流

###### 上浆经纱（`sized_warp_output`）

记录送往织造的调湿质量，并由干纱和上浆纱记录计算上浆率。

- 选定流：Sized artificial staple-fibre warp yarn；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送往织造的计算调湿质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 经纱上浆废水（`sizing_wastewater`）

记录扣除有记录内部回用后送处理的上浆废水；浓缩废浆液另建卡片。

- 选定流：经纱上浆废水 `33617934-f2c0-4016-bb14-264de8396a2c`
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘实测或有记录密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-textiles-bref-2023`

###### 废聚乙烯醇浆液（`spent_sizing_liquor`）

仅在浓缩 PVA 浆液与废水分开离开过程时记录。

- 选定流：Spent polyvinyl-alcohol sizing liquor；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送回收或处理的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-textiles-bref-2023`

##### 基本流

###### 非甲烷挥发性有机物排入空气（`sizing_nmvoc_to_air`）

在有实测或可由采集活动数据计算时记录上浆和干燥产生的 NMVOC；其他排放物质须另建原子卡片。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或由燃料用量和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 上浆经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-textiles-bref-2023`

### 过程：织机织造和织物检验（`weaving`）

#### 输入

##### 产品流

###### 人造短纤维织造纱线（`weaving_yarn_input`）

记录作为经纱和纬纱投入的同一精确人造短纤维纱线总质量；组成不同的纱线须另建卡片。

- 选定流：含人造短纤维重量达85%或85%以上的纱（缝纫线除外），不供零售 `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- 流属性/单位：Mass / kg
- 数量规则：发往织机的实测纱线质量并调整在制品变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经检验坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 织机用电（`weaving_electricity`）

尽可能分表记录织机、压缩空气、局部通风和检验用电。

- 选定流：Electricity, medium voltage, declared grid；精确 Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：织造批次分表或有记录的总表分配用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经检验坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 织机润滑剂（`loom_lubricant`）

记录织机和压缩空气系统实际消耗的润滑剂，并区分回收废油。

- 选定流：Textile loom lubricating oil, declared formulation；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：采购或领用量减退库量后分配至生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经检验坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

##### 废物流

不规定废物输入；内部再用纱头须在质量平衡中保留可见性，不得作为新的原生投入重复计算。

##### 基本流

机械织造步骤不规定类别特定的基本流输入。

#### 输出

##### 产品流

###### 经检验坯布（`greige_fabric_output`）

记录检验后的调湿可销售坯布质量；仅在无后续整理过程时，本行才作为参考输出。

- 选定流：人造短纤维机织物，按重量计，人造短纤维含量为 85%或以上 `7037e578-630a-4ba2-8768-7858df8a46aa`
- 流属性/单位：Mass / kg
- 数量规则：实测可销售坯布净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：织造为最后纳入过程时的 1 kg 参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`

##### 废物流

###### 废人造短纤维纱线（`weaving_yarn_waste`）

记录作为废物离开织造的纱头，不含返回同一过程内部再用的材料。

- 选定流：Waste artificial staple-fibre yarn；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：离开织造过程的实测质量，扣除有记录的内部再用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经检验坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 废人造短纤维机织物（`weaving_fabric_waste`）

将作为废物离开织造的布边和等外坯布与纱线废料分开记录。

- 选定流：Waste woven artificial staple-fibre fabric；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：离开织造过程的实测质量，扣除有记录的内部再用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经检验坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

##### 基本流

###### 未捕集织造粉尘排入空气（`weaving_dust_to_air`）

仅在相关且有场址证据时记录直接颗粒物排放。

- 选定流：Particles (PM10) to air, site emission compartment；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测排放或根据有记录的收集系统质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经检验坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：湿法前处理和整理（`wet_pretreatment_and_finishing`）

#### 输入

##### 产品流

###### 坯布（`finishing_fabric_input`）

记录调湿坯布质量，并关联织造批次或供应商数据集。

- 选定流：Greige woven fabric of artificial staple fibres；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：进入纳入整理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 湿法加工用水（`finishing_water`）

分别记录退浆、洗涤、染色、印花、涂层配制和清洗的新水、回用水与循环水。

- 选定流：Process water；精确 Tiangong UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：按纳入湿法工序计量的总水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-textiles-bref-2023`

###### 氢氧化钠（`sodium_hydroxide`）

仅在前处理或整理实际使用工业级氢氧化钠时记录，并披露供应纯度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测配方领用量减回收和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 过氧化氢溶液（`hydrogen_peroxide_solution`）

实际使用时，每张卡片记录一种供应浓度的过氧化氢溶液，不得合并不同浓度。

- 选定流：Hydrogen peroxide solution, declared concentration；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测配方领用量减回收和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 活性染料配方（`reactive_dye`）

每张卡片记录一种活性染料配方，并披露商品名、Colour Index 身份、浓度和配方功能。

- 选定流：Reactive dye formulation, declared Colour Index identity；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测配方领用量减回收和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 氯化钠（`sodium_chloride`）

氯化钠作为染色电解质使用时单独记录。

- 选定流：氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性/单位：Mass / kg
- 数量规则：实测配方领用量减回收和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿法加工和整理用电（`finishing_electricity`）

记录浴槽、泵、烘干机、拉幅机、固化和减排设备的电力。

- 选定流：Electricity, medium voltage, declared grid；精确 Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：按纳入整理工序分表计量或有记录地分配电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿法加工和整理用蒸汽（`finishing_steam`）

将外购或场内转移蒸汽与电力和燃料分开记录。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：计量蒸汽质量，或根据校准冷凝水和有记录损失计算的蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 整理直接供热用天然气（`finishing_natural_gas`）

仅在天然气用于直接加热、干燥、拉幅、固化或减排时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：按有记录气体状态和密度将实测燃气体积换算为质量，或使用直接燃料质量记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-textiles-bref-2023`

##### 废物流

不规定废物输入；场外回收的化学品或水须关联回收数据集。

##### 基本流

直接取水或其他自然资源跨越环境边界而非供给产品边界时，应记录为基本流输入。

#### 输出

##### 产品流

###### 可销售整理机织物（`finished_fabric_output`）

记录全部纳入整理和检验后的调湿可销售净质量；纳入任一整理工序时，本行为参考输出。

- 选定流：人造短纤维机织物，按重量计，人造短纤维含量为 85%或以上 `7037e578-630a-4ba2-8768-7858df8a46aa`
- 流属性/单位：Mass / kg
- 数量规则：实测可销售整理织物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`

##### 废物流

###### 整理废水（`finishing_wastewater`）

按流股、工序来源、直接或间接排放路线、回用情况和实测污染物参数记录废水体积。

- 选定流：Textile finishing wastewater；精确 Tiangong UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：计量排放量减有记录的回用和循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-textiles-bref-2023`

###### 纺织废水处理污泥（`finishing_sludge`）

称量纳入纺织废水处理产生的脱水污泥，并保留干物质含量和危险属性证据。

- 选定流：Textile wastewater-treatment sludge；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：离开整理工序的实测废物质量，扣除有记录的回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 等外人造短纤维整理机织物（`offgrade_finished_fabric`）

将送回收或处理的等外整理织物与污泥和废水分开称量。

- 选定流：Off-grade woven artificial staple-fibre fabric；精确 Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：离开纳入整理工序的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-textiles-bref-2023`

##### 基本流

###### 非甲烷挥发性有机物排入空气（`finishing_nmvoc_to_air`）

在有实测或可由采集活动数据计算时，记录干燥、拉幅、固化或其他整理步骤产生的 NMVOC；其他排放物质须另建原子卡片。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测浓度乘实测流量，或由采集的燃料/化学品用量和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售整理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-textiles-bref-2023`

场址实际使用但未列明的每种燃料、化学配方、包装组件、废物流或基本流排放，均须以唯一 `row_id`、一个选定流和实际前景采集协议另建卡片。若直接读身份、品级、浓度、地域、状态或隔室不匹配，不得复用已列 UUID。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程和公用工程 | 优先通过分表、批次追踪、时间细分或过程及公用工程物理分离避免分配。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_physical_relation` | 不可避免的多功能性 | 无法细分或系统扩展时，采用可代表资源使用的有记录因果物理关系分配，如机器时间、计量能耗、浴液体积或质量吞吐量。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_other_relation` | 无可辩护物理关系 | 使用其他有记录的关系；经济分配仅作为最后手段，并报告因子、价格、期间、币种及敏感性。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_recycling_and_waste` | 内部再用和可销售纺织残余物 | 内部再用的纱线、浆料、水或织物不得重复计算；回收材料仅记录一次，披露其仍为废物还是成为共产品，并关联场外回收或处理数据集。 | `eu-jrc-textiles-bref-2023`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `yarn_preparation_and_warping`; `sizing`; `weaving`; `wet_pretreatment_and_finishing` | 纱线、中间织物、在制品和损失 | 秤量、物料领退和生产记录 | lot_id, material_id, fibre_composition, warp_or_weft, opening_mass, issued_mass, returned_mass, transfer_mass, closing_wip_mass, moisture_state | 校准秤量并与仓储及批次生产记录核对 | kg | 每批并每月核对 | 至少连续 12 个代表性月份；较短生产则覆盖整个批次 | 所有设施及运营控制下的外包过程 | 按批次和过程求和，归一化至可销售参考输出净质量，并保留在制品调整 | 秤校准、供应商组成证明、签字库存核对、异常日志 |
| `cp_product_output` | `weaving`; `wet_pretreatment_and_finishing` | 可销售参考织物 | 最终秤量和检验记录 | lot_id, gross_mass, excluded_packaging_mass, net_mass, width, area, mass_per_area, moisture_state, quality_grade, rejection_mass | 申报调湿和检验后的校准最终称量 | kg | 每卷或每批 | 完整报告期 | 每个生产场址 | 汇总可销售净产出；只选择一个最终过程作为定量参考 | 秤校准、检验放行、卷布台账、含湿或调湿记录 |
| `cp_energy_records` | 所有纳入过程 | 电力、蒸汽和燃料 | 分表、账单、锅炉和燃料日志 | meter_id, carrier, opening_reading, closing_reading, conversion_factor, allocation_driver, process_id, operating_hours | 优先直接计量；否则从完整设施平衡作有记录的分配 | kWh、MJ、kg fuel 或 m3 fuel | 连续或逐批；每月核对 | 至少连续 12 个代表性月份或完整生产批次 | 所有纳入生产和公用工程系统 | 表差法；扣除外送能量；共用量仅按第 7 节分配 | 仪表校准、账单、燃料低位热值来源、核对记录 |
| `cp_chemical_records` | `yarn_preparation_and_warping`; `sizing`; `weaving`; `wet_pretreatment_and_finishing` | 润滑剂、浆料、染料和助剂 | 配方、领退、库存、SDS 和 TDS | chemical_id, trade_name, function, formulation_mass, concentration, issue_mass, return_mass, recovered_mass, batch_id | 称量自动投料或仓储领用核对 | kg 配方产品；已知时另记 kg 活性物 | 每批并每月库存核对 | 完整报告期 | 所有纳入过程及承包方 | 净用量等于领用加期初库存减退回、回收和期末库存；保留配方与活性物视图 | 投料校准、配方授权、SDS/TDS、库存核对 |
| `cp_water_and_wastewater` | `sizing`; `wet_pretreatment_and_finishing` | 新水、回用水、循环水和废水 | 水表、浴槽、排放表和实验室记录 | source_or_stream, meter_id, volume, reuse_volume, temperature, process_id, discharge_route, sampling_time, concentration_by_parameter | 相关流股直接计量，并在代表位置合规采样 | m3 及参数特定浓度单位 | 连续或逐批；按许可或方法频率采样 | 至少连续 12 个代表性月份或完整生产批次 | 所有纳入湿法过程和处理接口 | 建立过程水量平衡；分别报告总取水、内部回用、排放和污染物质量 | 仪表校准、采样链、实验室资质、水量平衡闭合 |
| `cp_waste_records` | 所有纳入过程 | 纱线、织物、包装、废液、污泥和废油 | 地磅、容器称量和转移单 | waste_id, material, process_origin, gross_mass, tare_mass, net_mass, hazardous_status, internal_reuse, treatment_route, destination | 产生或发运时直接称量 | kg | 每次转移并每月核对 | 完整报告期 | 所有纳入过程 | 按类型和路线汇总净质量；内部再用仅扣除一次 | 校准秤、合规转移文件、接收方证据、库存核对 |
| `cp_direct_emissions` | 所有纳入过程 | 直接空气和水基本流 | 烟道测试、连续监测、流量计、实验室、燃料和化学品记录 | substance, compartment, concentration, flow_rate, duration, control_status, method, detection_limit, factor_source | 优先实测浓度和流量；否则由采集活动数据和有记录因子计算 | kg 物质及来源测量单位 | 按适用监测频率，并在配方或控制发生重大变化时 | 代表性正常运行及披露的异常期 | 每个相关排放点 | 排放质量等于浓度乘流量和时间，或采集活动量乘有记录因子；避免与送处理废物流重复 | 认可方法、校准、检出限处理、运行状态记录、因子引用 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景行 | 归一化量 = 报告期流量除以选定最终过程的可销售参考织物净 kg | 采集流量；`cp_product_output` 可销售净质量 | 每 1 kg 参考织物的数量 | `eu-pef-method-2021` |
| `calc_fibre_composition` | 产品类别归属 | 人造短纤维百分比 = 人造短纤维质量除以纤维总质量乘 100；分析结果采用适用 ISO 1833 的样品制备和计算基准，并按该方法去除非纤维物质 | 供应商证明、物料清单、ISO 1833 检测结果 | 经验证的纤维组成百分比 | `un-cpc-3-0-2025`; `iso-1833-1-2020` |
| `calc_material_balance` | 各过程和生产批次 | 期初库存加投入等于产出加期末库存加记录损失；调查无法解释的残差，不得自动分摊 | `cp_material_mass_balance`; `cp_waste_records`; `cp_product_output` | 过程质量平衡和残差 | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-conclusions-2022` |
| `calc_area_mass` | 仅有面积的卷布记录 | 织物质量 = 实测面积乘批次单位面积质量；有实测净质量时优先使用 | 面积、幅宽和长度、实测单位面积质量 | kg 织物 |  |
| `calc_water_pollutant_mass` | 废水污染物 | 污染物质量 = 实测废水体积乘代表性浓度，并披露单位换算和采样覆盖 | `cp_water_and_wastewater` 体积与浓度 | 每报告期及每 kg 参考织物的污染物 kg | `eu-jrc-textiles-bref-2023` |
| `calc_shared_utility_allocation` | 共用公用工程 | 仅用最能代表消耗的有记录物理驱动因子分配未计量残差，并将分配总量与设施总表核对 | 总表、分表、运行小时、机器负荷、吞吐量 | 过程级公用工程量 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和纱线投入 | 保留已解析的精确流身份、纤维类型、组成、批次、供应商和路线限定；未解析清单 UUID 候选须在激活前审查。 | Tiangong 参考流精确回读、供应商证明、批次记录 |
| `dq_temporal` | 前景活动数据 | 连续生产使用代表性的连续 12 个月，较短生产覆盖完整批次；披露停机、异常批次和季节性。 | 报告期覆盖表和生产日志 |
| `dq_technology` | 过程和能耗数据 | 织机类型、上浆系统、湿法路线、烘干或固化设备、减排和回用水配置须与代表产品匹配。 | 设备台账、工艺流程图、配方和控制记录 |
| `dq_geography` | 公用工程和上游数据集 | 使用实际生产地域以及有代表性的电力、燃料、水、纱线、化学品、运输和处理数据集，并记录代理。 | 场址地址、供应商位置、数据集元数据和代理日志 |
| `dq_completeness` | 过程清单 | 按过程核对材料、水、能量、化学品、废水、直接排放和废物记录；披露排除项和缺失测量。 | 与 JRC BAT 2、BAT 6 及 ISO 14044 清单分析要求一致的投入产出清单和核对报告 |
| `dq_precision` | 测量和计算 | 保留仪表分辨率、校准、采样频率、检出限、公式输入、分配因子及批次变异性。 | 校准记录、实验室报告、计算工作簿和异常日志 |
| `dq_consistency` | 多场址或多产品数据集 | 跨场址和期间采用相同参考状态、单位、过程边界、分配层级和计算规则；记录偏离。 | 方法说明和跨场址一致性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 必须使用产品流 UUID `7037e578-630a-4ba2-8768-7858df8a46aa`、Mass 流属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 |  |
| `validate_composition_threshold` | 类别范围 | 人造短纤维低于纤维总质量 85%，或纤维分母及适用 ISO 1833 检测基准无记录时，类别符合性失败。 | `un-cpc-3-0-2025`; `iso-1833-1-2020` |
| `validate_required_qualifiers` | 数据集元数据 | 要求第 3 节全部限定信息，包括纤维类型、组成、结构、整理状态、单位面积质量、含湿状态、地域和期间。 |  |
| `validate_mass_balance` | 前景过程 | 每个纳入过程须有质量平衡，任何无法解释的残差必须在接受数据集前调查。 | `eu-jrc-textiles-bref-2023` |
| `validate_process_coverage` | 过程图 | 必须纳入两个必需过程和为达到申报市场状态实际使用的全部条件性过程；申报整理织物但遗漏实际整理工序时拒绝。 | `eu-jrc-textiles-bref-2023` |
| `validate_inventory_and_quality` | 前景清单 | 相关时须具备过程级水、能量、材料、化学品、废水、废气和固体废物覆盖，以及时间、技术、地域、完整性和精度证据。 | `eu-jrc-textiles-bref-2023`; `eu-pef-method-2021` |
| `validate_quantitative_reference` | 最终输出 | 按申报最终市场状态，`greige_fabric_output` 或 `finished_fabric_output` 中必须且只能选择一行为 1 kg 定量参考。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报人造短纤维机织物及生产路线的前景生产数据集 |
| downstream_use | `secondary_dataset`；方法学和翻译评审后可为 `background_dataset` |
| allowed_use | 当地域、技术、组成、结构和整理状态匹配时，用于需要厂门处人造短纤维至少占 85% 的机织物的摇篮到大门或更广 LCA 模型 |
| excluded_use | 合成短纤维织物；低于 85% 阈值的织物；针织、非织造、簇绒、特种或制成纺织品；用作通用服装数据集；未匹配申报整理和生产路线的用途 |
| required_metadata | 发布后的 PCR id 和版本；产品流 UUID；纤维类型和组成；纱线来源；组织、幅宽和单位面积质量；坯布或整理状态；纳入工序；地域；期间；技术；分配；上游数据集；数据所有者；评审状态 |
| required_quality_disclosure | 一手数据占比；仪表和采样覆盖；质量、水和能量平衡闭合；时间、技术和地域代表性；完整性；精度；代理；分配因子；截断；未解析 UUID |
| update_trigger | 主导人造纤维类型、跨越 85% 阈值的组成、纱线来源、织机或上浆技术、整理配方、水或能源系统、生产地域、分配方法、排放控制、关键证据或 UUID 解析发生变化 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，《Central Product Classification Version 3.0 structure》，代码 26750，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-11） | 官方类别名称和人造短纤维 85% 范围阈值 |
| `eu-jrc-textiles-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Textiles Industry》，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-11） | 整经、上浆、织造和整理工艺分解；投入产出清单；水、能量、化学品、废水、空气排放和废物采集要求 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会建议（EU）2021/2279，Environmental Footprint 方法，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 功能单位和前景数据框架、分配层级、归一化及技术、地域、时间、完整性和精度要求 |
| `eu-textiles-bat-conclusions-2022` | `official_guidance` | 欧盟委员会实施决定（EU）2022/2508，纺织工业 BAT 结论，CELEX 32022D2508，https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng（检索于 2026-08-12） | BAT 2 投入产出清单，以及 BAT 6 对水、能量、材料、废水、回收材料和废物开展年度、优先直接、过程级监测的要求 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，含 Amd 1:2017 和 Amd 2:2020，https://www.iso.org/standard/38498.html（检索于 2026-08-12） | 目标和范围、生命周期清单分析、分配、解释、报告和关键评审框架 |
| `iso-1833-1-2020` | `standard` | ISO 1833-1:2020，Textiles — Quantitative chemical analysis — Part 1: General principles of testing，https://www.iso.org/standard/74881.html（检索于 2026-08-12） | 定量纤维组成分析的通用制样和计算基准；申报混纺须采用适用的 ISO 1833 混合物专用部分 |
| `zhang-et-al-2023-wet-processing` | `literature` | Zhang, S. 等，Environmental assessment of fabric wet processing from gate-to-gate perspective: Comparative study of weaving and materials，Science of the Total Environment 857 (2023) 159495，https://doi.org/10.1016/j.scitotenv.2022.159495 | 同行评审全文证据：将前处理、染色、洗涤和整理视为不同湿法贡献环节，并采集一手能源、水、化学品、废水和直接排放清单 |
