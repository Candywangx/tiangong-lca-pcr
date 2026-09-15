---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.cermets-and-articles-thereof
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 金属陶瓷及其制品

## 1. 范围与适用性

本 PCR 适用于采用粉末制备、成形、脱脂、烧结或压力辅助烧结，以及为达到所声明出厂状态所需的精加工工序生产金属陶瓷和简单未装配金属陶瓷制品的门到门过程。金属陶瓷是金属组分与陶瓷组分在微观尺度上的非均相组合，其中包括以金属为黏结相的烧结金属碳化物。前景边界始于已声明组成的陶瓷粉末、金属黏结相粉末、添加剂、公用工程和任何合格再生原料进入报告场址，终于干燥合格产品以及全部废物和直接排放离开该场址。

本规则以 WC-Co 硬质合金和 Ti(C,N) 基金属陶瓷为代表材料体系，同时保持配方中立。不包括纯陶瓷制品、均质金属合金、已装配工具、已可归入金属制工具的可互换刀头或刀片、用于制造或加工金属陶瓷的机械、核燃料金属陶瓷、下游钎焊或装配，以及在所声明未涂层出厂产品之后施加的涂层。外购粉末的上游生产以及场外回收或处理用关联数据集表示，不在本前景系统内重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.cermets-and-articles-thereof |
| classification_refs | CPC 3.0:41605，精确映射语境 |
| covered_products | 含微观陶瓷相和金属黏结相的未锻轧金属陶瓷原料以及干燥、未装配、未涂层金属陶瓷坯体，包括以金属为黏结相的烧结金属碳化物 |
| excluded_products | 纯陶瓷坯体；均质金属合金；核燃料金属陶瓷；已装配工具；已归类为金属制工具的刀片、刀头；机械；下游钎焊组件；出厂后的涂层 |
| representative_product | 烧结未装配金属陶瓷坯件，须声明陶瓷相、金属黏结相、组成、密度、尺寸和精加工状态 |
| production_route | 粉末接收与配料；湿式或干式混合/球磨；按条件造粒；压制、挤出、注射成形或其他已声明成形路线；脱脂；真空或受控气氛烧结；按条件进行压力辅助致密化和精加工 |
| market_state | 制造厂门口的干燥合格金属陶瓷原料或未装配制品；参考产品未涂层且未装入工具或机械 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合所声明出厂产品形态且组成明确的金属陶瓷 |
| How much | 1 kg 干基净合格产品 |
| How well | 符合所声明陶瓷相、金属黏结相、组成、密度或孔隙率、产品形态、尺寸或粒度规格和精加工状态 |
| How long or cycle | 制造厂门口的一个生产批次；本质量基准材料参考不包含使用寿命声明 |
| reference_flow_link | `cermet_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 干基净合格产品 |
| 参考产品流 | 烧结未装配金属陶瓷坯件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 陶瓷相及牌号；金属黏结相及牌号；质量分数和化验基准；再生含量核算；粉末或制品形态；密度或孔隙率；尺寸或粒度分布；成形路线；烧结及压力辅助路线；精加工状态；涂层状态；场址；地理范围；生产期间 |

构建前景数据包时，`必需限定信息` 中的每一项均须在数据集元数据、产品说明、参考流备注或等效字段中声明。参考产品 UUID 仍未解决；前景数据包不得用范围更窄的工具零件流或组成未指明的代理流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品和按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 去除可移除的工艺液体和松散污染物后称量净合格产品；残余水分或滞留加工助剂须单独报告，全部交换按 1 kg 干基净合格产品归一化。 |
| `cobalt_content_basis` | 钴粉投入 | Cobalt content `b1192e5a-4a70-4fd7-89a2-6b798c7ed3a7` | kg | 以钴粉毛质量乘以实测或供应商证明的钴质量分数报告钴含量，并保留毛质量和化验依据。 |
| `electricity_energy_basis` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原单位和换算系数；将 kWh 换算为 Tiangong 参考单位时采用 1 kWh = 3.6 MJ，并披露电压等级、电网或现场电源、损耗及共用电表分配。 |
| `gas_volume_basis` | 天然气和 UUID 未解决的气态氮投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量压力、温度、干/湿基、组成或纯度及参考体积换算；未经换算不得混用标况、标准或工况立方米。 |
| `batch_to_reference_basis` | 全部批次记录 | Mass 或适用的计量属性 | 每 kg 产品 | 以归属于所声明产品的数量除以干基净合格产品质量；在制品变化、内部返回物料和不合格产品须单独披露。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告场址边界接收的组成明确陶瓷粉末、金属黏结相粉末、添加剂、合格再生原料和公用工程 |
| starting_condition_role | 粉末处理、成形、致密化和所需精加工的前景起点 |
| product_classification_scope | 金属陶瓷材料和简单未装配金属陶瓷制品；分类引用仅用于定位类别，不得重定义本语义边界 |
| recursive_input_rule | 外购金属陶瓷原料、金属陶瓷废料或金属陶瓷半成品作为单独产品投入记录一次，并关联其上游数据集；接收前景中不得使用本 PCR 递归重建该投入 |
| upstream_dataset_requirement | 每项外购粉末、黏结剂、添加剂、燃料、电力供应、工艺气体、供水及场外处理服务须关联与组成、产品状态、地理、技术和再生含量相匹配的数据集 |
| disclosure | 声明场址、期间、产品配方、产品形态、成形和烧结路线、压力辅助、精加工、内部循环处理、再生含量方法、减排设施、截断以及全部排除或外包工序 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景系统 | 纳入粉末和添加剂的接收及内部搬运、配料、混合或球磨、使用时的造粒、成形、脱脂、烧结、使用时的压力辅助致密化、检验、所需精加工、内部物料返回、废物管理以及截至厂门的现场减排。 | `furberg-arvidsson-molander-2019`; `wang-bai-wang-men-2024` |
| `boundary_upstream_links` | 外购投入和场外服务 | 粉末、黏结剂、添加剂、能源载体、公用工程及场外回收、再生或处置的生产用关联上游数据集表示；下游生命周期模型不得省略这些过程。 | `eu-pef-2021-2279` |
| `boundary_direct_releases` | 前景排放 | 按物质和接收环境舱室记录减排后的实测或质量平衡直接排放；如有数据，保留产生总量、捕集、回收和最终排放记录。 | `furberg-arvidsson-molander-2019`; `eu-pef-2021-2279` |
| `boundary_no_tool_substitution` | 产品识别 | 不得用已装配工具、机械或范围更窄的 WC-Co 金属制工具零件流替代 UUID 未解决的 CPC 41605 参考产品。 | `eu-cn-cermet-definition-2020`; `eu-cermet-sticks-classification-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cermet_manufacture` | 金属陶瓷粉末处理、致密化与精加工 | required | 始终纳入报告场址控制的从接收粉末到干燥合格产品的工序；仅当记录证明某一原子流在所声明路线中不存在时，方可标记为不适用 | 前景生产 | 1 kg 干基净合格金属陶瓷产品 |

### 过程：金属陶瓷粉末处理、致密化与精加工（`cermet_manufacture`）

#### 输入

##### 产品流

###### 碳化钨陶瓷相粉末（`tungsten_carbide_powder`）

所声明配方含 WC 时记录碳化钨粉末。数量为归属批次投料的干基接收 WC 粉末，扣除有文件记录、已退回批次边界之外的物料。

- 选定流：碳化钨粉末 `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属生产批次实际投料的干基 WC 粉末
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 碳氮化钛陶瓷相粉末（`titanium_carbonitride_powder`）

仅在 Ti(C,N) 作为一种已声明陶瓷组分投料时记录碳氮化钛粉末。不得将分别外购的 TiC、TiN、WC、Mo2C 或其他粉末合并到本行。

- 选定流：碳氮化钛粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属生产批次实际投料的干基 Ti(C,N) 粉末
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`wang-bai-wang-men-2024`

###### 钴金属黏结相粉末（`cobalt_powder`）

仅当钴粉为单独外购的黏结相组分时记录。清单数量为钴含量；须保留粉末毛质量和钴化验值以供核对。

- 选定流：钴粉 `abe5e361-25a1-4258-a481-589bf66e3b13`
- 流属性/单位：Cobalt content `b1192e5a-4a70-4fd7-89a2-6b798c7ed3a7` / kg
- 数量规则：钴粉毛质量乘以批次特定钴质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_inputs`
- 来源：`furberg-arvidsson-molander-2019`; `wang-bai-wang-men-2024`

###### 镍金属黏结相粉末（`nickel_powder`）

仅当镍粉作为一种已声明金属黏结相组分投料时记录。不得以镍精矿或组成未指明的金属粉末作为代理。

- 选定流：镍粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属生产批次实际投料的干基镍粉
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`wang-bai-wang-men-2024`

###### 石蜡压制或造粒黏结剂（`paraffin_wax`）

石蜡作为黏结剂或压制助剂投料时记录。其他黏结剂须作为不同的原子产品投入，不得由本行代表。

- 选定流：石蜡 `25a8346c-d726-4428-9a25-1a9584293ec5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际投料石蜡质量，扣除单独计量并返回同一批次的回收石蜡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 正庚烷球磨溶剂（`heptane`）

湿式球磨加入正庚烷时记录。己烷、乙醇、水或其他溶剂均为不同物理投入，不得计入本行。

- 选定流：正庚烷 `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越场址边界的新鲜正庚烷补充量，不含内部回收溶剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 水相球磨或湿式精加工用工艺水（`process_water`）

记录跨越场址边界并用于水相球磨或湿式精加工的工艺水。闭路循环水不得重复计为新鲜投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由水表或储罐平衡得到且归属于产品的新鲜工艺水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_gas_inputs`
- 来源：

###### 气态工业氮气（`nitrogen_gas`）

记录供喷雾干燥、惰性操作或受控气氛热处理使用的气态氮气。液氮进入场址时须使用不同的液态产品流并记录气化边界。

- 选定流：气态工业氮气
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：气态氮气在参考条件下的消耗体积，扣除计量的闭路回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_gas_inputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 前景设备使用的电力（`electricity`）

记录物料搬运、球磨、造粒、成形、脱脂、烧结、压力辅助、通风、减排、检验和归属精加工所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：归属于前景过程的计量电力，包括已分配的共用辅助负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 现场热工设备用天然气（`natural_gas`）

仅当气态天然气跨越场址边界并在归属干燥器、炉窑或热氧化器中燃烧时记录。不得与其他燃料合并。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在参考条件下归属于前景过程的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干基净合格烧结金属陶瓷坯件（`cermet_reference_product`）

本行是定量参考输出。记录脱脂、烧结、检验和边界内所有精加工之后的合格产品；不含已装配部件和下游组件。

- 选定流：烧结未装配金属陶瓷坯件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：干基净合格产品实测质量；在归一化参考基准上等于 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`eu-cn-cermet-definition-2020`; `eu-cermet-sticks-classification-2021`; `furberg-arvidsson-molander-2019`

##### 废物流

###### 离开场址的不合格金属陶瓷混合粉末（`off_spec_cermet_powder`）

记录以废物形式离开前景系统且组成已声明的混合粉末。内部返回同一或其他归属批次的粉末属于内部循环，不是废物输出。

- 选定流：不合格金属陶瓷混合粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往场外作为废物的混合粉末称量质量，扣除有记录的内部返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 离开场址的烧结金属陶瓷废品（`sintered_cermet_reject`）

记录离开前景系统并送往场外回收、再生、处理或处置的不合格烧结金属陶瓷坯体。去向和组成须与本废物流身份分开记录。

- 选定流：烧结金属陶瓷废品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越场址边界的烧结废品称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`furberg-arvidsson-molander-2019`

###### 离开场址的金属陶瓷磨削污泥（`cermet_grinding_sludge`）

记录磨削所声明金属陶瓷组成产生且离开场址的湿污泥。干式捕集磨削粉尘属于不同废物状态，不得计入本行。

- 选定流：金属陶瓷磨削污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越场址边界的湿污泥称量质量，并分别报告干固体分数和滞留液体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

##### 基本流

###### 排放至空气的未回收正庚烷（`heptane_air`）

记录回收和减排后的实测或溶剂平衡正庚烷排放。不得用其他庚烷异构体或挥发性有机物汇总流替代。

- 选定流：排放至空气的正庚烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：新鲜正庚烷投入减去回收库存、废物转移、产品滞留和期末库存变化，并与监测排放核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`furberg-arvidsson-molander-2019`

###### 排放至空气的石蜡蒸气（`paraffin_air`）

记录脱脂或烧结期间经回收和减排后排放的石蜡蒸气。不得以室内空气中的石蜡烃流表示受控外排口。

- 选定流：排放至空气的石蜡蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：石蜡投料减去回收物料、废物转移、产品或残碳滞留和期末库存变化，并与监测排放核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`furberg-arvidsson-molander-2019`

###### 排放至空气的颗粒物（`particulate_matter_air`）

记录粉末搬运、球磨、成形、精加工和废物搬运经捕集和减排后的颗粒物排放。如有数据，须将实测粒径级分和金属陶瓷组成作为限定信息报告。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：减排后归属于产品的烟道和无组织颗粒物排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：

###### 现场天然气燃烧产生的化石二氧化碳（`fossil_co2_air`）

仅当天然气在前景内燃烧时记录直接化石二氧化碳。上游电力排放不得作为直接前景排放录入。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由场址特定监测或燃料碳平衡得到并归属于前景天然气投入的化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干基净合格金属陶瓷产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用工序和内部循环 | 首先拆分过程或使用直接计量与批次记录，使负荷归属于导致该负荷的产品；内部循环粉末或溶剂不得作为共产品分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | 无法避免的共线生产 | 无法拆分时，按有记录的因果物理驱动因素分配共用电力、燃料、水、工艺气体和减排负荷，例如设备时间、计量负荷、处理气量或加工质量。 | `eu-pef-2021-2279` |
| `allocation_economic_last_resort` | 不存在合理物理关系的多个合格产品 | 仅在说明过程拆分和因果物理关系均不可行后采用经济分配；披露价格、币种、参考期间和敏感性。 | `eu-pef-2021-2279` |
| `allocation_recycling` | 金属陶瓷废料和回收粉末 | 内部闭路返回作为清单核对项报告；物料跨越场址边界时，报告其废物或产品状态、组成、去向以及下游研究采用的再生含量与寿命终结约定，避免重复计入收益。 | `eu-pef-2021-2279`; `furberg-arvidsson-molander-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `cermet_manufacture` | 每种单独外购的陶瓷粉末、金属黏结相粉末、石蜡和正庚烷投入 | 称量单、批次配方、领退料记录、供应商证书 | 物料身份；批号；毛质量；干质量；化验值；再生含量；领用；退回；期初和期末库存；批次 id | 经校准秤称量，并与批次和库存核对 | kg 和质量分数 | 每次接收和每批 | 至少连续 12 个有代表性的月份；生产周期更短时覆盖全部批次 | 报告场址生产所声明产品的全部生产线 | 按原子物料汇总跨场址净投入，再除以干基净合格产品质量 | 校准记录；供应商证书；批次谱系；库存核对 |
| `cp_water_and_gas_inputs` | `cermet_manufacture` | 工艺水和气态氮气 | 流量计、储罐平衡、采购及库存记录 | 流身份；表读数；压力；温度；干/湿基；纯度；回收量；期初和期末库存；批次或生产线 | 经校准计量表或有记录的储罐平衡 | 水用 kg；气体用 m3 | 连续或每批 | 与产品输出相同期间 | 全部归属生产和减排用途 | 将气体换算至所声明参考条件，扣除有记录的闭路回收量，共用量按因果驱动因素分配 | 仪表校准；状态换算记录；平衡闭合 |
| `cp_energy_inputs` | `cermet_manufacture` | 电力和天然气 | 公用工程表、分表、账单、设备日志 | 载能体；表起止读数；单位；电压或气体参考条件；设备时间；共用负荷驱动因素；批次 | 优先直接分表计量，并与场址公用工程记录核对 | MJ 和 m3 | 连续或每个生产周期 | 与产品输出相同期间 | 边界内全部生产、通风、减排、检验和精加工 | 汇总直接表读数，共用负荷按有记录的因果驱动因素分配 | 仪表校准；账单核对；分配工作表 |
| `cp_product_output` | `cermet_manufacture` | 参考产品 | 经校准秤、放行记录、检验和实验室记录 | 产品 id；配方；批次；毛质量；干质量；水分或滞留助剂；密度或孔隙率；尺寸或粒度；涂层和装配状态；处置状态 | 在边界内最终工序后称量合格产品并关联放行检验 | kg | 每批 | 与投入相同期间 | 离开报告场址的全部合格产品 | 汇总干基净合格产品；排除在制品和不合格输出 | 秤校准；放行证书；批次谱系；试验结果 |
| `cp_waste_outputs` | `cermet_manufacture` | 每种粉末废物、烧结废品和湿磨削污泥 | 称量单、容器日志、转移联单、处理回执 | 废物身份；组成；物理状态；毛质量和干质量；水分；来源；去向；处理方式；内部返回；日期 | 称量每次外运废物，并核对库存变化和内部返回 | kg | 每次外运及每月盘点 | 与产品输出相同期间 | 跨越报告场址边界的全部废物 | 按原子废物身份汇总外运质量；不得计入内部返回物料 | 经校准秤；废物联单；库存记录；处理回执 |
| `cp_air_emissions` | `cermet_manufacture` | 每种正庚烷、石蜡蒸气、颗粒物和化石 CO2 排放 | 烟道测试、连续监测、溶剂平衡、燃料碳平衡、捕集和减排日志 | 物质；环境舱室；浓度；流量；持续时间；投入；回收质量；废物转移；库存变化；减排效率；不确定度 | 有条件时直接监测；否则闭合物质特定平衡并与监测结果核对 | kg | 连续、生产周期或在所声明运行状态下的代表性测试 | 与产品输出相同期间且代表全部声明路线 | 减排后的全部有组织和无组织排放 | 积分浓度和流量，或应用闭合物质平衡；按干基净产品归一化 | 认可测试报告；监测仪校准；平衡闭合；运行状态记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 归属期间数量 / 干基净合格产品质量 | 原子投入或输出数量；干基净合格产品质量 | 每 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_cobalt_content` | `cobalt_powder` | 钴含量 = 钴粉毛质量 × 钴化验质量分数 | 粉末毛质量；批次或供应商化验值 | kg 钴含量 | `furberg-arvidsson-molander-2019` |
| `calc_gas_reference_volume` | `natural_gas`; `nitrogen_gas` | 使用有记录的气体定律和组成，将计量体积换算至所声明参考压力、温度和干/湿基；保留原始计量记录 | 计量体积；压力；温度；湿度；组成 | 所声明参考条件下的 m3 |  |
| `calc_material_balance` | 产品、物料、废物和直接排放核对 | 接收的外部投入 + 归属期初库存 = 产品 + 外部废物 + 直接排放 + 归属期末库存；超出所声明测量不确定度的差额须调查 | 干基物料投入；回收循环；产品；废物；排放；库存变化 | 闭合的期间物料平衡和无法解释差额 | `furberg-arvidsson-molander-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和每项交换 | 保留一个原子流身份、物理状态、组成或纯度、方向、流类型以及已确认的 Tiangong UUID；不得以材料、燃料、公用工程、废物或排放集合标签作为流。 | 批次谱系、供应商证书、流映射和 UUID 审计 |
| `dq_representativeness` | 前景数据集 | 至少覆盖连续 12 个有代表性月份内所声明的全部产品、生产线、班次和正常运行状态；若采用更短完整生产周期，须披露并说明理由。 | 生产日历、覆盖率计算和排除日志 |
| `dq_completeness` | 物料和能源平衡 | 在任何截断前，按质量或能量至少核算 99% 的实测干粉及黏结相投入质量，以及 99% 的计量电力和燃料；每项排除交换须单独列出。 | 核对工作表和截断登记表 |
| `dq_measurement` | 计量表、秤、化验和排放 | 使用校准有效的仪器并保留采样、检出限、换算和不确定度记录。低于检出限的值不得在无说明的情况下置零。 | 校准证书、实验室报告和监测 QA 记录 |
| `dq_secondary_data` | 关联上游及处理数据集 | 匹配组成、产品状态、技术、地理、期间和再生含量约定；单独记录每项不匹配和代理。 | 与 `eu-pef-2021-2279` 一致的数据集选择日志和数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 确认输出为微观陶瓷-金属复合材料或以金属为黏结相的烧结金属碳化物，处于所声明未装配出厂状态，且不是纯陶瓷坯体、均质合金、已装配工具、金属制工具刀片或机械。 | `eu-cn-cermet-definition-2020`; `eu-cermet-sticks-classification-2021` |
| `validation_reference_mass` | 参考流 | 归一化后须恰为 1 kg 干基净合格产品且必需限定信息完整；如为 UUID 未解决的参考产品使用范围更窄的工具零件 UUID 或其他代理流，则校验失败。 | `eu-pef-2021-2279` |
| `validation_atomic_inventory` | 清单 | 每项交换必须为原子流，按条件缺失的行须有路线记录支持；拒绝合并粉末、燃料、公用工程、废物或排放。 |  |
| `validation_balance` | 前景期间 | 要求物料、能源、溶剂、废物和直接排放在有记录的测量不确定度内闭合；无法解释的差额属于发现项，不得作为分配损失。 | `furberg-arvidsson-molander-2019` |
| `validation_uuid_semantics` | 带 UUID 的行 | 重新核对 state 100、英文和中文 baseName、流类型、分类、属性、单位组、产品状态及 generalComment；任何语义、环境舱室或状态不匹配均须判定失败。 |  |
| `validation_boundary_and_allocation` | 数据集和下游模型 | 确认所有受控工序、共用辅助设施、减排、直接排放和场外链接均已表示，且在采用任何经济分配前已优先采用过程拆分或因果物理分配。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明金属陶瓷配方及出厂产品状态的前景生产数据集 |
| downstream_use | 经审查并解决产品及清单身份缺口后用作 `secondary_dataset`；`background_dataset` |
| allowed_use | 当组成、产品状态、技术、地理、期间、再生含量约定、分配和上游链接均与研究匹配时，用于产品特定的从摇篮到大门或从摇篮到坟墓研究 |
| excluded_use | 不同金属陶瓷体系或产品状态之间的比较性声明；已装配工具或机械建模；将 UUID 未解决项作为已确认项使用；省略上游粉末生产或场外废物处理 |
| required_metadata | PCR id 和版本；场址和地理；报告期间；陶瓷相和金属相；配方及化验值；再生含量；粉末或制品形态；密度或孔隙率；尺寸或粒度；成形、烧结、压力辅助和精加工路线；涂层和装配状态；分配；截断；数据源；未解决身份 |
| required_quality_disclosure | 时间和生产覆盖；计量表和秤覆盖；化验基准；物料、溶剂和能源平衡闭合；排放监测；数据质量评价；不确定度；代理不匹配；外包工序；范围证据缺口 |
| update_trigger | 配方、产品形态、再生含量路线、粉末供应商技术、成形或烧结技术、压力辅助、精加工、能源供应、减排、分配基准、场址或代表性生产期间发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 41605 正式产品分类身份 |
| `eu-cn-cermet-definition-2020` | standard | 欧盟委员会实施条例 (EU) 2020/1577，综合命名法第 XV 类注释 4，https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf（检索日期：2026-09-04） | 金属陶瓷正式材料定义，包括以金属为黏结相的烧结金属碳化物 |
| `eu-cermet-sticks-classification-2021` | official_guidance | 欧盟委员会实施条例 (EU) 2021/910，https://eur-lex.europa.eu/eli/reg_impl/2021/910/oj/eng（检索日期：2026-09-04） | 一般金属陶瓷制品与范围更窄工具产品之间的边界 |
| `furberg-arvidsson-molander-2019` | literature | Furberg, A.; Arvidsson, R.; Molander, S. (2019)，Environmental life cycle assessment of cemented carbide (WC-Co) production，Journal of Cleaner Production 209，1126-1138，https://doi.org/10.1016/j.jclepro.2018.10.272 | WC-Co 粉末球磨、造粒、压制、烧结、投入、废物、溶剂回收及从摇篮到大门清单结构 |
| `wang-bai-wang-men-2024` | literature | Wang, L.; Bai, J.; Wang, Y.; Men, Z. (2024)，A Review of Research Progress on Ti(C,N)-Based Cermet Binder by Intermetallic Compounds and High-Entropy Alloys，Materials 17(3)，675，https://doi.org/10.3390/ma17030675 | Ti(C,N) 硬质相、Fe-Co-Ni 黏结相身份及粉末冶金路线 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，附件 I《产品环境足迹方法》，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期：2026-09-04） | 功能单位、参考流、边界、企业特定数据、数据质量、分配层级、报告和核查规则 |
