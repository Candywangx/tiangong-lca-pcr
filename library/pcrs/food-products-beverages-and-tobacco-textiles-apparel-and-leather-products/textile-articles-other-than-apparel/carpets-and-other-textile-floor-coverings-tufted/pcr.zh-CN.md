---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-tufted
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 簇绒地毯及其他铺地织物

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 27230 所涵盖的成品簇绒地毯及其他簇绒铺地织物，包括绒头纱穿入一次背衬，并通过已声明的整体背衬、涂层、层压或二次背衬结构固定绒簇的满铺卷材和模块化产品。

前景边界始于成品绒头纱、一次背衬、背衬化学品及其他采购材料进入地毯工厂，终于合格并包装的产品离开工厂大门。边界包括簇绒、背衬胶料配制、涂覆或层压、干燥或固化、后整理、裁切、检验、包装、直接相关的公用工程、废物、废水和直接排放。厂内集成的纤维、纱线或背衬制造、纱线热定形、染色、印花、安装、使用、维护和生命周期末端仅在申报场址对其实施控制且作为可单独追溯过程时纳入；否则应链接相应的上游或下游数据集。

机织、打结、植绒、针刺、毡制和非纺织类铺地材料不在本 PCR 范围内。垫层、安装胶黏剂和单独销售的附件不计入参考产品，除非其已物理集成并作为申报成品的一部分销售。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-tufted |
| classification_refs | CPC 3.0:27230, exact |
| covered_products | 成品簇绒满铺地毯、簇绒方块地毯面层结构，以及通过将绒头纱穿入一次背衬并用已声明背衬系统固定绒簇而制成的其他成品纺织铺地材料。 |
| excluded_products | 机织、打结、植绒、针刺或毡制铺地材料；独立垫层；安装胶黏剂；以及纺织面层并非由簇绒工艺形成的产品。 |
| representative_product | 工厂大门处合格成品簇绒铺地织物的生产混合，须声明绒头纤维、一次背衬、背衬配方、二次背衬结构和表面后整理。 |
| production_route | 接收成品纱线和背衬材料；簇绒；背衬胶料配制；涂覆或层压；干燥或固化；后整理、裁切和检验；包装及工厂大门放行。 |
| market_state | 工厂大门处的干燥成品铺地材料，按申报采用卷材或模块形式，不包括未作为产品组成提供的安装材料。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为明确声明的室内或其他预定铺地用途提供成品簇绒纺织铺地材料。 |
| How much | 工厂大门处 1 kg 合格成品的净质量。 |
| How well | 声明绒头纤维及再生含量、绒头结构、一次和二次背衬、背衬化学体系、产品形式、单位面积质量、单位面积绒头质量、尺寸、表面处理、性能等级和适用产品规范。 |
| How long or cycle | 一个工厂大门生产周期；除非数据包另附经核验的使用性能和使用寿命证据，否则不主张使用寿命等效性。 |
| reference_flow_link | 功能单位由下述参考产品流恰好 1 kg 实现。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Carpets and other textile floor coverings, tufted `a01ef31e-fdc6-48be-a681-0a418c22c0cc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绒头纤维及再生含量；绒头结构；一次背衬材料；背衬配方及固含量；二次背衬材料或明确的整体背衬声明；产品形式；单位面积净质量；单位面积绒头质量；尺寸；染色或印花路线；所施加功能性后整理；制造地域；生产期间；含湿状态；包装排除；预定用途及性能等级 |

参考 UUID 仅在公开 `state_code=100` 直接读取确认其为 Product flow、CPC 3.0 子类 27230、Mass 和 kg 单位基础后才被接受。任何数据库版本均不属于本 PCR 身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 合格成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对干燥合格成品称重，不包括可拆卸运输膜、纸板卷芯、托盘、废次品长度以及未作为产品销售部分的安装材料。所有交换归一化为恰好 1 kg 合格净产出。 |
| `mass_per_area_conversion` | 按面积或卷记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用产品和生产批次特定的实测单位面积净质量及合格面积转换面积或卷记录。保留实测质量、面积和换算结果；不得采用通用地毯克重。 |
| `wet_dry_basis` | 胶乳、涂层浆料、废水、湿残余物和干固体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录供货湿质量和实测或供应商声明的固体分数。仅可用可追溯的批次或配方特定系数转换为干固体，并将水作为单独平衡项保留。 |
| `energy_carrier_separation` | 电力及每一种热能载体 | 载体特定 | kWh、MJ 或载体原生单位 | 计量电力须与天然气及任何其他燃料或外购热量分开保存。仅用有据可查的系数换算单位；不得把不同载体合并为一个能源交换。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 地毯工厂前景 | 纳入受运营控制的簇绒、背衬胶料配制、涂覆或层压、干燥或固化、后整理、裁切、检验、包装、直接相关公用工程、产生的废物、废水和直接排放。 | `us-epa-fabric-coating-1998`; `eu-textiles-bat-2022` |
| `boundary_purchased_inputs` | 采购纱线、背衬、化学品、燃料和包装 | 将每种采购投入保留为可见的原子产品交换，并链接与声明材料等级、再生含量、地域和供应状态相符的上游数据集。 | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_integrated_upstream` | 场址集成的纱线、背衬、染色、印花或整理剂配制 | 当申报场址控制该操作时，将其作为可单独追溯的前景过程纳入；否则不得以无记录估算把其负荷并入簇绒过程。 | `eu-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_direct_releases` | 涂覆、固化和场内燃烧 | 将相关实测直接大气排放、废水转移和废物与上游燃料或化学品生产分开记录。适用性由声明配方、热处理路线及场址投入产出清单确定。 | `eu-textiles-bat-2022`; `us-epa-carpet-air-emissions-2002` |
| `boundary_exclusions` | 工厂大门数据集 | 除非研究目标将其作为单独披露模块明确纳入，否则排除资本设备、建筑施工、工厂大门后的配送、安装、使用、维护和生命周期末端。 | `eu-pef-2021`; `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品绒头纱、一次背衬、背衬化学品、适用时的二次背衬、公用工程和包装材料进入地毯制造场址。 |
| starting_condition_role | 进入工厂大门簇绒铺地材料生产的采购上游投入。 |
| product_classification_scope | 仅限 CPC 3.0 子类 27230；上游纱线、聚合物、胶乳、填料、背衬、能源和包装保持各自产品身份。 |
| recursive_input_rule | 作为投入采购的簇绒地毯或簇绒地毯中间品须保持为显式产品投入，并链接自身上游数据集；不得递归应用本 PCR 而把该投入隐藏在当前产出中。 |
| upstream_dataset_requirement | 每个采购材料和能源交换须链接与申报等级、配方、再生含量、地域和交付状态相匹配的数据集。任何不匹配代理均须披露，且不得覆盖前景身份。 |
| disclosure | 声明场址和期间、产品混合、绒头和背衬结构、集成与采购上游操作、涂层配方和固含量、热处理路线、排放控制路线、废次品产出、包装边界、分配方法及所有数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tufting` | 将绒头纱簇绒进一次背衬 | required | CPC 27230 产品始终纳入。 | 形成簇绒纺织表面和一次结构的前景过程。 | 转移到背衬工序的簇绒坯毯实测质量。 |
| `backing_and_curing` | 背衬胶料配制、涂覆或层压、干燥和固化 | required | 纳入实际整体背衬、预涂、层压、泡沫或二次背衬路线；对路线不适用的原子行标记不适用。 | 绒簇固定、背衬施加和热固化的前景过程。 | 转移到后整理的背衬簇绒地毯实测质量。 |
| `finishing_and_packaging` | 后整理、裁切、检验、包装和放行 | required | 始终纳入直至合格产品在工厂大门放行。 | 最终转化和参考产品放行的前景过程。 | 合格成品净质量。 |

### 过程：将绒头纱簇绒进一次背衬（`tufting`）

#### 输入

##### 产品流

###### 聚酰胺 6 绒头纱（`tufting_pa6_yarn`）

仅在声明的 PA6 绒头路线中记录聚酰胺 6 纱线，并与其他纤维等级分开。

- 选定流：Polyamide 6 carpet pile yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期间实测领用质量减去单独记录的退回未用纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-warm-carpet-2016`

###### 聚酰胺 6,6 绒头纱（`tufting_pa66_yarn`）

仅在声明的 PA6,6 绒头路线中记录聚酰胺 6,6 纱线，并与 PA6 分开。

- 选定流：Polyamide 6,6 carpet pile yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期间实测领用质量减去单独记录的退回未用纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-warm-carpet-2016`

###### 聚酯绒头纱（`tufting_polyester_yarn`）

仅在声明的聚酯绒头路线中记录聚酯纱线。

- 选定流：Polyester carpet pile yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期间实测领用质量减去单独记录的退回未用纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-warm-carpet-2016`

###### 聚丙烯绒头纱（`tufting_polypropylene_yarn`）

仅在声明的聚丙烯绒头路线中记录聚丙烯纱线。

- 选定流：Polypropylene carpet pile yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期间实测领用质量减去单独记录的退回未用纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-warm-carpet-2016`

###### 羊毛绒头纱（`tufting_wool_yarn`）

仅在声明的羊毛绒头路线中记录羊毛纱线，并记录实测含湿状态。

- 选定流：Wool carpet pile yarn
- 流属性/单位：Mass / kg
- 数量规则：在已记录含湿状态下的实测领用质量减去退回未用纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-fabric-coating-1998`

###### 机织聚丙烯一次背衬（`tufting_primary_pp_backing`）

机织聚丙烯一次背衬在簇绒时承接绒头纱，须记录其等级和实测单位面积质量。

- 选定流：Woven polypropylene primary carpet backing
- 流属性/单位：Mass / kg
- 数量规则：根据领用面积和产品特定实测单位面积质量得到的背衬实耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-fabric-coating-1998`

###### 簇绒用电力（`tufting_electricity`）

计量电力驱动簇绒机及直接相关的送纱和抽风设备。

- 选定流：Electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：簇绒线分表电量，或按实测机器运行时间及额定负荷分配并与场址总表核对的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 簇绒坯毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_electricity`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未上背衬簇绒坯毯（`tufted_greige_carpet`）

该内部产品是施加背衬胶料之前的簇绒绒头与一次背衬结构实测转移量。

- 选定流：Unbacked tufted greige carpet
- 流属性/单位：Mass / kg
- 数量规则：簇绒至背衬交接点的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个簇绒报告期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tufting_materials`
- 来源：`us-epa-carpet-air-emissions-2002`

##### 废物流

###### 簇绒纱线边角废料（`tufting_yarn_trim_waste`）

该流是申报绒头纤维路线中物理分隔的纱线切边和簇绒开机边角废料。

- 选定流：Tufting yarn trim waste
- 流属性/单位：Mass / kg
- 数量规则：送往声明再利用、回收、处理或处置目的地的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 簇绒坯毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-carpet-process-waste-1989`

##### 基本流

### 过程：背衬胶料配制、涂覆或层压、干燥和固化（`backing_and_curing`）

#### 输入

##### 产品流

###### 未上背衬簇绒坯毯投入（`backing_tufted_greige_carpet`）

未上背衬的簇绒中间品作为单独核对的内部产品进入背衬线。

- 选定流：Unbacked tufted greige carpet
- 流属性/单位：Mass / kg
- 数量规则：背衬线交接点的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个背衬报告期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_materials`
- 来源：`us-epa-carpet-air-emissions-2002`

###### 丁苯橡胶胶乳（`backing_sbr_latex`）

仅对声明的 SBR 背衬配方记录 SBR 胶乳，并分别保留湿质量和固含量。

- 选定流：Styrene-butadiene rubber latex dispersion
- 流属性/单位：Mass / kg
- 数量规则：投入背衬胶料配制的实测湿质量，扣除退回未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_materials`
- 来源：`us-epa-fabric-coating-1998`; `us-epa-warm-carpet-2016`

###### 碳酸钙填料（`backing_calcium_carbonate`）

当申报背衬配方含有碳酸钙时，将其作为单独填料投入记录。

- 选定流：Calcium carbonate filler
- 流属性/单位：Mass / kg
- 数量规则：由批次表、筒仓损失记录和库存变动核对得到的背衬胶料干投料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_materials`
- 来源：`us-epa-fabric-coating-1998`

###### 背衬胶料工艺水（`backing_process_water`）

有意加入背衬胶料或用作工艺投入的水须与清洗废水分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：有意加入背衬配方的计量体积或批次表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_water`
- 来源：`eu-textiles-bat-2022`

###### 机织聚丙烯二次背衬（`backing_secondary_pp`）

仅在申报产品层压机织聚丙烯二次背衬时记录该投入。

- 选定流：Woven polypropylene secondary carpet backing
- 流属性/单位：Mass / kg
- 数量规则：实测耗用面积乘以产品特定实测单位面积质量，并与库存变动核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_materials`
- 来源：`us-epa-fabric-coating-1998`

###### 黄麻二次背衬（`backing_secondary_jute`）

仅在申报产品层压黄麻二次背衬时记录该投入，并说明含湿状态。

- 选定流：Woven jute secondary carpet backing
- 流属性/单位：Mass / kg
- 数量规则：实测耗用面积乘以记录含湿状态下的产品特定实测单位面积质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_materials`
- 来源：`us-epa-fabric-coating-1998`

###### 背衬线用电力（`backing_electricity`）

计量电力驱动胶料混合、涂覆、层压传动、风机和相关控制设备。

- 选定流：Electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：背衬线分表总电量，或按实测运行时间及额定负荷分配并与场址总表核对的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_energy`
- 来源：`eu-textiles-bat-2022`

###### 干燥和固化用天然气（`backing_natural_gas`）

仅在申报干燥或固化路线燃烧天然气时记录该流，并与电力分开。

- 选定流：Natural gas
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量气体体积乘以供应商或计量期间特定低位发热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_energy`
- 来源：`eu-textiles-bat-2022`; `us-epa-fabric-coating-1998`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终后整理前的背衬簇绒地毯（`backed_tufted_carpet`）

该内部产品为转移到后整理之前已干燥或固化的背衬结构。

- 选定流：Backed tufted carpet, unfinished
- 流属性/单位：Mass / kg
- 数量规则：背衬至后整理交接点的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个背衬报告期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_materials`
- 来源：`us-epa-fabric-coating-1998`

##### 废物流

###### 废 SBR 胶乳和碳酸钙背衬胶料（`backing_compound_waste`）

该流是 SBR 胶乳与碳酸钙路线中物理分隔的残余背衬胶料；其他配方须在前景数据包中使用各自单独命名的废物流卡。

- 选定流：Waste SBR-latex and calcium-carbonate backing compound
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收、处理或处置目的地的实测残余质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

###### 涂覆设备清洗废水（`coating_washwater_waste`）

该废物流是背衬胶料和涂覆设备清洗产生并单独收集的水性清洗废水，须声明去向。

- 选定流：Coating-equipment washwater
- 流属性/单位：Volume / m3
- 数量规则：转移到场内或场外废水处理的计量排放量或槽罐体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_wastewater`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 苯乙烯排放至空气（`styrene_to_air`）

当申报 SBR 胶乳涂覆和固化路线识别苯乙烯为相关物质时记录该流；不得以总 VOC 代替此物质行。

- 选定流：Styrene to air
- 流属性/单位：Mass / kg
- 数量规则：生产期间申报大气排放点的实测质量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_air_emissions`
- 来源：`us-epa-carpet-air-emissions-2002`; `eu-textiles-bat-2022`

###### 氨排放至空气（`ammonia_to_air`）

仅在配方或固化化学体系及投入产出清单识别氨为相关物质时记录。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：生产期间申报大气排放点的实测质量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_air_emissions`
- 来源：`eu-textiles-bat-2022`

###### 甲醛排放至空气（`formaldehyde_to_air`）

仅在配方和场址投入产出清单识别甲醛与涂覆或热处理相关时记录。

- 选定流：Formaldehyde to air
- 流属性/单位：Mass / kg
- 数量规则：生产期间申报大气排放点的实测质量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_air_emissions`
- 来源：`eu-textiles-bat-2022`

###### 化石二氧化碳排放至空气（`fossil_co2_to_air`）

当天然气在前景边界内燃烧时，将其产生的化石二氧化碳记录为直接排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：与计量天然气记录核对的烟囱实测质量或经场址核验的直接排放清单量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_air_emissions`
- 来源：`eu-textiles-bat-2022`

###### 碳酸钙粉尘排放至空气（`calcium_carbonate_dust_to_air`）

当填料卸料或搬运向声明空气接收区室产生实测直接排放时记录碳酸钙粉尘。

- 选定流：Calcium carbonate dust to air
- 流属性/单位：Mass / kg
- 数量规则：生产期间申报粉尘排放点的实测质量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 背衬簇绒地毯产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_backing_air_emissions`
- 来源：`eu-textiles-bat-2022`; `us-epa-fabric-coating-1998`

### 过程：后整理、裁切、检验、包装和放行（`finishing_and_packaging`）

#### 输入

##### 产品流

###### 背衬簇绒地毯投入（`finishing_backed_tufted_carpet`）

背衬中间品作为单独核对的内部产品进入后整理。

- 选定流：Backed tufted carpet, unfinished
- 流属性/单位：Mass / kg
- 数量规则：后整理线交接点的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个后整理报告期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`us-epa-carpet-process-waste-1989`

###### 后整理和包装用电力（`finishing_electricity`）

计量电力驱动剪毛、修边、裁切、检验、卷绕或方块处理及包装设备。

- 选定流：Electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：后整理线分表总电量，或按实测运行时间及额定负荷分配并与场址总表核对的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_electricity`
- 来源：`eu-textiles-bat-2022`

###### 低密度聚乙烯包装膜（`packaging_ldpe_film`）

仅在 LDPE 膜用于包裹或保护放行产品时记录，并将其排除在产品净质量之外。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：合格发货批次实测包装膜领用质量减去退回未用膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`

###### 纸板卷芯（`packaging_paperboard_core`）

卷材产品随附纸板卷芯时记录该流，并将其排除在产品净质量之外。

- 选定流：Paperboard roll core
- 流属性/单位：Mass / kg
- 数量规则：随合格卷材提供的卷芯实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`

###### 木制运输托盘（`packaging_wood_pallet`）

木制托盘被消耗或其实测不返还份额跨越工厂大门边界时记录。

- 选定流：Wooden shipping pallet
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量乘以分配给合格发货批次的不返还托盘数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品簇绒铺地材料（`ref_finished_tufted_carpet`）

这是最终检验和验收后的唯一计量参考产出，可拆卸运输包装不计入其净质量。

- 选定流：Carpets and other textile floor coverings, tufted `a01ef31e-fdc6-48be-a681-0a418c22c0cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- 数量规则：实测合格成品净质量，并归一化为恰好 1 kg 参考产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_release`

##### 废物流

###### 成品簇绒地毯边角料（`finishing_carpet_offcuts_waste`）

该流是最终宽度修边、裁切或方块转换产生并物理分隔的复合边角料。

- 选定流：Finished tufted carpet offcuts
- 流属性/单位：Mass / kg
- 数量规则：送往声明再利用、回收、处理或处置目的地的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-carpet-process-waste-1989`

###### LDPE 包装膜废料（`packaging_ldpe_scrap_waste`）

该流是包裹和包装期间产生并单独收集的 LDPE 膜废料。

- 选定流：Low-density polyethylene packaging-film scrap
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收、处理或处置目的地的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

###### 纸板卷芯废料（`packaging_paperboard_scrap_waste`）

该流是包装期间产生并单独收集的纸板卷芯和卷芯裁切废料。

- 选定流：Paperboard roll-core scrap
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收、处理或处置目的地的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品簇绒铺地材料
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 产品系列、生产线和批次 | 首先通过分离产品系列、批次和过程线，并使用分表、批次表和路线特定材料记录来避免分配。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_shared_utilities` | 共用电力、热能、水和处理 | 使用可测量的因果驱动因素分配共用公用工程，例如机器运行时间、计量负荷、烘箱吞吐量、水表或污染物负荷。若无法证明因果关系，则采用有据可查的物理基础并进行敏感性检验。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_multi_product_output` | 同时产生的可销售产出 | 当过程产生一种以上可销售产品且无法细分时，优先采用反映因果关系的物理分配；仅在物理关系无意义时采用经济分配，并披露价格、期间和敏感性。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_waste_and_recycling` | 回收边角料、残余物和包装废料 | 记录实际废物产出及目的地。不得从前景清单扣除避免生产信用，也不得把废物转换为负材料投入；任何回收或资源化应在工厂大门过程之外采用明确声明的下游方法建模。 | `eu-pef-2021` |
| `allocation_no_hidden_loss` | 废次品、返工和内部退回 | 在过程质量核对中保持内部退回可见，并把废次品所耗资源计入合格产品清单；不得在没有可追溯退回记录时通过与采购投入净额相抵来抹去损失。 | `eu-textiles-bat-2022`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tufting_materials` | `tufting` | 绒头纱、一次背衬、坯毯产出和退回未用材料 | 秤重、仓库领用、退回和转移记录 | 材料身份；批号；纤维等级；再生含量；领用质量；退回质量；背衬面积；实测单位面积质量；坯毯转移质量；时间戳 | 经校准秤具和核对后的仓库/生产线记录 | kg 和 m2 | 每批或每班 | 有代表性的生产期间，通常至少连续 12 个月 | 每条纳入的簇绒线 | 按同质产品路线汇总净领用投入和转移产出，再归一化 | 校准记录；库存核对；批次可追溯性；签署的转移记录 |
| `cp_tufting_electricity` | `tufting` | 电力 | 分表或场址总表记录 | 电表 id；起止读数；区间；生产线运行小时；需要分配时的额定负荷；生产路线 | 优先直接分表；否则采用经核对的因果分配 | kWh | 连续或每班 | 与生产相同期间 | 每条纳入的簇绒线 | 汇总计量电力，或用有据可查驱动因素分配经核对的场址总量 | 电表校准；能源核对；运行日志 |
| `cp_backing_materials` | `backing_and_curing` | 坯毯投入、胶乳、填料、二次背衬和背衬成品产出 | 批次表、秤具、槽罐、筒仓、仓库和转移记录 | 材料身份；配方；湿质量；固体分数；填料质量；背衬面积和单位面积质量；退回质量；背衬产品转移质量 | 经校准秤具、槽罐/筒仓读数和批次核对 | kg 和 m2 | 每批或每班 | 与生产相同期间 | 每条纳入的背衬与固化线 | 按声明背衬配方和路线汇总，再归一化 | 批次授权；校准；库存核对；配方修订记录 |
| `cp_backing_water` | `backing_and_curing` | 工艺水 | 流量计或批次表记录 | 仪表 id；批次 id；加入体积；水源；处理等级；时间戳 | 直接计量或经核验的批次容器体积 | m3 | 每批或每日 | 与生产相同期间 | 每条纳入的背衬与固化线 | 有意加入的工艺水与清洗废水分开汇总 | 仪表校准；批次表；水平衡 |
| `cp_backing_energy` | `backing_and_curing` | 电力和天然气 | 电力和燃气计量记录 | 仪表 id；读数；能源单位；气体体积；低位发热值；烘箱小时；吞吐量；路线 | 优先直接生产线计量；否则采用经核对的因果分配 | kWh、m3 和 MJ | 连续或每班 | 与生产相同期间 | 每条纳入的背衬与固化线 | 各载体分开保存；使用期间特定低位发热值换算燃气 | 仪表校准；供应商声明；能源平衡；烘箱日志 |
| `cp_backing_wastewater` | `backing_and_curing` | 涂覆设备清洗废水 | 流量计、槽罐转移和废水记录 | 来源操作；体积；pH；适用时的固体或 COD；目的地；转移日期 | 转移时计量排放量或经校准槽罐体积 | m3 | 每次清洗或排放事件 | 与生产相同期间 | 每个纳入的涂覆设备清洗与排放点 | 仅汇总单独识别的涂覆设备清洗废水流 | 仪表校准；转移联单；取样时的实验室监管链 |
| `cp_backing_air_emissions` | `backing_and_curing` | 物质特定直接大气排放 | 烟囱测试、连续监测或经核验的设施排放记录 | 物质；排放点；接收区室；取样期间；气体流量；浓度；质量排放；生产吞吐量；控制状态 | 适用的标准化测量或经核验的场址清单 | kg | 每次规定监测事件并年度核对 | 有代表性的正常运行和相关最高排放状态 | 每个相关涂覆、固化、填料搬运或燃烧排放点 | 分别计算或记录每种物质质量并按背衬产出归一化 | 取样计划；实验室报告；监测 QA；控制装置日志；生产关联 |
| `cp_finishing_materials` | `finishing_and_packaging` | 背衬投入和包装材料 | 秤重、包装领用、退回和发运记录 | 背衬投入质量；膜质量；卷芯质量；托盘数量和质量；退回包装；发货 id | 经校准秤具和核对后的包装/发运记录 | kg 和件 | 每班或每次发货 | 与生产相同期间 | 每条纳入的后整理与包装线 | 耗用或不返还包装与产品净质量分开汇总 | 秤具校准；库存核对；发运记录；托盘返还台账 |
| `cp_finishing_electricity` | `finishing_and_packaging` | 电力 | 分表或场址总表记录 | 电表 id；读数；区间；设备小时；合格产出 | 优先直接分表；否则采用经核对的因果分配 | kWh | 连续或每班 | 与生产相同期间 | 每条纳入的后整理与包装线 | 汇总计量电力，或用有据可查驱动因素分配经核对总量 | 电表校准；能源核对；设备日志 |
| `cp_final_product_release` | `finishing_and_packaging` | 合格成品参考产品 | 最终秤重、面积、检验和放行记录 | 产品代码；绒头和背衬限定信息；合格质量；合格面积；废次品质量；含湿状态；检验结论；包装质量；时间戳 | 经校准的成品称重和质量放行 | kg 和 m2 | 每卷、每批方块或每次发货 | 与生产相同期间 | 每条纳入的后整理与包装线 | 汇总合格净质量；排除可拆卸运输包装；单独保留废次品质量 | 秤具校准；检验记录；放行授权；质量-面积核对 |
| `cp_waste_records` | all | 每个单独命名的废物产出 | 过磅单、容器日志和转移联单 | 废物身份；来源过程；质量；污染状态；目的地；处理代码；日期 | 来源处直接称重或经核验转移秤重 | kg | 每个容器或每次转移 | 与生产相同期间 | 每个纳入的场址及废物储存或转移点 | 分别汇总每个物理废物流及目的地；不做避免负荷净额抵扣 | 过磅单；有资质的转移联单；库存平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单交换 | 归一化交换量 = 报告期交换量 / 报告期合格成品净质量 | 原始交换量；`cp_final_product_release` 的合格净质量 | 每 1 kg 合格成品的交换量 | `iso-14044-2006`; `eu-pef-2021` |
| `calc_area_to_mass` | 按面积或卷记录的产品和背衬 | 材料质量 = 实测耗用面积 × 产品或批次特定实测单位面积质量；保留两项原始测量 | 耗用面积；实测单位面积质量 | kg 材料投入或产品产出 | `iso-14044-2006` |
| `calc_latex_dry_solids` | SBR 胶乳和湿背衬胶料 | 干固体 = 湿质量 × 实测或供应商声明固体分数；湿质量和水平衡作为单独字段保留 | 湿质量；固体分数 | kg 背衬干固体 | `us-epa-fabric-coating-1998` |
| `calc_gas_energy` | 计量天然气 | 能量 = 修正气体体积 × 报告期供应商低位发热值 | 修正气体体积；低位发热值 | MJ 天然气投入 | `eu-textiles-bat-2022` |
| `calc_process_mass_reconciliation` | 簇绒、背衬和后整理 | 分别核对实测投入、中间转移、合格产出、内部退回、废次品、废物和实测排放；调查并披露残差，不得强行归零 | 所有过程材料记录 | 过程特定质量平衡残差及解释 | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及代表混合 | 为每条同质路线保留必需限定信息和生产占比。除非权重有据可查，否则不得合并绒头纤维、背衬化学体系、产品形式或集成上游操作不同的产品。 | 产品规范；物料清单；配方；生产和放行记录 |
| `dq_temporal_representativeness` | 所有前景交换 | 使用有代表性的生产期间，通常至少连续 12 个月。仅在说明原因、覆盖运行状态并披露季节性、开机和停机处理时，才可采用较短批次。 | 仪表日期；生产日历；批次日志；例外理由 |
| `dq_measurement_traceability` | 质量、面积、水和能源记录 | 使用经校准或核验的仪器，并保留原始读数、单位、换算系数和分配驱动因素。 | 校准证书；仪表标识；原始日志；核对记录 |
| `dq_material_balance` | 每个 required 过程 | 核对材料投入、中间转移、产出、退回、废次品和废物。调查并披露无法解释的残差；不得虚构平衡交换。 | 批次和库存核对；转移记录；废物联单；残差审查 |
| `dq_emission_relevance` | 大气、废水和废物排放 | 建立并定期审查场址投入产出清单。对识别为相关的每种物质记录适用测量和接收区室；缺失必须以有据可查的不适用说明，不能假定为零。 | 化学品清单；排放点图；监测计划；实验室或烟囱测试报告；BAT 适用性审查 |
| `dq_upstream_matching` | 链接的采购投入数据集 | 匹配材料等级、配方、再生含量、地域和交付状态。披露每个代理、时间差和缺失供应商数据集。 | 供应商规范；数据集元数据；代理登记表 |
| `dq_completeness` | 前景数据包 | 纳入所有 required 过程和每个适用原子行；报告已接受投入、已执行检查、跳过检查和未解决流身份。 | 完整性矩阵；校验报告；manifest 审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 UUID `a01ef31e-fdc6-48be-a681-0a418c22c0cc`、Product flow、CPC 3.0 子类 27230、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | 参考产品 | 缺少任何必需绒头、背衬、形式、单位面积质量、过程路线、地域、期间、含湿或包装边界限定信息时，符合性失败。 | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `validate_process_coverage` | 过程图 | 要求 `tufting`、`backing_and_curing` 和 `finishing_and_packaging`；每个条件材料或排放行均须明确路线适用性。 | `us-epa-fabric-coating-1998`; `us-epa-carpet-air-emissions-2002` |
| `validate_atomic_flows` | 过程清单 | 任何选定流为集合、选择器或组合交换的流卡均失败。电力、天然气、每种材料、每个包装组件、每个废物流和每种排放物质必须保持为单独行。 | `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | 清单数量 | 每个数量均要求链接采集协议和真实前景记录。任何 AI 估算或无来源的通用地毯数量均不符合。 | `eu-textiles-bat-2022`; `eu-pef-2021` |
| `validate_intermediate_handoffs` | 过程接口 | 要求相同范围的簇绒坯毯产出与背衬投入核对、背衬地毯产出与后整理投入核对，并分别解释损失和库存变化。 | `eu-textiles-bat-2022` |
| `validate_mass_and_energy_separation` | 平衡 | 要求参考产品净质量排除可拆卸包装；要求每个能源载体、湿/干基准、退回、废次品、废物和直接排放均可单独追溯。 | `eu-textiles-bat-2022`; `iso-14044-2006` |
| `validate_allocation` | 共用操作 | 在分配前未尝试细分和因果归属，或缺少分配基础、驱动因素、期间和敏感性时，校验失败。 | `iso-14044-2006`; `eu-pef-2021` |
| `validate_uuid_acceptance` | 含 UUID 的行 | 仅当 Tiangong 以公开 `state_code=100` 直接读取确认精确流语义、流类型、参考属性、单位基础和必需限定信息时接受 UUID；否则逐行拒绝该 UUID，并在审查元数据中保留该行身份缺口。 |  |
| `validate_data_quality_disclosure` | 发布数据包 | 要求披露时间覆盖、场址范围、仪器证据、质量平衡残差、代理使用、缺失测量、排放适用性和每项跳过检查。 | `eu-textiles-bat-2022`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明簇绒纺织铺地产品或生产混合的工厂大门前景生产数据集。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 为与声明绒头、背衬、形式、路线、地域和期间相匹配的产品构建前景数据包及下游 process 或 lifecyclemodel 投影。 |
| excluded_use | 在没有单独核验的面积与使用寿命功能单位时作铺地材料服务、耐久性或使用阶段性能比较声明；代理机织、打结、植绒、针刺、毡制或非纺织铺地材料；以及必需身份或路线字段缺失时的使用。 |
| required_metadata | PCR id；参考 UUID；CPC 坐标；所有参考限定信息；场址和地域；报告期间；产品混合权重；过程覆盖；集成上游操作；涂层配方和固含量；能源载体拆分；包装边界；分配方法；链接的上游数据集；审查和校验状态。 |
| required_quality_disclosure | 仪器和校准证据；时间和场址代表性；原始记录覆盖；质量平衡残差；分配驱动因素；代理登记表；废物目的地；排放相关性和测量方法；未解决 UUID；已执行和跳过的检查。 |
| update_trigger | 绒头纤维或再生含量、背衬化学体系或结构、产品形式、集成染色或后整理、能源或固化路线、排放控制、分配驱动因素、场址地域、代表产品混合、Tiangong 身份、来源方法或重大数据缺口发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 27230, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-13） | 官方产品类别范围和 CPC 身份。 |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC131874, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-13） | 纺织过程边界、涂覆和层压背景、投入产出清单及环境管理。 |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13） | 投入产出、水和能源清单；涂覆、层压和热处理排放；废水、废物和监测规则。 |
| `us-epa-fabric-coating-1998` | official_guidance | United States Environmental Protection Agency, Fabric and Textile Coating Operations: Background Information for Promulgated Standards, EPA-453/R-98-002b, 1998. https://www3.epa.gov/airtoxics/coat/fabric/pic-fabr.pdf（检索于 2026-08-13） | 簇绒地毯结构、一次背衬、SBR 胶乳、碳酸钙填料、二次背衬、涂覆、层压和固化过程分解。 |
| `us-epa-carpet-air-emissions-2002` | official_guidance | United States Environmental Protection Agency, Air Emissions from Carpet Manufacturing Processes, 2002. https://www3.epa.gov/ttnchie1/conference/ei11/toxics/mulholland.pdf（检索于 2026-08-13） | 簇绒和背衬过程顺序及物质特定大气排放相关性。 |
| `us-epa-carpet-process-waste-1989` | official_guidance | United States Environmental Protection Agency, carpet dyeing and finishing process and waste-stream description, archived technical report SDMS 549967. https://archive.epa.gov/region1/foia/web/pdf/549967.pdf（检索于 2026-08-13） | 簇绒、背衬、布边修整、后整理和单独记录的过程废物流。 |
| `us-epa-warm-carpet-2016` | official_guidance | United States Environmental Protection Agency, WARM Background Document for Carpet. https://19january2017snapshot.epa.gov/www3/warm/pdfs/Carpet.pdf（检索于 2026-08-13） | 地毯组件和绒头纤维身份及工厂大门材料分解。 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines; confirmed current in 2022. https://www.iso.org/standard/38498.html（检索于 2026-08-13） | 目标与范围、清单、分配、报告、审查和数据质量原则。 |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-13） | 功能单位和参考流、系统边界、企业特定数据、分配、回收披露和数据质量规则。 |
