---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.adhesive-bonded-cotton-clincher-bicycle-tyre
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 胶粘棉基开口式自行车充气胎制造

## 1. 范围与适用性

本PCR覆盖完整棉基开口式自行车新充气胎的实物制造：接收未涂覆包芯机织布、湿态乳胶涂覆制剂、芳纶胎圈帘线、胎圈区增强条和单独成型的天然橡胶/二氧化硅胎面帽；涂覆并干燥织物、裁切和定向铺设胎体、成圈并包覆可折叠胎圈、采用实际胶粘剂贴合胎面帽、调理、检验和包装。不采用整胎模内硫化，也不设胎下防刺带。本路线是独立制造商证据支持的技术综合，不能声称同一SKU证明每个单元操作。[vittoria-casing-2023; challenge-handmade; veloflex-record]

排除摩托车胎、整胎模压硫化尼龙/子午线胎、实心/缓冲胎、内胎、含内置内胎的缝合封闭管胎、无内胎就绪阻隔结构、单独销售的胎面帽或胶料生产、翻新和购买完整成胎贴标签。“开口管胎”在此指开口胎，不是封闭管胎。消费者另用的内胎和轮辋不随参考产品供货。制造参考不提供里程、滚阻、气压或安全审批。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.adhesive-bonded-cotton-clincher-bicycle-tyre |
| classification_refs | CPC3.0 36112; narrower |
| covered_products | 完整胶粘乳胶涂覆棉/聚酯包芯开口胎，芳纶可折叠胎圈、单独成型胎面帽及胎圈区增强条，无防刺带。 |
| excluded_products | 摩托车胎、尼龙整胎模压硫化胎、封闭管胎、无内胎就绪胎、实心胎、内胎、翻新胎、独立胎面或仅改标签。 |
| representative_product | 棉基开口式自行车胎，声明聚酯芯及芳纶胎圈；不移植标称质量或气压。 |
| production_route | 预制组分经乳胶涂覆、裁切/胎圈成型、胶粘装配、干燥/调理、首次质量放行及包装；实际购入组分制造保留在上游。 |
| market_state | 工厂完整新胎，按实际干燥/调理放行状态，净质量排除内胎、轮辋及运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造完整已声明开口式自行车胎，后续另配内胎安装。 |
| How much | 首次正向制造质量放行的1千克轮胎净质量；Q为同路线/产品/状态匹配批群首次新增放行的验收净质量，不是发货质量。 |
| How well | 符合实际声明图纸、胎圈接口、材料、尺寸、胶粘验收及成品质量判据；不设通用数值规格。 |
| How long or cycle | 一次制造及首次质量放行周期；不推定寿命或更换等价。 |
| reference_flow_link | finished_tyre |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 摩托车或自行车用的橡胶新充气轮胎 `433f8624-3103-4661-918b-2093658bda5f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商/场址与期间; 产品型号与尺寸; 棉/聚酯包芯组成及含水率; 芳纶胎圈及增强条身份; 实际胎面帽和胶粘制剂载体/固含量; 无防刺带且不随供内胎/轮辋; 胶粘路线及上游胎面帽任何硫化; 首次放行门及Q批群; 图纸/胶粘/质量验收; 在制品及成品库存结转负荷; 分配计量及实际仓储/包装/发运范围 |

具体数据集必须逐项声明限定信息。原生流仅提供宽泛身份：生产混合，在工厂；成品，已制造；未声明地理/供货位置、CAS、配方或等级。不得凭该UUID推定中国、香港或其他供货位置及工厂配方。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明水分/调理状态计量完整验收胎净质量，排除另用内胎、轮辋和运输包装。件数换算须采用该尺寸/配置可追溯净重，不能借用其他SKU质量。 |
| wet_supply | all material rows | Mass | kg | 整份湿制剂输入只计一次；橡胶、固体、防腐剂、溶剂及载水检测量是组成子账，不能重复作为外部输入。来料与放行水分分别记录。 |
| raw_then_report | all inventory rows | Actual numerator property | declared row unit | 采集保留未归一化期间原量及期初末在制品和结转负荷。仅report_once将应归属分子A_i除以匹配的正首次放行Q。速率可乘实际持续时间形成原量；已累计体积不能再乘时间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际购入未涂覆布、湿制剂、芳纶帘线、增强条和成型胎面帽，其供应商制造置于上游；不以购入成胎起始。 |
| starting_condition_role | foreground_boundary |
| product_classification_scope | CPC3.0 36112 narrower; 仅胶粘棉基开口胎 |
| recursive_input_rule | 购入成胎不得作为本制造路线递归投入；内部退回/返工保留身份及结转负荷，不产生新增Q。 |
| upstream_dataset_requirement | 每件独立供货制品及湿制剂的实际供应商/路线/配方与运输，含胎面帽混炼/成型/任何硫化及保留涂层组分。 |
| disclosure | 一个工厂综合制造过程，保留分工序子账；声明纳入的储存、干燥/调理、包装、搬运及发运。生产放行与成品仓库/发货分账；合并时抵消内部交接。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | all inventory rows | 纳入实际涂覆、布裁切/定向、胎圈成型/包覆、胶粘贴合、干燥/调理、验收、物料储存、包装、搬运、失败批、检验样品、辅助服务、废物和实测排放。不得因某批零产出删除真实负荷。 | vittoria-casing-2023; challenge-handmade |
| b_supplied | all material rows | 购入配混制品/制剂以整份商业输入及其供应商负荷记录。场内混炼不属于本有限起始条件，除非已表示每种独立采购原料及其真实能耗/损耗。具体数据集使用前，每种实际额外化学品、燃料、制冷剂、包装组件、不同废物组成及基本排放物种均须独立设卡。 |  |
| b_gate | finished_tyre | Q为新增首次质量放行验收净质量，不是销量。同批Q的期末成品库存不能再次加入生产输出。期初末在制品及结转负荷须核销。成品仓库收发及期初末库存另账；扩展范围时按批群保留真实库存停留、包装、搬运/发运及结转负荷，抵消内部交接，不能默认放行等于发货。退回/再验收不创造新增产量。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tyre_manufacture | 涂覆、胎圈成型、胶粘装配、调理及首次放行 | required | 完整声明路线及场址，分工序计量并保留全部失败批 | foreground | finished_tyre |

### 过程：胶粘棉基开口胎制造（`tyre_manufacture`）

#### 输入

##### 产品流

###### 包芯胎体布（`carcass_cloth`）

记录一种实际采购织物的棉/聚酯组成、纱线结构、整理剂及含水率。裁切、斜向铺层及乳胶涂覆属于前景，不能用购入成胎代替。

- 选定流: 棉/聚酯包芯机织胎体布
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源: vittoria-casing-2023; veloflex-record

###### 湿态乳胶涂覆制剂（`latex_coating`）

称量整份供货湿制剂，包括水、防腐剂及其他已声明组分。橡胶和载水的检测量是子账，不另列重复采购。同一制剂兼作胶粘剂时按用途拆分实际领用，不重复计入采购。

- 选定流: 天然橡胶乳胶涂覆制剂
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源: vittoria-casing-2023; challenge-handmade

###### 芳纶可折叠胎圈帘线（`bead_cord`）

记录供货芳纶帘线及其实际上浆/涂层，并采集裁切、成圈和包覆工序。不推定钢带束层或钢胎圈用量。

- 选定流: 芳纶胎圈帘线
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源: veloflex-record

###### 胎圈区侧壁增强条（`bead_strip`）

一种单独供货的实物增强条，依据供应商BOM声明实际纺织/聚合物组成及尺寸。这是胎圈区保护，不是推定的胎下防刺带；不得虚构专有SPS组成。

- 选定流: 胎圈区侧壁增强条
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源: veloflex-record

###### 单独成型胎面帽（`tread_cap`）

一种整份供货胎面帽制剂/制品。上游数据须覆盖实际橡胶等级、填料、油剂、化学品、混炼、成型、任何硫化及损耗；前景不得再次采购其组分。若胎面在场内混炼，使用前必须补齐独立原料交换及过程记录。

- 选定流: 天然橡胶/二氧化硅轮胎胎面帽
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源: vittoria-casing-2023; challenge-handmade; veloflex-record

###### 整份购入贴合胶粘剂（`bond_adhesive`）

按湿质量、固含量和完整载体组成记录一种实际供货胶粘制剂。不能默认水性与含溶剂配方可互换。每份额外独立采购制剂、清洗剂或添加剂各设原子行；实测载体排放及残渣分别作为输出。

- 选定流: 轮胎胎面帽贴合胶粘剂制剂
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源: vittoria-casing-2023; challenge-handmade

###### 工厂电力（`electricity`）

纳入涂覆/裁切/胎圈作业、涂胶、干燥通风、调理、检验、压缩空气、原料储存和包装/搬运负荷，保留失败及零产出期间。计量实际电量，不声称碳中和或可再生电力结构。

- 选定流: 电力
- 流属性/单位: 电力 / kWh
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源:

###### 购入干燥热（`purchased_heat`）

仅记录真实输入热量，区别于已计电力或燃料转化的内部热。实际场内燃料、蒸汽、制冷剂泄漏或购入压缩空气须在使用数据集前分别设具体交换，不能用泛能源载体替代。

- 选定流: 外购过程热
- 流属性/单位: 能量 / MJ
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源:

###### 另加过程及清洗水（`process_water`）

另加水只跨界计入一次；供货乳胶或胶粘剂内的水不是第二份供水。采用实测质量，或累计体积乘独立实测密度并注明温度与单位换算；累计体积不得再乘时间。

- 选定流: 过程用水
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_materials`
- 来源:

###### 瓦楞运输纸箱（`carton`）

记录单种纸箱实际组成、复用次数和皮重；纸箱质量不进入轮胎净质量Q，但保留上游及包装负荷。

- 选定流: 瓦楞纸板运输纸箱
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packing`
- 来源:

###### 纸质识别标签（`label`）

一种实际供货纸标签及其所带胶层。离型底纸单独记废物；贴标签不能代替完整轮胎制造。

- 选定流: 自粘纸质轮胎标签
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packing`
- 来源:

###### 聚丙烯纸箱捆扎带（`strap`）

仅在实际使用时记录该捆扎带，不与薄膜、纸箱或标签合并；其他包装组件各设独立行。

- 选定流: 聚丙烯包装捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packing`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次质量放行完整轮胎（`finished_tyre`）

唯一终端参考：完整胶粘棉基自行车开口胎，带芳纶可折叠胎圈，不随供防刺带、内胎、气门或轮辋。原生身份是生产混合，在工厂；成品，已制造，未声明地理/供货位置、CAS、配方或等级。宽泛名称不能建立供应商清单，也不能把方法扩展至摩托车胎、管胎、模压尼龙胎或实心胎。

- 选定流: 摩托车或自行车用的橡胶新充气轮胎 `433f8624-3103-4661-918b-2093658bda5f`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 固定值（`fixed_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_release`
- 来源: vittoria-casing-2023; challenge-handmade; veloflex-record

##### 废物流

###### 未涂覆胎体布边角料（`fabric_trim`）

未涂覆布边角料须与乳胶涂覆边料及其他组成废物分开。外部回收是处理路线，不能自动产生免费联产品抵扣。

- 选定流: 棉/聚酯胎体布边角料
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 乳胶涂覆胎体边角料（`coated_trim`）

计量包括涂层固体及残留水的整份复合废物，不再把其织物和橡胶重复作为额外废物。

- 选定流: 乳胶涂覆棉/聚酯胎体边角料
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 芳纶帘线边角料（`aramid_trim`）

计量不合格长度及成圈边角料，并保留实际涂层。

- 选定流: 芳纶帘线边角料
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 胎圈增强条边角料（`strip_trim`）

保留实际供货增强条组成和去向，与胎体废料分别核算。

- 选定流: 胎圈区增强条边角料
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 胎面帽修整料（`tread_trim`）

实际多余胎面及报废胎面帽；未使用胎面帽报废也不能删除其上游制造负荷。

- 选定流: 天然橡胶/二氧化硅胎面帽修整料
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 废乳胶涂覆残渣（`latex_residue`）

记录这一制剂的废槽液、结皮和受污染湿残渣及其固体/水分；不同受污染组成须分设交换。

- 选定流: 废天然橡胶乳胶涂覆制剂
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 废贴合胶粘剂（`adhesive_residue`）

湿态胶粘剂残渣及其实际载体组成，区别于涂覆织物和清洗废水。

- 选定流: 废轮胎贴合胶粘剂制剂
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 报废完整轮胎（`rejected_tyre`）

包括失败装配和破坏性检验样品。报废品或退回后重新验收的原产品不能产生首次验收产量；内部修复物保留全部负荷并作为内部流转。

- 选定流: 报废胶粘自行车轮胎
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 外送清洗废水（`wastewater`）

一种实际收集废水，记录湿质量、固体、采样组分和处理去向；不能当作向水体的基本排放。COD是质量指标，不能替代物种质量或闭合。若使用溶剂清洗，必须另设该废液行。

- 选定流: 乳胶污染清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 废纸箱板（`carton_waste`）

实际来料与包装纸箱废料，复用及随产品出厂包装分别记账。

- 选定流: 废瓦楞纸板
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 标签离型底纸（`liner_waste`）

一种实际纸质离型底纸及其涂层；若为塑料底膜，须另设具体行。

- 选定流: 废纸质标签离型底纸
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

###### 废聚丙烯捆扎带（`strap_waste`）

实际损坏及修剪捆扎带；随产品出厂的有用捆扎带记包装子账。

- 选定流: 废聚丙烯包装捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residuals`
- 来源:

##### 基本流

###### 实测向空气蒸发水（`water_vapour`）

计量或独立证实载水、清洗及调理蒸发量；区别于保留水分和液体排出。干燥是相变，不能虚构反应生成水。不得将未知反应水与未知出口同时拟合同一残差。

- 选定流: 向空气排放的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emissions`
- 来源:

###### 实际防腐乳胶释放的氨（`ammonia_air`）

仅适用于实际含氨涂覆剂/胶粘剂且有释放证据的情形。独立量化NH3，不能用水或COD推定，不能认为所有乳胶都含氨，也不能将真实实测释放归零。其他实际有机物种各设独立命名排放行。

- 选定流: 向空气排放的氨
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q；完整匹配原始分子仅在第8节定义的报告操作中除一次。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emissions`
- 来源:

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_stages | all inventory rows | 优先按产品/路线专用原始计量、称量和运行记录。共用涂覆、干燥/通风及工厂服务采用适合该项服务并有因果证据的机时、占用能力、实测能耗或物料处理量分配。成功及失败/零产出运行均记录驱动量，不得用验收产量份额删除失败负荷。 | jrc-ilcd-allocation-2010 |
| a_no_credit | all waste rows | 废料、退回、边角料或废水不自动获得联产品或避免生产抵扣，保留实际废物处理负荷。真正销售联产品须在使用数据集前单独记录并论证分配。内部返工为循环而非额外产品；外部输入只计一次，每次额外加工负荷均计入。 |  |
| a_once | all inventory rows | 先核销工序/库存原账并将原始负荷归属同一首次放行批群。期初在制品带入负荷保留，期末在制品残存负荷按可追溯单件/批群身份结转。失败负荷归属责任生产批群或明确结转库存，不能消失。之后仅应用一次report_once；Q为零不能归一化，也不代表零负荷数据集。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

采集只保留未除的期间原量和完整库存/在制结转负荷。aggregation_rule仅声明最终报告基准，引用与卡片及report_once完全相同的一次操作，不在采集端执行A_i/Q。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | tyre_manufacture | 首次放行产出及库存核销 | foreground_record | 质量负责人及库存保管人保留唯一轮胎/批次身份、产品/路线/状态、净称重、首次验收时间、报废/破坏样品、退回/返工、在制品期初末质量/组成/结转负荷、成品期初末收发/结转负荷、放行和发运链接。 | 经校准称量及签署首次质量放行台账；去重退回与再次验收。生产Q与仓库出库分开，只记录原始合计，不除以Q。 | kg | 逐批/逐运行并核销报告期间 | 同一完整匹配期间及在制品/成品期初末结转负荷 | 声明工厂及计量服务/批群范围 | 每 1 kg 参考流 | 负责人签署记录、校准/检测、供应商BOM、表计/库存核销及全部失败保留 |
| cp_materials | tyre_manufacture | 原料及制剂领用 | foreground_record | 物料负责人保留供应商/BOM/批号、完整商业制剂身份、采购及领用湿质量、固体/载体检测、密度/温度、期初末原料及在制品、退料、失败运行、复用槽液和负荷转移身份。 | 称量原始领退料并核销完整期间物料账。库存变化和复用部分保留记录，不重复采购。检测子账不增加外部输入；采集端不执行A_i/Q。 | kg | 逐批/逐运行并核销报告期间 | 同一完整匹配期间及在制品/成品期初末结转负荷 | 声明工厂及计量服务/批群范围 | 每 1 kg 参考流 | 负责人签署记录、校准/检测、供应商BOM、表计/库存核销及全部失败保留 |
| cp_energy | tyre_manufacture | 能源、通风及共用服务 | foreground_record | 公用工程负责人保留工序表计起止、电量kWh、购入热MJ、运行时间戳、按产品的真实机时/服务驱动量、失败、空载/零产出期间及仓储/发运批群归属。 | 读取真实表计和归属服务记录；仅真实速率乘持续时间。电转热不是再次输入热。分配前保留包括干燥及全部实际场址服务的期间原能量，不归一化。 | kWh; MJ | 逐批/逐运行并核销报告期间 | 同一完整匹配期间及在制品/成品期初末结转负荷 | 声明工厂及计量服务/批群范围 | 每 1 kg 参考流 | 负责人签署记录、校准/检测、供应商BOM、表计/库存核销及全部失败保留 |
| cp_packing | tyre_manufacture | 包装、搬运及可选发运账 | foreground_record | 包装/物流负责人保留各包装SKU/组成/皮重、领用、复用、期初末库存、包装轮胎链接、存储时间、搬运工作、发货质量、承运/服务身份及结转负荷。 | 逐包装组件称量；轮胎净重与随附包装分开。通过独立生产/仓库账保留声明范围内真实包装、储存、搬运及发运负荷；合并时抵消内部交接。只保留原始分子。 | kg | 逐批/逐运行并核销报告期间 | 同一完整匹配期间及在制品/成品期初末结转负荷 | 声明工厂及计量服务/批群范围 | 每 1 kg 参考流 | 负责人签署记录、校准/检测、供应商BOM、表计/库存核销及全部失败保留 |
| cp_residuals | tyre_manufacture | 原子废物及报废账 | foreground_record | 废物负责人保留各废物身份/组成、湿干质量及水分、去向、报废检验样品、实际退回/返工、场内复用、外部处理、转移单及库存/在制负荷链接。 | 完整期间逐真实废物称量。内部循环保留重复加工能耗并核销，不能重复外部供料。每个失败批及负荷均保留，不因无销售推定零废物；不归一化。 | kg | 逐批/逐运行并核销报告期间 | 同一完整匹配期间及在制品/成品期初末结转负荷 | 声明工厂及计量服务/批群范围 | 每 1 kg 参考流 | 负责人签署记录、校准/检测、供应商BOM、表计/库存核销及全部失败保留 |
| cp_emissions | tyre_manufacture | 实际物种、相变水及物料闭合 | foreground_record | 环境负责人保留实际湿制剂组成/SDS/检测、独立支持的排放物种、进出口浓度及干湿气流、累计体积或真实速率/持续时间、空白、温度、保留水分、废水及相/元素账。 | 对存在的物种及水分别独立计量，包括捕集部分及处理出口。累计体积乘一致单位浓度形成原始质量，不能再乘时间。不能用通用VOC充当物种或以COD换算；不得虚构反应水闭合。使用数据集前补齐实际命名物种行。 | kg | 逐批/逐运行并核销报告期间 | 同一完整匹配期间及在制品/成品期初末结转负荷 | 声明工厂及计量服务/批群范围 | 每 1 kg 参考流 | 负责人签署记录、校准/检测、供应商BOM、表计/库存核销及全部失败保留 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | q_i = A_i / Q；A_i为实际单位换算、原始服务分配及同首次放行批群在制品期初末结转负荷核销后的原始应归属交换，包括失败及所有保留负荷；Q为唯一正首次验收轮胎净质量kg，绝不是发货量，也不是Q加同批群期末成品库存。本规则是唯一归一化；卡片数量规则与协议汇总仅引用同一次报告操作，不能先后重复除。参考行是1千克。 | A_i; Q; cp_release; cp_materials; cp_energy; cp_packing; cp_residuals; cp_emissions | q_i |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all material rows | 供应商全名/等级/制剂及湿态组成须匹配路线；宽泛原生身份不是配方或provider兼容证明。区分整份供货制剂与场内单独原料。 | 供应商BOM/SDS、检测、交付及批次记录 |
| dq_mass | all inventory rows | 按匹配边界、独立水/物种证据闭合实物及元素账：外部湿输入加期初物料/在制品，等于验收胎净重、真实废物/排放、期末物料/在制品及随附包装，并抵消内部转移。包装单独建质量账。解释残差不确定性，不能拟合未知出口。 | 校准质量账、完整组成及库存/相/元素工作表 |
| dq_completeness | all inventory rows | 不能遗漏整份失败批、零产出运行、返工负荷、真实辅助投入、排放物种或库存结转负荷。明确not_applicable须有不存在证据；未知不是零。 | 完整期间台账及工序/负责人完整性复核 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_tyre | 要求唯一终端产品输出以finished_tyre链接参考UUID，并在双语中采用1千克首次质量放行净重基准；逐项要求限定信息及准确贴合路线。内胎、胎面帽、实心胎或退回品再次验收不得作为终端参考。 |  |
| v_sources | all inventory rows | 核对原件限制、BOM、原生完整名称/类型/属性/单位链及任何路线/地理/等级冲突。独立来源不能将制造商示例变成通用配方、实测投入、寿命或排放因子。 | vittoria-casing-2023; challenge-handmade; veloflex-record |
| v_ledger | all inventory rows | 核对期间原始输入/输出、分立生产与仓库账、正且不重复的Q、完整在制/库存结转负荷、失败、单位换算、元素/相变水/物种闭合、明确共用服务分配及仅一次report_once除法。缺少测量或未解释闭合属于不完整，不能虚构为零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 按每千克首次放行轮胎净重提供供应商特定完整开口胎制造清单，并连接实际供货投入上游。 |
| allowed_use | 仅声明的棉基胶粘开口胎路线/产品/状态/场址范围；后续自行车装配可采用实测轮胎质量。 |
| excluded_use | 通用摩托车/自行车覆盖、轮胎服务等价、安全审批、气压推荐、未采集工厂清单或自动接受映射。 |
| required_metadata | 全部必需限定信息；门/批群；实际来源/provider及上游胎面帽硫化；完整湿态BOM、协议负责人、库存和分配记录。 |
| required_quality_disclosure | UUID/provider缺口、原件限制、已测和缺失数量、库存结转负荷、共用服务分配、物种/闭合不确定性及科学审查状态。 |
| update_trigger | 胎体、胎圈、胎面帽/胶粘制剂、整胎硫化、内胎/防刺带结构、起始条件、参考门或新增材料/物种发生改变，须复核适用性并更新投影。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| vittoria-casing-2023 | literature | Ken Avery, Vittoria White Paper03, February2023, Bicycle Tire Casing Materials and Processes, printed pp.3 and6 (PDF pp.4 and7). https://mediahub.vittoria.com/m/9b1d26a647c16851/original/White-Paper-03-English-Version.pdf | 开口胎的胎圈接口与管胎接口不同；棉布乳胶浸渍后胶粘胎面帽。棉胎也能采用硫化路线：这里只采用非整胎硫化贴合分支。不提供配方、供货数量、干燥制度、寿命或排放因子。 |
| challenge-handmade | handbook | Challenge North America, Handmade Tires, undated manufacturer technical page. https://us.challengetires.com/pages/tech-handmade | 独立制造商对织物胎体、乳胶涂层及天然橡胶胎面胶粘贴合的说明。排除营销性环境/性能比较、通用尼龙组成和线密度说法；不声称全供应链无硫化。 |
| veloflex-record | handbook | Veloflex, Record Open Tubular, manufacturer article technical details. https://www.veloflex.it/en/clincher-tire-record.html | 具体开口胎示例采用聚酯/棉包芯胎体、芳纶可折叠胎圈、天然橡胶/二氧化硅胎面及胎圈区侧壁保护。技术表注明无防刺带，优先于通用RKB介绍。不移植质量、气压、寿命或全轮辋兼容声明，也不证明所有工序来自同一SKU。 |
| jrc-ilcd-allocation-2010 | official_guidance | 欧盟委员会JRC，ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance，2010年3月第一版，7.9.3节，印刷257–258页（PDF277–278）；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅在选择分配而非替代的归因型范围内，以虚拟细分及逐交换的决定性物理因果关系，支持专用原始表计/运行记录及共享涂覆、干燥通风、工厂服务的专属驱动分配。制造来源支持结构，不提供这一LCA层级。未建立默认产量质量时间份额、经济系数、配方、收率公用工程排放因子、自动联产品或替代负荷信用、PEF/CFF符合性；仍须实际服务驱动、全场总量、失败及库存批群归属。 |
