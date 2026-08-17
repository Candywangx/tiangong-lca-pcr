---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.tufted-textile-fabrics-other-than-carpets
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 簇绒纺织织物（地毯除外）

## 1. 范围与适用性

该 PCR 适用于工厂门口生产的簇绒纺织面料（地毯除外）。限定操作将绒头纱插入主要织物背衬以形成毛圈或割绒。申报的产品可以是坯布，也可以接受特定路线的机械整理、湿加工、背面涂层、层压和包装。生产商应声明纤维成分、主要背衬材料、桩结构、单位面积质量、可用宽度、表面处理状态、化学处理、背衬系统以及是否进行湿处理或背涂。

铺地地毯、手工簇绒成品、机织起绒和雪尼尔织物、毛圈织物、针织起绒织物、植绒非织造布、刺绣和制成品不属于此类别。上游纤维、纱线、背衬、化学品、能源和包装生产由链接的上游数据集表示，而不是通过在前台门到门记录内扩展这些生产流程来表示。使用和报废超出了声明的范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.tufted-textile-fabrics-other-than-carpets |
| classification_refs | CPC 3.0：26880（精确）|
| covered_products |除地毯外，单件中的簇绒纺织面料，具有毛圈、割绒或混合绒头，提供坯布或经过声明的整理/背衬操作。 |
| excluded_products |地毯和其他地板覆盖物；机织起绒或雪尼尔织物；毛圈织物；针织毛绒面料；植绒无纺布；刺绣;成品文章。 |
| representative_product |在制造工厂门口完成的簇绒纺织面料（地毯除外）。 |
| production_route |收到绒头纱和底布；簇绒插入；特定路线的机械精加工、湿处理、背涂或层压；检验和包装。 |
| market_state |可在工厂门口以卷状或其他申报装运形式销售的织物，并公开表面处理和背衬状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供除地毯以外的簇绒纺织面料，并具有声明的绒头结构和表面处理，以供下游转换。 |
| How much | 1 kg 合格出厂织物的净重，不包括运输包装。 |
| How well | 符合声明的纤维成分、背衬结构、绒头形式、单位面积质量、可用宽度、整理规格和质量等级。 |
| How long or cycle | 由前景记录代表的一个生产批次或报告周期。 |
| reference_flow_link |该功能单元由下面的单个经过验证的参考产品流程实现。 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tufted textile fabrics, other than carpets `e9861e6a-cfb3-4e5f-8f40-e3990c2eb7fa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 按质量计的纤维成分；绒头纱结构；初级底布材料；圈绒/割绒/混合绒；绒高和密度；单位面积质量；可用幅宽；坯布/染色/印花/整理状态；化学整理；背衬或层压系统；质量等级；生产地域；报告期；产品净重的含湿或调湿基准；包装不计入参考质量 |

构建前台数据包时，每个 `Required qualifiers` 项均应在 dataset 元数据、流程注释、参考流程注释、产品描述或等效字段中声明。缺少限定符会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id |适用于 |所需属性 |所需单位 |规则|
| --- | --- | --- | --- | --- |
| `reference_product_mass` |参考产品及材料交流|质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |公斤 |在声明的调节基础上使用符合净值的织物质量； 1 公斤参考量中不包括芯材、薄膜、托盘和其他运输包装。 |
| `area_to_mass_conversion` |生产或销售记录以 m2 或线性 m | 保存质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |公斤 |使用特定批次测量的可用宽度和单位面积质量转换面积或长度记录；保留测量值和转换计算。 |
| `chemical_formulation_mass` |加工化学品和配方粘合剂|质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |公斤 |分别记录所提供的制剂质量和固体或活性成分；不要默默地用干燥固体代替购买的配方质量。 |
| `energy_carrier_separation` |电力、蒸汽和燃料|运营商特定属性 |千瓦时或兆焦 |保留计量的载波单位和换算系数；电力、蒸汽和每种燃料保持独立的原子交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition |绒头纱、底布和任何特定路线采购的材料均在前台生产现场接收；它们的组成、供应商地理位置和进货条件均已声明。 |
| starting_condition_role |簇绒和声明整理操作的门到门前台起始条件。 |
| product_classification_scope |仅限 CPC 3.0 子类 26880；地毯和其他排除的纺织结构未列出。 |
| recursive_input_rule |如果购买的输入本身是 CPC 26880 簇绒织物，则将其记录为具有自己的 dataset 的上游产品输入，并且不要在此前台包中递归地重现其制造库存。 |
| upstream_dataset_requirement |链接纱线、背衬、化学品、电力、燃料、供水、包装和场外处理的代表性数据集；披露任何代理及其技术、地理位置和时间不匹配。 |
| disclosure | 声明所有采用和省略的路线步骤、共享公用设施、现场处理、场外处理交接、回收材料、包装边界和物理工厂门。 |

| rule_id |适用于 |规则| source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` |前台进程边界 |包括簇绒插入以及为达到声明的出厂状态而执行的所有机械、湿法、涂层、层压、固化、检查和包装操作。 | `jrc-textiles-bref-2023`； `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` |所有前台操作 |使用直接记录或来自这些记录的记录计算，建立纺织材料、化学品、水、能源、废水、废物和相关空气排放物的过程级输入/输出清单。 | `eu-textiles-bat-2022` |
| `boundary_upstream_links` |购买投入和场外服务|将购买的投入品和场外处理的生产保持在前台门到门边界之外，但链接代表性上游数据集而不会重复计算。 | `jrc-ilcd-provisions-2010`; `iso-14044-2006` |
| `boundary_no_silent_cutoff` |物质和排放流量|不要仅仅因为流量少而忽略它；任何排除都需要披露研究截止规则、排除的流程以及对完整性的预期影响。 | `iso-14044-2006`; `jrc-ilcd-provisions-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tuft_insertion` |簇绒插入底布 | required |始终包含在内。 |核心前景织物形成。 | 1 公斤最终合格织物在工厂门口。 |
| `mechanical_finishing` |机械桩整理| conditional |包括发生剪毛、刷毛、起毛、汽蒸、热定形或其他机械整理的情况。 |特定路线的前景整理。 |进入和离开该操作的质量，标准化为 1 kg 最终产品。 |
| `wet_processing` |湿法预处理、染色、印花、水洗或化学整理| conditional |包括用于申报产品的每个现场湿法工艺。 |特定路线的前台湿处理。 |每 1 公斤最终产品的质量处理和所有记录的液体、化学品、能源、废水和废物流量。 |
| `back_coating_lamination` |背涂、固化或层压| conditional |包括何时应用粘合剂、涂层或辅助背衬。 |特定路线的前景支持形成。 |每 1 公斤最终产品进入和离开此操作的质量。 |
| `inspection_packaging` |检验、修整、卷绕和包装| required |始终包括最终检验和装运准备；仅当原子包装组件明显不存在时才记录零。 |最终的前景产品准备。 | 1 公斤净重合格产品，不包括运输包装。 |

### 过程：将绒头插入底布（`tuft_insertion`）

#### 输入

##### 产品流

###### 绒头纱（`tufting_yarn_input`）

绒头纱穿过场地边界并穿过底布插入。将每个产品特定的纱线成分和结构记录为其自己的前台交换。

- 选定流： Pile yarn
- 流属性/单位： Mass / kg
- 数量规则： 已测量批量发给簇绒
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源：

###### 主底布 (`primary_backing_input`)

主背衬支撑插入的簇绒并保留在产品中。记录其准确的聚合物或纤维成分、结构和供应商批次。

- 选定流： Primary backing fabric
- 流属性/单位： Mass / kg
- 数量规则： 簇绒消耗的测量卷质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源：

###### 簇绒机用电（`tufting_electricity_input`）

电力为簇绒机和直接指定的辅助设备提供动力。使用现场计量表或来自地下计量生产线的记录分配。

- 选定流： Electricity for tufting machine
- 流属性/单位： Energy / kWh
- 数量规则：适用生产期间计量消耗的电量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源： `eu-textiles-bat-2022`

###### 簇绒机用压缩空气（`tufting_compressed_air_input`）

仅在簇绒生产线使用的地方记录压缩空气。注明输送压力以及压缩机电力是否已包括在内，以防止重复计算。

- 选定流： Compressed air for tufting machine
- 流属性/单位： Volume / m3
- 数量规则： 计量或工程计量压缩空气输送
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 坯布簇绒布(`greige_tufted_fabric_output`)

坯布簇绒织物是任何宣布的下游整理之前的中间输出。将测量的质量与纱线、背衬和记录的损失进行核对。

- 选定流： Greige tufted fabric
- 流属性/单位： Mass / kg
- 数量规则：实测中间卷质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源：

##### 废物流

###### 绒纱边角料 (`tufting_yarn_offcut_waste`)

绒头纱线边角料和不可回收的纱线端头作为独特的废物交换而离开产品系统。将回收的纱线与送去处理的废物分开。

- 选定流： Pile yarn offcuts
- 流属性/单位： Mass / kg
- 数量规则： 测量的废物容器质量归因于该产品批次
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源：

###### 主背衬装饰 (`primary_backing_trim_waste`)

主底布修剪是单独记录的，因为它的材料特性与绒头纱线废料不同。保留声明的恢复或治疗路线。

- 选定流： Primary backing trim
- 流属性/单位： Mass / kg
- 数量规则：实测背衬废料量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源：

##### 基本流

###### 植绒过程中纤维灰尘进入空气 (`tufting_fibre_dust_to_air`)

当现场认为相关时，记录任何捕获系统之后释放到空气中的直接纤维灰尘。捕获的灰尘是单独的废物交换，而不是这种基本排放。

- 选定流： Fibre dust from tuft insertion to air
- 流属性/单位： Mass / kg
- 数量规则：减排后排放的测量或合规监测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_tufting_records`
- 来源： `eu-textiles-bat-2022`

### 过程：机械绒头整理（`mechanical_finishing`）

#### 输入

##### 产品流

###### 用于机械整理的坯布簇绒织物 (`mechanical_greige_fabric_input`)

该中间体仅进入所声明的机械精加工路线。其批次标识应与簇绒插入的输出或声明的上游 dataset 相匹配。

- 选定流： Greige tufted fabric for mechanical finishing
- 流属性/单位： Mass / kg
- 数量规则： 实测质量进入机械精加工
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mechanical_finishing_records`
- 来源：

###### 机械精加工电力 (`mechanical_electricity_input`)

电力为剪切、刷毛、起绒和其他申报的机械精加工设备提供动力。仅记录该路线所使用的设备。

- 选定流： Electricity for mechanical finishing
- 流属性/单位： Energy / kWh
- 数量规则：适用机械精加工操作的计量用电
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mechanical_finishing_records`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机械整理簇绒织物 (`mechanically_finished_fabric_output`)

该中间记录记录了声明的机械加工后和任何湿法工艺、背衬操作或最终包装之前的质量。

- 选定流： Mechanically finished tufted fabric
- 流属性/单位： Mass / kg
- 数量规则： 测量输出卷质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mechanical_finishing_records`
- 来源：

##### 废物流

###### 机械整理的纺织品修剪 (`mechanical_textile_trim_waste`)

通过实际产品成分和处理路线记录在剪切或边缘整理过程中去除的纺织品边角。

- 选定流： Textile trim from mechanical finishing
- 流属性/单位： Mass / kg
- 数量规则：实测修剪废料量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mechanical_finishing_records`
- 来源：

##### 基本流

###### 机械整理后排放到空气中的纤维粉尘 (`mechanical_fibre_dust_to_air`)

当与活性表面处理相关时，记录捕获后排放的直接纤维粉尘。捕获的棉绒或灰尘应记录为其自身的废物交换。

- 选定流： Fibre dust from mechanical finishing to air
- 流属性/单位： Mass / kg
- 数量规则：减排后排放的测量或合规监测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mechanical_finishing_records`
- 来源： `eu-textiles-bat-2022`

### 过程：湿法预处理、染色、印花、水洗或化学整理（`wet_processing`）

#### 输入

##### 产品流

###### 簇绒织物进入湿法加工（`wet_process_fabric_input`）

仅当声明的产品经过现场水性或化学精加工途径处理时，该中间体才会进入。保持批次连续性和传入完成状态。

- 选定流： Tufted fabric entering wet processing
- 流属性/单位： Mass / kg
- 数量规则： 湿法加工的实测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源：

###### 湿法工艺用水 (`wet_process_water_input`)

进入预处理、染色、印花、洗涤或整理的工艺用水在工艺边界进行记录。回用水应当与新供水区分开。

- 选定流： Process water for wet processing
- 流属性/单位： Mass / kg
- 数量规则：适用湿法工艺批次的计量淡水输入
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

###### 湿法加工用电（`wet_process_electricity_input`）

电力为已申报的湿法加工线和直接分配的泵、计量和干燥设备提供动力。

- 选定流： Electricity for wet processing
- 流属性/单位： Energy / kWh
- 数量规则：适用湿法工艺的计量用电
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

###### 湿法加工蒸汽 (`wet_process_steam_input`)

用于加热和干燥的购买或集中产生的蒸汽与电力和燃料分开记录。状态压力以及锅炉损失是否在上游。

- 选定流： Steam for wet processing
- 流属性/单位： Energy / MJ
- 数量规则： 向适用湿法工艺输送的计量蒸汽能
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

###### 氢氧化钠 (`wet_process_sodium_hydroxide_input`)

仅当批准的配方将氢氧化钠用于预处理、pH 控制或其他声明的功能时，才会记录氢氧化钠。记录提供的溶液质量和浓度。

- 选定流： Sodium hydroxide
- 流属性/单位： Mass / kg
- 数量规则：已称重或开具发票的配方质量发给适用的配方
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

###### 过氧化氢 (`wet_process_hydrogen_peroxide_input`)

仅当批准的路线使用过氧化物漂白或氧化时才记录过氧化氢。记录提供的溶液质量和浓度。

- 选定流： Hydrogen peroxide
- 流属性/单位： Mass / kg
- 数量规则：已称重或开具发票的配方质量发给适用的配方
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

###### 乙酸 (`wet_process_acetic_acid_input`)

仅当用于 pH 调节或中和时才记录乙酸。记录提供的溶液质量和浓度。

- 选定流： Acetic acid
- 流属性/单位： Mass / kg
- 数量规则：已称重或开具发票的配方质量发给适用的配方
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法簇绒织物（`wet_processed_fabric_output`）

该中间体记录所有声明的湿加工和干燥后的产品质量。配方和成品标识应与批次保持联系。

- 选定流： Wet-processed tufted fabric
- 流属性/单位： Mass / kg
- 数量规则： 测量的干燥或调节后的输出卷质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源：

##### 废物流

###### 湿法加工废水 (`wet_process_wastewater_output`)

离开湿法处理的废水在转移至现场或场外处理时进行记录。保留测量的体积或质量以及相关特征，而不将其与污泥混合。

- 选定流： Wastewater from wet processing
- 流属性/单位： Mass / kg
- 数量规则：适用湿法工艺废水计量排放
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`; `jrc-textiles-bref-2023`

###### 湿法处理污泥（`wet_process_sludge_output`）

湿处理路线的处理污泥是单独的废物交换。记录湿质量、干固体含量和目的地。

- 选定流： Wet-processing treatment sludge
- 流属性/单位： Mass / kg
- 数量规则： 测量污泥质量并记录干固体含量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_wet_processing_records`
- 来源： `eu-textiles-bat-2022`

##### 基本流

### 过程：背涂、固化或层压（`back_coating_lamination`）

#### 输入

##### 产品流

###### 簇绒织物进入背面涂层（`backing_fabric_input`）

当产品接受粘合剂、涂层或辅助背衬时，就会进入该中间体。保留来料批次和成品标识。

- 选定流： Tufted fabric entering back coating
- 流属性/单位： Mass / kg
- 数量规则：进入涂层或层压的测量质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源：

###### 苯乙烯-丁二烯乳胶粘合剂（`styrene_butadiene_latex_input`）

仅当批准的背衬配方使用苯乙烯-丁二烯乳胶时才进行记录。记录湿配方质量、固体含量和供应商等级。

- 选定流： Styrene-butadiene latex binder
- 流属性/单位： Mass / kg
- 数量规则： 称重或计量湿配方质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源： `jrc-textiles-bref-2023`

###### 丙烯酸乳胶粘合剂（`acrylic_latex_input`）

仅当认可的背衬配方使用丙烯酸乳胶时才记录丙烯酸乳胶。将其与丁苯胶乳分开并记录湿配方质量和固体含量。

- 选定流： Acrylic latex binder
- 流属性/单位： Mass / kg
- 数量规则： 称重或计量湿配方质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源： `jrc-textiles-bref-2023`

###### 辅助底布 (`secondary_backing_fabric_input`)

仅在层压至簇绒织物时记录辅助背衬。声明其确切的材料、结构和供应商批次。

- 选定流： Secondary backing fabric
- 流属性/单位： Mass / kg
- 数量规则：测量消耗的辅助支撑辊质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源：

###### 背涂和层压用电（`backing_electricity_input`）

电力为涂层、层压、通风和直接指定的辅助设备提供动力。分配具有记录操作记录的共享设备。

- 选定流： Electricity for back coating and lamination
- 流属性/单位： Energy / kWh
- 数量规则：适用后备业务的计量用电
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源： `eu-textiles-bat-2022`

###### 后炉用天然气 (`backing_natural_gas_input`)

天然气仅在直接燃烧用于干燥或固化的情况下才被记录。请勿将其与购买的蒸汽或其他燃料混合。

- 选定流： Natural gas for backing oven
- 流属性/单位： Energy / MJ
- 数量规则：适用后备作业消耗的计量低热值燃料能源
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 有背簇绒织物 (`backed_tufted_fabric_output`)

该中间体记录涂层、固化或层压后的织物。将添加的粘合剂和背衬物质与产品、涂料废物和排放物进行协调。

- 选定流： Backed tufted fabric
- 流属性/单位： Mass / kg
- 数量规则： 测量的条件输出卷质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源：

##### 废物流

###### 背衬涂层废料（`backing_coating_waste`）

未使用的、不合格的或捕获的涂料配方被记录为具有配方特性和处理目的地的独特废物。

- 选定流： Backing coating waste
- 流属性/单位： Mass / kg
- 数量规则：实测涂料废料质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源：

###### 第二背衬装饰 (`secondary_backing_trim_waste`)

由于其材料和处理途径不同，二次背衬边缘修整与涂层废料分开记录。

- 选定流： Secondary backing trim
- 流属性/单位： Mass / kg
- 数量规则： 测量的次背衬质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_backing_records`
- 来源：

##### 基本流

### 过程：检验、修整、卷绕和包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 簇绒布进入终检（`packaging_fabric_input`）

最终的中间体进入检验和装运准备。其批次应载有完整的申报路线和终点状态。

- 选定流： Tufted fabric entering final inspection
- 流属性/单位： Mass / kg
- 数量规则：实测质量进入终检
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 纸板卷芯 (`cardboard_core_input`)

当织物成卷运输时，纸板芯被记录。使其质量保持在净产品参考量之外。

- 选定流： Cardboard roll core
- 流属性/单位： Mass / kg
- 数量规则：使用测量的或供应商指定的核心质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 低密度聚乙烯包装膜（`ldpe_packaging_film_input`）

LDPE 薄膜仅在用于保护货物的地方进行记录。声明厚度和回收含量，并将其质量保持在净产品参考量之外。

- 选定流： Low-density polyethylene packaging film
- 流属性/单位： Mass / kg
- 数量规则： 已测量的薄膜质量发放到产品批次
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 检验、轧制用电（`packaging_electricity_input`）

电力为检查台、轧制、切割和直接分配的包装设备提供动力。

- 选定流： Electricity for inspection and rolling
- 流属性/单位： Energy / kWh
- 数量规则：适用生产期间计量或记录的设备用电
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源： `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 符合标准的簇绒纺织面料，地毯除外 (`final_tufted_fabric_output`)

这是单一声明的工厂参考产品。其织物净质量不包括卷芯、薄膜、托盘和其他运输包装。

- 选定流： Tufted textile fabrics, other than carpets `e9861e6a-cfb3-4e5f-8f40-e3990c2eb7fa`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格产品净质量等于申报的1公斤参考量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：1公斤参考品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

##### 废物流

###### 最终织物装饰 (`final_textile_trim_waste`)

根据实际织物成分和目的地记录最终的边缘修剪和拒绝的切割部分。返回同一批次的返工不计为外部废物输出。

- 选定流： Final textile trim
- 流属性/单位： Mass / kg
- 数量规则： 测量的最终纺织废料质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定(`product_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 废弃纸板包装（`cardboard_packaging_waste`）

装运准备期间丢弃的纸板与纺织品和聚合物废物分开记录。

- 选定流： Discarded cardboard packaging
- 流属性/单位： Mass / kg
- 数量规则： 测量废弃纸板质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 废弃低密度聚乙烯包装膜（`ldpe_packaging_film_waste`）

装运准备过程中废弃的 LDPE 薄膜与纸板和纺织品废物分开记录。

- 选定流： Discarded low-density polyethylene packaging film
- 流属性/单位： Mass / kg
- 数量规则： 测量废弃LDPE薄膜质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场地特定 (`site_specific`)
- 归一化基准：每1公斤最终合格织物
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id |适用于 |规则| source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` |共享生产线和公用设施|首先避免通过分项计量、批次记录、设备运行时间或独立可测量操作的物理细分进行分配。 | `iso-14044-2006`； `jrc-ilcd-provisions-2010` |
| `allocation_closed_loop_rework` |过程中的返工返回到同一生产批次|将内部返回的返工视为内部循环；记录任何额外的能源或材料使用，但不会同时产生废物输出和相同质量的新外部输入。 | `iso-14044-2006` |
| `allocation_recovered_material` |纱线、背衬、涂层或成品织物残留物的异地销售或回收|分别报告剩余质量和目的地。仅当通过研究方法 required 时才应用替代或其他相应信用，并将其披露在归因前台清单之外。 | `iso-14044-2006`； `jrc-ilcd-provisions-2010` |
| `allocation_remaining_shared_burdens` |无法通过直接记录分离的负担|使用反映因果使用的记录的身体关系；如果不存在可辩护的物理关系，则使用经济关系并披露价格、期间、货币和敏感性。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method |单位|频率| temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tufting_records` | tuft_insertion |每种原子材料、公用事业、中间体、废物和相关的废气排放交换|批签发/退货记录；米；生产日志；废票；排放记录|批次编号；流身份；数量;单元;时间戳；机器;产品产量；目的地;测量依据|校准秤和仪表、ERP 发放/退货记录以及合规性监控 |本地录制单位|每批次或连续米的批次分配 |涵盖正常运营的代表性报告​​期|生产申报产品的所有簇绒设备|将每个原子交换相加并除以最终产品的净质量；从站点边界总数中排除内部传输 |校准证书；米提取物； ERP 记录；废票；路线日志|
| `cp_mechanical_finishing_records` | mechanical_finishing |各原子中间体、电力、废物及相关废气排放交换|滚动记录；分表；生产日志；废票；排放记录|批次编号；主动操作；流身份；数量;单元;运行时；输出质量；目的地 |校准秤、线分表和生产记录|本地录制单位|每批次或生产活动|涵盖活跃航线的代表性报告​​期|申报产品使用的所有机械精加工设备|仅聚合活跃操作并将每个交换标准化为净合格的最终产品质量 |校准证书；米提取物；路线日志；废票|
| `cp_wet_processing_records` | wet_processing |各原子材料、化学品、水、能源、废水、污泥及相关排放交换|批量配方；用药记录；仪表;实验室结果；废票|批次编号；配方化学特性；供应浓度；大量的;水;电;蒸汽;废水；酸碱度；温度;污染物结果；输出质量|由配方和实验室记录支持的校准剂量、公用设施和废水计量表|本地录制单位|每批次和连续监测（如适用）涵盖正常批次和异常批次的代表性报告​​期 |所有现场湿法处理和直接相关的处理装置|将每种化学品和公用设施分开；按路线聚合并标准化为净合格的最终产品质量|校准;配方批准；安全数据表/总固体溶解度；米提取物；实验室质量保证/质量控制；治疗记录|
| `cp_backing_records` | back_coating_lamination |每个原子织物、粘合剂、背衬、能源、废物和相关排放交换|配方批次；滚动问题；仪表;生产日志；废票|批次编号；粘合剂等级；湿质量；固体；支持身份；活力;烤箱设置；输出质量；废物目的地|校准秤、配方罐、生产线仪表和生产记录|本地录制单位|每个配方批次或生产批次|涵盖主动支持路线的代表性报告​​期|申报产品使用的所有涂层、固化和层压设备 |协调湿配方、固体、背衬质量、产量、废物和每净最终产品质量的测量排放量|校准;配方批准；安全数据表/总固体溶解度；米提取物；生产和废物记录|
| `cp_packaging_records` | inspection_packaging |每个原子产品、包装、电力和废物交换|成品票；包装问题；仪表;废票|产品批次；织物净质量；装运总质量；核心质量；薄膜质量；电;废物量；品质配置|校准的最终秤、ERP 包装问题、线计和检验记录 |本地录制单位|每批成品 |代表性报告​​期|所有最终检验和装运准备设备|将净产品与包装分开；聚合每个组件并标准化为 1 公斤净合格织物 |秤校准；成品票；包装规格；检查和废物记录|

### 计算规则

| rule_id |适用于 |公式或规则 |输入 |输出| source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_atomic_exchange` |每个库存行|将所包含批次的特定于行的前景数量相加，然后除以相同批次的净合格最终织物质量。 |适用的收集协议数量；净合格产品质量|每1公斤参考产品的原子交换| `eu-textiles-bat-2022` |
| `convert_area_or_length_to_mass` |织物面积或长度记录|织物质量 = 测量面积 x 每单位面积的批次特定质量；测量面积 = 记录长度 x 可用宽度。当存在批次测量时，请勿使用目录值。 |长度;可用宽度；测量单位面积质量|公斤布料| `iso-14044-2006` |
| `calculate_formulation_solids` |粘合剂和化学配方|干固体 = 湿配方质量 x 测量的或供应商认证的固体质量分数；保留湿制剂质量作为购买的输入。 |湿质量；固体质量分数|千克干固体作为公开的支持值| `eu-textiles-bat-2022` |
| `mass_reconciliation` |每个材料转变步骤|将质量输入与同一批次范围内的产品、废物、测量排放和库存变化进行比较；调查而不是自动纠正无法解释的不平衡。 |物质投入；输出；废物；测量排放量；库存变动|记录的质量平衡检查| `eu-textiles-bat-2022`； `jrc-ilcd-provisions-2010` |

### 数据质量要求

| requirement_id |适用于 |要求|证据|
| --- | --- | --- | --- |
| `dq_product_identity` |参考品及中间体|保持与纤维成分、背衬结构、绒头形式、单位面积质量、宽度、整理配方、背衬系统和质量配置的批次关联。 |批准的产品规格；批量旅客；检验记录|
| `dq_direct_measurement` |材料、水、能源、废水和废物|喜欢直接测量；发票或共享电表的计算需要原始记录、分配基础和不确定性披露。 |校准的仪表或秤记录；发票;分配工作表|
| `dq_temporal_coverage` |所有前台交换 |涵盖具有代表性的报告期，并披露停产、启动、返工、异常批次以及路线或配方的材料变化。 |注明日期的生产和公用记录；异常日志|
| `dq_chemical_identity` |每种工艺化学品 |保留商业名称、供应商、配方或物质标识、浓度或固体、数量、功能和 SDS/TDS 链接；不要合并不同的化学品。 |食谱;用药记录；安全数据表/总固体溶解度；购买记录|
| `dq_effluent_and_emissions` |废水、污泥、废气及直接排放|将监测位置、周期、流量、浓度或质量结果与活动路径和处理边界相匹配；识别低于检测限的值而不用零替换。 |实验室质量保证/质量控制；流量计；许可证或合规报告|
| `dq_completeness` |流程级库存|协调输入/输出清单并解释所有排除、数据差距、代理和未解析的 UUID。 |质量平衡；工艺流程图；间隙寄存器；审稿记录|

## 9. 校验规则

| rule_id |适用于 |规则| source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` |参考流程|需要经过验证的产品流量 UUID、质量属性 UUID、质量单位 UUID、千克单位、CPC 26880 范围以及所有 required 限定符。 | `un-cpc-3-explanatory-notes-2025`； `jrc-ilcd-provisions-2010` |
| `validate_route_completeness` |流程图和前景边界|需要植绒插入和检查/包装；要求其操作、配方、仪表或产品规格表明其发生的每个 conditional 过程。 | `jrc-textiles-bref-2023`； `eu-textiles-bat-2022` |
| `validate_atomic_exchanges` |加工库存|拒绝组合材料、公用事业、化学品、包装、废物或排放行；每个选定的流程必须是一个具体的交易所，具有自己的金额记录和描述。 | `eu-textiles-bat-2022` |
| `validate_foreground_evidence` |库存数量|需要真实的前景测量、日志、发票、测试或来自这些记录的计算；拒绝 AI 生成的值、不支持的默认值以及作为站点记录呈现的 literature 值。 | `iso-14044-2006`； `jrc-ilcd-provisions-2010` |
| `validate_mass_and_packaging_basis` |参考产品和材料工艺|确认 1 公斤参考量是净合格织物，包装不包括在参考质量中，并且调查和披露了无法解释的过程质量不平衡。 | `iso-14044-2006`； `jrc-ilcd-provisions-2010` |
| `validate_uuid_status` | UUID 轴承和未解析的行 |仅使用公共身份、类型、属性和单位准确的 state100 直读 UUID；未解析的行保持无 UUID，其行特定原因在清单中。 | `jrc-ilcd-provisions-2010` |
| `validate_source_and_data_quality` | dataset 封装 |在下游使用之前需要稳定的来源参考、收集覆盖范围、仪表和实验室质量证据、代理披露以及完整性声明。 | `iso-14044-2006`； `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use |当成分、绒头结构、表面处理、背衬、地理位置、技术和时间与研究相匹配时，工厂门口 CPC 26880 簇绒纺织面料的前景或背景表示。 |
| excluded_use |地毯、其他排除的纺织结构、制成品或成分、湿法工艺路线、涂层系统、地理位置、技术或报告期实质上不同的簇绒织物。 |
| required_metadata |规范 PCR id；参考UUID； CPC 26880；地理;报告期；工厂大门；纤维成分；桩基和支护施工；每面积质量；可用宽度；精加工和涂层路线；净产品质量基础；分配;上游代理；数据质量声明|
| required_quality_disclosure |直接计量金额的份额；共享电表分配；时间和地点覆盖范围；质量平衡结果；异常操作；检测限处理；未解析的 UUID 行；代理数据集；审核状态。 |
| update_trigger |纤维或背衬成分、桩结构、湿法配方、涂层系统、能源供应、处理路线、工厂技术、地理位置、分配或代表性前景时期的变化。 |

## 11. 数据源

|来源 ID |类型 |参考|用于 |
| --- | --- | --- | --- |
| `un-cpc-3-explanatory-notes-2025` | official_guidance |联合国统计司，CPC 3.0 版解释性说明，子类 26880，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf |官方产品类别范围和排除|
| `jrc-textiles-bref-2023` | official_guidance | Roth 等人，纺织行业最佳可用技术参考文件，JRC131874，2023。https://doi.org/10.2760/355887 |纺织工艺分解、涂层、织物生产、整理、输入、输出和处理背景|
| `eu-textiles-bat-2022` | official_guidance |委员会实施决定 (EU) 2022/2508 确立了纺织行业最佳可行技术结论。 http://data.europa.eu/eli/dec_impl/2022/2508/oj |过程级材料、水、能源、化学品、废水、废物、监控和数据质量规则|
| `iso-14044-2006` | standard | ISO 14044:2006，环境管理 - 生命周期评估 - 要求和指南，经修订后于 2022 年确认生效。 https://www.iso.org/standard/38498.html | LCI 边界、分配层次结构、数据收集、完整性、报告和审查原则 |
| `jrc-ilcd-provisions-2010` | official_guidance |欧盟委员会 JRC，ILCD 手册 - 生命周期评估一般指南 - 规定和行动步骤，JRC58190，2010。https://doi.org/10.2788/94987 |一致、稳健、有质量保证的生命周期数据和 dataset 文档 |
| `cimilli-et-al-tufted-structure-2023` | literature | Cimilli Duru 等人，山羊粗毛簇绒地毯的吸音，天然纤维杂志，2023 年。https://doi.org/10.1080/15440478.2023.2246103 |经同行评审的证据表明，初级背衬在制造过程中能够固定簇绒纱；仅用于 generic 簇绒结构，不包括地毯 |
| `yuan-et-al-pad-dyeing-lca-2013` | literature | Yuan 等，棉织物连续轧染技术的生命周期评估，国际生命周期评估杂志 18, 659-672, 2013。 https://doi.org/10.1007/s11367-012-0470-3 |同行评审的前景记录先例和湿法分解；没有定量值被转移到此 PCR 中 |
