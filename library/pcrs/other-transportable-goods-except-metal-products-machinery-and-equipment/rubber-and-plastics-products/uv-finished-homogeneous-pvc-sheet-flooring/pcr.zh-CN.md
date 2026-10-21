---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uv-finished-homogeneous-pvc-sheet-flooring
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 厂内配混制UV涂饰同质PVC卷材地板

## 1. 范围与适用性

本限定制造方法从外购PVC树脂及分别供货的配方原料开始，包括厂内计量配混与塑化、压延制片并破碎成粒、颗粒混合铺撒与压实成紧密通体花纹片材、工厂UV涂饰、退火冷却、修边收卷、检测和首次质量放行。产品为无发泡、无导电功能、无背衬的同质柔性PVC地板卷材。薄保护面涂层不将主体变成印花多层地板。代表分支使用DOTP、研磨碳酸钙、整份外购钙锌稳定剂制剂及整份外购UV固化聚氨酯丙烯酸酯地板涂料；实际颜料与加工添加剂分别识别。[ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation]

这是透明的技术综合，不声称来源描述同一SKU、配方、工厂或当代订单。AHF提供完整同质片材路线及真实涂饰卷材终端。Prodinex独立提供相邻干背地板原料实例，但其多层热压路线不同。Arkema展示LVT基材原料选择与替代添加剂，并列出另一含锡稳定剂的硬质配方；二者均不是同质片材生产证明。来源中的质量比例、phr、尺寸、密度、能耗、损失、寿命、认证及分配键均非本规则默认值。尤其不移植Prodinex的蒸汽及废物/包装边界，也不采用AHF的面积分配方法。

排除纸墙纸、纸背乙烯基墙纸、塑料墙面/顶棚覆盖物、自粘材料、印花装饰膜多层地板、SPC/WPC硬芯、背衬/发泡/纺织结构、导电或防滑砂粒结构、无PVC聚合物、油毡、块材切片等瓷砖路线、购成品地板重新包装和一体化聚合。实质不同的结构或制造路线须另行审查适用性；本子集不代表CPC 36910全覆盖。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uv-finished-homogeneous-pvc-sheet-flooring |
| classification_refs | CPC 3.0:36910; 语义更窄的子集; 不代表接受映射 |
| covered_products | 工厂UV保护涂饰的紧密无背衬无导电功能同质柔性PVC地板卷材 |
| excluded_products | 纸/乙烯基墙纸; 塑料墙顶覆盖物; 自粘材料; 印花异质地板; 硬芯; 发泡/背衬/增强结构; 导电/砂粒地板; 瓷砖; 其他聚合物; 购成品重新包装 |
| representative_product | 指定通体花纹卷材品级，使用DOTP、整份外购CaZn稳定剂、研磨碳酸钙及整份外购聚氨酯丙烯酸酯UV涂料，不设固定配方或产品重量 |
| production_route | 原料 → 厂内配混塑化 → 压延与中间颗粒制造 → 混合铺撒压实 → UV涂布固化 → 退火冷却 → 修边收卷检测 → 首次放行 → 独立观察的成品服务 |
| market_state | 首次质量放行时已冷却调理固化的卷材，产品净质量排除卷芯及可分离包装 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 制造供独立建模安装使用的指定弹性室内地板 |
| How much | 1 kg新增首次质量放行的成品地板净质量 |
| How well | 实际通体结构与涂层固化、厚宽长度、尺寸稳定性、残余压痕及声明的防滑/防火/排放验收证据，不暗示通用阈值或认证 |
| How long or cycle | 一个唯一首次放行批群及声明的实际成品服务观察区间，不假定安装寿命或更换等效性 |
| reference_flow_link | released_floor |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PVC树脂形态与供应商品级; 每份整供制剂及其组成/含量/载体; DOTP身份与CaZn体系; 填料矿物/粒度规格; 每种颜料与加工添加剂; 颗粒压实路线与实际热设备; 无背衬无发泡无导电的通体主体; UV涂料SKU及供货湿态/固体化学组成和固化证据; 涂层保留量与实测挥发物; 卷材尺寸及调理净质量和实测kg/m2; 品级特定验收检测; 首次放行Q及唯一放行/返工/返回ID; 完整WIP/FG存量及逐交换继承负荷向量; 场址/期间及实测电压/供方; 冷却/供热方式与实际返回状态; 逐包装组成及gross实物发运/返回账; 原生泛类流限制及上游兼容性 |

全部限定信息须在元数据、过程说明、参考流备注或等效数据字段中声明。原生参考UUID是已制造塑料覆盖物的宽泛产品族，没有固定聚合物、配方、CAS、尺寸、地域或供方。其已制造成品、工厂生产混合语境允许本项已限定地板卷材，并不识别墙材、瓷砖集合、认证品级或可直接使用的背景数据集。消费指导时须保留各选定卡的完整限制。净千克不建立相同安装面积或寿命。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为同品级/状态批群新增且唯一首次质量放行的地板净千克，在声明的调理/含水状态用校准秤测毛重并扣卷芯/包装皮重，保留固化面涂层计入产品。已放行卷材重验、发运或返回均不新增Q，期末FG已包含其首次放行Q。 |
| area_conversion | reference product | Mass and area | kg; m2 | 分别实测同批成品净质量m及可用卷材面积S，g = m/S kg/m2，面积s转换为s*g kg。排除卷芯、重叠、包装和检测/拒收面积。不抄来源克重、不从厚度倒推密度、不猜每卷千克。 |
| supply_basis | all inventory rows | Mass and supplied state | kg | 每份外购制剂按完整供货交换计一次，活性比例、载水、含量检测仅为子账，不新增采购。实际厂内配制逐项列外购物料、能耗与损失。供货不挥发固体不自动等于固化保留质量。 |
| energy_units | make_electricity; fg_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原生能量链为Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66，参考MJ。累计kWh先乘3.6转MJ再归属，只有实测功率速率才积分，额定铭牌功率不是实际耗能。 |
| physical_state | all inventory rows | Mass and actual state | kg; m3; h | 仅真正速率积分，已积分气液体积本身即数量。体积转质量须该物质实际组成/温压下的独立密度测量，区分标况/工况及干湿气。不将水密度套用于涂料、溶剂、废水或气体，不从流次级属性推密度。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已到厂PVC树脂、逐种分别供货配方原料与公用工程，继承WIP及内部回用料保留原始交换负荷向量 |
| starting_condition_role | 前景接收门，上游树脂/原料/涂料制造保留在匹配供应商数据集中 |
| product_classification_scope | CPC 36910内已限定的同质柔性PVC地板卷材，独立于原生宽泛流名称 |
| recursive_input_rule | 外购成品地板是独立上游产品，须披露省略阶段，不可替代树脂配混；内部颗粒、片材修边和返工保留负荷历史，内部转移合并抵消 |
| upstream_dataset_requirement | 匹配实际聚合物/制剂、供货湿态、矿物品级、涂层体系、电力交付电压/地域/期间、水处理及各包装供方，显式纳入进厂运输；流UUID不单独证明供方兼容性 |
| disclosure | 报告制造至首次放行，并另列有日期的实际FG包装/仓储/搬运/发运账；披露未观察服务尾段、资本品处理、背景/运输连接及独立安装/使用/报废模块 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | floor_make | 保留所有真实配混/塑化/压延/破碎、颗粒处理/压实、涂布/UV固化、退火/冷却、修边/收卷/检测，包括失败及零产出批、启停、待机、清理、清机料、检测样及实际粉碎回用/返工。中间颗粒不是购入成品地板。 | ahf-homogeneous-2023 |
| boundary_formulation | floor_make | 识别每种分别外购物料及每份整供制剂。所列分支是技术综合而非通用配方。数据集使用前须为每种实际但尚未列出的颜料、添加剂、清洗剂、过滤件、润滑剂、燃料、制冷剂或处理药剂新增独立物理名称的投入/出口卡，未知量不作零，不藏入other。 | ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation |
| boundary_utilities | floor_make | 记录实际冷却/加热回路及进出口状态。代表电加热/UV分支不假定燃烧或外购蒸汽。若实际存在，新增具体热/蒸汽/热水产品投入及每股真实冷凝水/换热水产品返回，记录质量/温压/焓及供方水能约定。锅炉须独立计量燃料、空气/水、灰及逐物种，不从相邻EPD蒸汽虚构本厂回路。 | ahf-homogeneous-2023; prodinex-pvc-2025 |
| boundary_service | fg_service | 首次放行Q与后续包装仓储搬运发运分开，内部Q仅配对转移一次。按原始放行批保留期初期末FG、实物返回、原发运冲回及增量服务/返工。旧批保留原分母/负荷向量，其发运重验不产生新Q。 | ilcd-allocation-2010 |
| boundary_water_species | floor_make | 总物理质量及相关C/Cl/Ca/Ti平衡独立于实测化学物种证据。制剂载水、保留水/游离水/相态水与真实反应水分别识别；熔融、退火或UV交联不证明默认反应水。不用一个残差求两个未知排放/水量，不将VOC/COD变成假定化学物质量。 | ahf-homogeneous-2023; arkema-vinyl-formulation |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| floor_make | 原料至首次放行地板制造 | required | 选定同质颗粒压实与UV涂饰路线，包括实际条件添加/出口 | 前景制造及WIP/回用料负荷继承 | 每 1 kg 参考流 |
| fg_service | 实际成品服务 | required | 原始放行批及实际观察期间，披露未闭合服务尾段 | 独立FG/包装/返回及增量服务账 | 每 1 kg 参考流 |

每张非参考卡的A_i是该卡原单位原始量完成单位转换、真实归属及存量/负荷核对后的未除分子。第8节normalize_once仅执行一次A_i / Q。采集保留原始总量，aggregation字段仅声明最终报告基准，卡片文字与aggregation引用不重复除法。条件不存在须有实际路线证据，未知不算not_applicable。即使共用协议或仪表，每股实物流也分别记录。

### 过程：原料至首次放行制造 (`floor_make`)

#### 输入

##### 产品流

###### PVC树脂粉 (`pvc_resin`)

一项供厂内配混的外购原生PVC树脂粉牌号，记录K值/粒度规格、实际含水、供方与批号，不是废PVC或完整预配混颗粒。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： PVC树脂粉
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： ahf-homogeneous-2023; arkema-vinyl-formulation

###### 研磨石灰石填料 (`limestone`)

原生Product为厂内接收的石灰石填料/CaCO3、生产混合语境；无CAS、固定品级、粒度、研磨/沉淀路线、地域、供方或通用备注。CPC 15200为宽泛钙质岩分类，一致物料身份不证明填料品级。仅用于实际研磨石灰石填料，实测含水/纯度/粒度并披露表面处理，独立匹配上游供方，不替代生石灰或沉淀碳酸钙。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 碳酸钙 `dfce1026-0ad5-4362-87de-4b425a583e6b`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation

###### DOTP增塑剂 (`dotp`)

原生Product为透明液态DOTP，CAS 6422-86-2，别名对苯二甲酸二辛酯，工厂合成增塑剂，路线文字为2-乙基己醇与对苯二甲酸反应。不是DEHP/DINP或邻苯异构体。CPC 34170为不精确的有机物泛分类，不推翻一致CAS/名称/路线。未给固定纯度、牌号、地域或供方。整份供货牌号及杂质计一次，实质不同化学品或合成/供方另核兼容性。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 对苯二甲酸双(2-乙基己基)酯 `1b7a939f-e831-4fd8-b5bc-feb88fba435d`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： prodinex-pvc-2025; arkema-vinyl-formulation

###### 整供钙锌稳定剂 (`cazn_stabilizer`)

一份完整供货CaZn制剂，保留载体、盐类、含量及供方规格，不当成纯硬脂酸钙或锌。内含载体/添加剂仅列子账，单一协同稳定剂不识别完整制剂。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 钙锌PVC热稳定剂制剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation

###### 二氧化钛颜料 (`titanium_dioxide`)

条件性单独外购TiO2颜料，记录实际金红石/锐钛矿晶型、表面处理及供货组成。若包含于外购母料，则新增该母料具体卡并整份计一次，不重复购买其中TiO2。其他实际颜色逐个颜料或整供色料制剂另列。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 二氧化钛颜料
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： arkema-vinyl-formulation

###### 环氧大豆油 (`esbo`)

仅实际添加时纳入一项外购环氧大豆油牌号，记录环氧规格及供货组成；不因相邻LVT配方使用而自动纳入。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 环氧大豆油
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： arkema-vinyl-formulation

###### 硬脂酸润滑剂 (`stearic_acid`)

条件性单供硬脂酸，记录商品纯度及脂肪酸组成。实际配制润滑剂混合物须按其整供身份另列，不以纯酸代理。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 硬脂酸
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： arkema-vinyl-formulation

###### 丙烯酸类加工助剂制剂 (`acrylic_aid`)

条件性完整外购丙烯酸类加工助剂制剂，保留供方化学组成与物理形态，不是通用添加剂集合，也不假定为抗冲改性剂。实际独立改性剂或润滑剂须具体另列。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 丙烯酸类PVC加工助剂制剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： arkema-vinyl-formulation

###### 整供UV地板面涂料 (`uv_finish`)

按实际供货湿质量计一份可直接使用的外购地板面涂料；低聚物/反应稀释剂/光引发剂、水和溶剂比例仅列组成子账，核实固化/保留量及实测损失，不假定100%固体、零VOC或生成水的缩合。AHF支持UV涂饰，相邻Prodinex列聚氨酯丙烯酸酯；本综合不识别AHF涂料化学配方或共同SKU。实际厂内配涂料则逐项列外购组分及配制能耗损失。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： UV固化聚氨酯丙烯酸酯地板涂料制剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_finish仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_finish`
- 来源： ahf-homogeneous-2023; prodinex-pvc-2025

###### 制造电力 (`make_electricity`)

原生Product为用户侧<1 kV交流电消费混合、电网平均供电，不是水电发电、变压服务或电厂输出。原生供货地域为CN；此UUID仅绑定真实中国<1 kV电网平均用户门，并独立匹配供方/期间，其他地域或电压须另用经核实身份。AHF韩国案例不允许把该CN流用于韩国。按声明门核对真实变压/输配损失，不重复采购同一用电。原生参考属性为Net calorific value/MJ，不是Mass。 计量实际配混、加热、压延、颗粒处理/压实、UV、退火、冷却、修边、抽风、空压及清理/待机负荷；热设备以实际记录为准，不虚构蒸汽回路。  计量支持链：Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66，参考单位MJ。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_energy仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_energy`
- 来源： ahf-homogeneous-2023

###### 自来水补水 (`make_water`)

实际进入冷却/清理的条件性自来水。原生Product无固定处理路线、品级、地域、供方、别名或通用备注；现行CPC为天然水，保留的历史其他物品分类仅为存档。不得替代河水取用、去离子水或外购换热水服务。记录实际供水水质/供方，并独立测回路存量、排污、夹带、保留水和净蒸发。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_water仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_water`
- 来源：

###### 异丙醇清洗剂 (`clean_ipa`)

仅实际使用时计一份异丙醇清洗制剂，供货载水与杂质计一次。不规定清洗配方；实际使用其他清洗剂时按真实独立名称替换并另列出口，分别追踪残留溶剂和沾染擦拭物。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 异丙醇清洗制剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源：

###### 旧已放行地板返工接收 (`returned_floor_rework`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。条件性实物接收与fg_service的rework_to_make配对，保留原放行/发运及继承负荷向量。仅实际追加加工是新增负荷，原质量不变成新增Q。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_stock仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_stock`
- 来源： ilcd-allocation-2010

##### 废物流

##### 基本流

###### 空气净氧吸收 (`oxygen_uptake`)

仅实际臭氧生成或涂层化学反应耗氧且有独立证据时记净分子O2吸收。氧、臭氧及任何水/反应产物分别识别，不从总质量残差推吸收量或反应水。大量循环/穿流空气不自动当成已消耗氧。 原生CAS 7782-44-7，基本流、来自空气的可再生元素资源、质量/kg。仅用于独立实测的净分子O2吸收，不用于穿流空气、氧排放或外购氧；原生液氧同义词不证明采购供货或相变换算。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_species仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_species`
- 来源：

#### 输出

##### 产品流

###### 新增首次放行地板 (`released_floor`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。本卡为唯一参考输出，即实际固化调理与质量检测后的新增验收净Q，含保留涂层，排除卷芯/包装/拒收和先前已放行返工。Q仅向FG转移一次，合并物理账内部抵消，期末FG不再作为新增生产输出相加。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_release`
- 来源： ahf-homogeneous-2023

###### 旧地板返工后回FG (`old_rework_back`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。条件性旧已放行物料完成增量返工后的验收返回，与fg_service的old_rework_receipt配对，保留原分母和累计负荷，不重复首次放行。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_stock仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_stock`
- 来源： ilcd-allocation-2010

###### 对外转出PVC回用料产品 (`sold_pvc_regrind`)

条件性一项作为有用物料销售的独立无涂层回用料，须实际质量、买方规格、交付门、法律/经济状态与负荷。不是成品地板，也不自动产生共产品credit。交废物处理者走独立废物卡，废物/回收方法未解决则须审查。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 无涂层柔性PVC配混回用料
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源： ilcd-allocation-2010

##### 废物流

###### 外送无涂层配混料废屑 (`uncoated_scrap`)

一股实际无涂层修边/清机料外送指定处理端。内部破碎回用保留继承向量，仅作内部转移，不算再采购或负废物；实质不同清机/拒收组成另列。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 无涂层柔性PVC配混料废屑
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源：

###### 固化涂饰地板废品 (`coated_scrap`)

一股隔离的涂饰修边/拒收流，含实际固化涂层及污染，不并入无涂层回用料，另证回用限制与处理。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： UV涂饰柔性PVC地板废屑
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源：

###### 捕集配混粉尘 (`captured_dust`)

一股物理上共同收集的过滤粉尘废物，测定PVC/矿物/颜料组成，不当成排放。若树脂/填料/颜料分开捕集须分卡，实际更换过滤件/擦拭物载体另列称重投入及废物卡。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： PVC地板配混过滤粉尘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_material仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_material`
- 来源：

###### 未固化面涂料废物 (`spent_finish`)

条件性一股单独未固化残液，按实际固体/水/溶剂状态，包括过期料及清理排液；物理独立固化污泥或污染擦拭物须具体另列出口。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 未固化聚氨酯丙烯酸酯地板涂料残液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_finish仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_finish`
- 来源：

###### 冷却回路排污水 (`cooling_purge`)

一股实际冷却排污废水，测溶解/悬浮组成及接收端，内循环水不是外部消耗；供方所有的清洁返回水改列产品返回。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 冷却回路排污废水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_water仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_water`
- 来源：

###### 废异丙醇清洗液 (`spent_ipa`)

条件性独立废清洗溶液，测实际污染/水/溶剂，记录接收及回收/处理端，载液、保留产品残留和空气损失分别核对。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废异丙醇清洗溶液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_species仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_species`
- 来源：

##### 基本流

###### 排向空气的净水蒸气 (`water_vapour`)

条件性实际H2O蒸气，用回路/湿度及制剂记录独立计量。区分液滴、游离/保留/相态水及有独立证据的反应水，热/UV路线本身不产生默认化学计量水。 原生CAS 7732-18-5，基本流、未指定空气排放、质量/kg。须真实物种及介质证据；原生混合物/溶液同义词不允许替代整份制剂或分析总量。室内、水体、土壤、长期或更具体空气介质须另用经核实身份。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_water仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_water`
- 来源：

###### 排向空气的氯化氢 (`hcl_air`)

条件性真实降解或异常工况实测HCl物种，纳入失败批；明确介质、时段及捕集，不设默认因子，不将残差当HCl，捕集氯化物为另有实测的废水/废物组分。 原生CAS 7647-01-0，基本流、未指定空气排放、质量/kg。须真实物种及介质证据；原生混合物/溶液同义词不允许替代整份制剂或分析总量。室内、水体、土壤、长期或更具体空气介质须另用经核实身份。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_species仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_species`
- 来源：

###### 排向空气的异丙醇 (`ipa_air`)

条件性清洗实排异丙醇CAS 67-63-0，须化学物种专属测量；总VOC或清洗剂亏量不单独等于异丙醇质量，其他实际挥发物各设化学品卡。 原生CAS 67-63-0，基本流、未指定空气排放、质量/kg。须真实物种及介质证据；原生混合物/溶液同义词不允许替代整份制剂或分析总量。室内、水体、土壤、长期或更具体空气介质须另用经核实身份。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_species仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_species`
- 来源：

###### UV系统排向空气的臭氧 (`ozone_air`)

仅实际灯源/排气造成实测O3排放时纳入。无臭氧灯/LED不存在须有证据；实质相关时另记氧气消耗/返回，臭氧不是氧气质量或通用氧化剂。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 排向空气的臭氧
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_species仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_species`
- 来源：

###### 逸散配混气溶胶 (`escaped_dust`)

条件性一股组成已界定的实际配混气溶胶，记录受体介质，按需要分互斥粒级。独立纯填料/颜料气溶胶不合并，不将所有粉尘称PVC。捕集粉尘与逸散颗粒为不同去向，不从不透明度倒算物种。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 排向空气的PVC地板配混颗粒物
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_species仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_species`
- 来源：

### 过程：实际成品服务 (`fg_service`)

#### 输入

##### 产品流

###### 配对首次放行FG接收 (`release_to_stock`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。实物Q与released_floor仅配对一次，继承完整逐交换负荷向量，期末FG已含本Q，合并抵消此内部转移。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg`
- 来源： ilcd-allocation-2010

###### 客户实物返回 (`customer_return`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。条件性实物返回匹配原gross发运和首次放行，冲回原交付及历史向量，区别无实物流的商业退款；重验或再交付不新增Q。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg`
- 来源： ilcd-allocation-2010

###### 旧地板返工回库接收 (`old_rework_receipt`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。与old_rework_back配对，保留原批质量/负荷并加实际增量加工，不新增首次放行分母。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg`
- 来源： ilcd-allocation-2010

###### 成品服务电力 (`fg_electricity`)

原生Product为用户侧<1 kV交流电消费混合、电网平均供电，不是水电发电、变压服务或电厂输出。原生供货地域为CN；此UUID仅绑定真实中国<1 kV电网平均用户门，并独立匹配供方/期间，其他地域或电压须另用经核实身份。AHF韩国案例不允许把该CN流用于韩国。按声明门核对真实变压/输配损失，不重复采购同一用电。原生参考属性为Net calorific value/MJ，不是Mass。 此独立实测账仅覆盖实际包装仓储搬运装载及待机清理，按原始放行批群归属并保留观察时长，不混制造仪表，不将旧存货服务归给新增Q。  计量支持链：Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66，参考单位MJ。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg_energy仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg_energy`
- 来源： ilcd-allocation-2010

###### 纸板收卷芯 (`paper_core`)

条件性一项实际完整收卷纸管，内含胶计一次，明确支撑卷芯不是地板。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 纸板收卷芯
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 牛皮纸卷材包裹 (`paper_wrap`)

条件性实际单项包裹纸，实测组成/涂层，不假定克重或包装比例。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 牛皮纸卷材包裹纸
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 瓦楞卷材防护套 (`corrugated_sleeve`)

条件性按供货整件计实际瓦楞套及自身胶，独立端板是另一包装件，须另列。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 瓦楞纸板卷材防护套
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### LDPE保护膜 (`ldpe_wrap`)

条件性实际LDPE薄膜，不是树脂颗粒、多层膜或所有塑料包装。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： LDPE保护包裹膜
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 木运输托盘 (`wood_pallet`)

条件性实际一项木托盘，记录组成/含水及周转寿命，返程与修理为真实服务历史。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 木运输托盘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 聚丙烯捆扎带 (`pp_strap`)

条件性实际PP捆扎带，PET/钢带须另一具体包装及独立账。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 聚丙烯捆扎带
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 外部返回托盘接收 (`pallet_return_in`)

条件性同一实际周转托盘从外部返回，保留前周期负荷/服务及状态，实物接收不是新购托盘。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 木运输托盘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 纸板收卷芯随毛发运外出 (`paper_core_out`)

条件性实际整件包装随产品实物外出，按毛外出变动计量，匹配各自包装账及原放行批群。即使同件包装日后返回，也保留这次对外出口；不得与返回净抵、按分配份额扣实物量、加入地板Q、再生采购或假定共产品抵扣。向所有者返还空托盘仍是独立pallet_return_out交换。条件性一项实际完整收卷纸管，内含胶计一次，明确支撑卷芯不是地板。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 纸板收卷芯
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 牛皮纸卷材包裹随毛发运外出 (`paper_wrap_out`)

条件性实际整件包装随产品实物外出，按毛外出变动计量，匹配各自包装账及原放行批群。即使同件包装日后返回，也保留这次对外出口；不得与返回净抵、按分配份额扣实物量、加入地板Q、再生采购或假定共产品抵扣。向所有者返还空托盘仍是独立pallet_return_out交换。条件性实际单项包裹纸，实测组成/涂层，不假定克重或包装比例。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 牛皮纸卷材包裹纸
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 瓦楞卷材防护套随毛发运外出 (`corrugated_sleeve_out`)

条件性实际整件包装随产品实物外出，按毛外出变动计量，匹配各自包装账及原放行批群。即使同件包装日后返回，也保留这次对外出口；不得与返回净抵、按分配份额扣实物量、加入地板Q、再生采购或假定共产品抵扣。向所有者返还空托盘仍是独立pallet_return_out交换。条件性按供货整件计实际瓦楞套及自身胶，独立端板是另一包装件，须另列。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 瓦楞纸板卷材防护套
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### LDPE保护膜随毛发运外出 (`ldpe_wrap_out`)

条件性实际整件包装随产品实物外出，按毛外出变动计量，匹配各自包装账及原放行批群。即使同件包装日后返回，也保留这次对外出口；不得与返回净抵、按分配份额扣实物量、加入地板Q、再生采购或假定共产品抵扣。向所有者返还空托盘仍是独立pallet_return_out交换。条件性实际LDPE薄膜，不是树脂颗粒、多层膜或所有塑料包装。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： LDPE保护包裹膜
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 木运输托盘随毛发运外出 (`wood_pallet_out`)

条件性实际整件包装随产品实物外出，按毛外出变动计量，匹配各自包装账及原放行批群。即使同件包装日后返回，也保留这次对外出口；不得与返回净抵、按分配份额扣实物量、加入地板Q、再生采购或假定共产品抵扣。向所有者返还空托盘仍是独立pallet_return_out交换。条件性实际一项木托盘，记录组成/含水及周转寿命，返程与修理为真实服务历史。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 木运输托盘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 聚丙烯捆扎带随毛发运外出 (`pp_strap_out`)

条件性实际整件包装随产品实物外出，按毛外出变动计量，匹配各自包装账及原放行批群。即使同件包装日后返回，也保留这次对外出口；不得与返回净抵、按分配份额扣实物量、加入地板Q、再生采购或假定共产品抵扣。向所有者返还空托盘仍是独立pallet_return_out交换。条件性实际PP捆扎带，PET/钢带须另一具体包装及独立账。 逐项保留期初空件/附着WIP/附着FG/周转库存及采购/外部返回接收，与期末存量、随gross实物发运、对外返回及废物对账。内部复用抵消，不作采购、Q或自动共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 聚丙烯捆扎带
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源： ahf-homogeneous-2023

###### 对外返回托盘 (`pallet_return_out`)

条件性实际托盘返回所有者，与随gross发运托盘分开，返回本身不证明销售或共产品。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 木运输托盘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### 地板gross实物发运 (`gross_dispatch`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。按原放行ID记录含重复交付的实物发运，排除包装，保留退款/冲回及原负荷；gross发运不是净新增产量，旧FG不除本期新增批群Q。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg`
- 来源： ilcd-allocation-2010

###### 旧地板送实际返工 (`rework_to_make`)

原生Product是工厂已制造塑料覆盖物产品族，没有固定聚合物、CAS、配方、尺寸、品级、地域、供方或性能，别名为空。其地/墙/顶替代名称在此不是混合交换，本卡仅指一项已指定紧密无背衬无导电功能同质柔性PVC地板卷材及已固化UV面涂层。宽泛分类与UUID均不证明背景兼容性或安装服务等效性。条件性实物转移，与returned_floor_rework配对；保留原批/负荷、实际加工需要及实物返回，单独检验不是制造。  计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg`
- 来源： ilcd-allocation-2010

##### 废物流

###### 纸板收卷芯废物 (`paper_core_waste`)

条件性一项实际完整收卷纸管，内含胶计一次，明确支撑卷芯不是地板。 本卡仅为该单项包装实物废弃，按实际去向称量，不混合包装废物，不二次计上游采购。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废弃纸板收卷芯
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### 牛皮纸卷材包裹废物 (`paper_wrap_waste`)

条件性实际单项包裹纸，实测组成/涂层，不假定克重或包装比例。 本卡仅为该单项包装实物废弃，按实际去向称量，不混合包装废物，不二次计上游采购。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废弃牛皮纸卷材包裹纸
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### 瓦楞卷材防护套废物 (`corrugated_sleeve_waste`)

条件性按供货整件计实际瓦楞套及自身胶，独立端板是另一包装件，须另列。 本卡仅为该单项包装实物废弃，按实际去向称量，不混合包装废物，不二次计上游采购。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废弃瓦楞纸板卷材防护套
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### LDPE保护膜废物 (`ldpe_wrap_waste`)

条件性实际LDPE薄膜，不是树脂颗粒、多层膜或所有塑料包装。 本卡仅为该单项包装实物废弃，按实际去向称量，不混合包装废物，不二次计上游采购。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废弃LDPE保护包裹膜
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### 木运输托盘废物 (`wood_pallet_waste`)

条件性实际一项木托盘，记录组成/含水及周转寿命，返程与修理为真实服务历史。 本卡仅为该单项包装实物废弃，按实际去向称量，不混合包装废物，不二次计上游采购。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废弃木运输托盘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### 聚丙烯捆扎带废物 (`pp_strap_waste`)

条件性实际PP捆扎带，PET/钢带须另一具体包装及独立账。 本卡仅为该单项包装实物废弃，按实际去向称量，不混合包装废物，不二次计上游采购。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： 废弃聚丙烯捆扎带
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_package仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_package`
- 来源：

###### FG地板报废 (`fg_reject`)

条件性仓储/搬运/客户返回料的实际报废，原放行负荷随该批保留，增量搬运/处理另加，去向与制造拒收分开。 Tiangong流UUID未解决；保留此具体单一交换，实际数据使用前须核实完整供货/化学/形态/去向及匹配身份，不能用泛类替代。 计量支持链：Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位kg。

- 选定流： UV涂饰柔性PVC地板废屑
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： A_i / Q；仅第8节执行同一次最终报告运算，cp_fg仅采未除原始量。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_fg`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scenario | all inventory rows | 本方法限归因且研究目的/语境确需分配的场景。先判定每个输出实际功能及物理/法律/经济状态，工业制造来源不建立LCA分配。不得任意在物理/经济键间选择，不声称完整ILCD/EPD符合性。 | ilcd-allocation-2010 |
| allocation_subdivide | floor_make; fg_service | 先按品级、批和服务采集专属工序与独占投入，采用真实细分，再以可量化技术关系作虚拟细分以识别独占交换；保留共享过程须记录不可行原因及可能偏差。内部颗粒/回用料保留原负荷，不以自动credit替代第二次采购。 | ilcd-allocation-2010 |
| allocation_causality | all inventory rows | 对每个剩余交换识别并证实其对各共功能的决定性物理因果，按实际需要说明负荷/温度/固化/时间/空间机制。物料归入、热负荷和空间时间占用不必同键。工业EPD即使使用面积或质量比例，也不单独证明因果。保留驱动量、总和及敏感性。 | ilcd-allocation-2010 |
| allocation_residual | all inventory rows | 仅确实剩余且无受支持决定性因果的交换，才用共同过程门、真实状态/质量/数量/包装条件下同期市场价值。扣除有证据的后续加工、储存、包装和运输价值。记录价格基准、缺失/负/零值及敏感性；缺值须审查，不设均分或固定比例。 | ilcd-allocation-2010 |
| allocation_conserve | all inventory rows | 所有归属份额须对回未分配交换总量。有用对外物料须实际规格及合理功能；处理费或回收不自动产生共产品、零负荷或避免生产credit。须额外方法的废物/回收场景在证据解决前明确未解决，本PCR不设默认再生含量或报废公式。 | ilcd-allocation-2010 |
| allocation_fg | fg_service | 每项已观察服务按原放行批归属并保留原分母，返回冲回实际原发运/向量，只增加真实增量服务/返工。未归属启停/待机/失败批负荷保持可见并合理归属，不能因零产出消失。 | ilcd-allocation-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

各协议仅采未除原始记录，不采预归一强度。每项报告交换仅由normalize_once生成一次；下列aggregation_rule仅声明该报告基准。原始读数、转换、归属决定、逐交换继承向量和最终计算分别保留。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | floor_make | 逐种树脂/填料/增塑剂/稳定剂/颜料/添加剂/清洗剂及真实废屑/产品转移 | weighing_and_supply_record | lot_id; supplier_grade; physical_form; whole_formulation; gross_mass; tare; net_mass; assay; moisture; opening_raw; receipts; closing_raw; issued_mass; recovery_transfer; waste_destination; raw_unit; calibration_id | 逐项称实际整供及领用，核对期初+接收-期末原料库存，排除另账供货容器。追踪树脂配混至颗粒/片材及每种拒收/清机料去向，保留整供制剂及组成子账，不采归一值。 | kg | 每次接收/领用/运行/废物转移 | 完整生产周期含失败及零产出试验与存量切点 | 指定产线及相容品级/配方批群 | 每 1 kg 参考流 | 校准称重; 发票; 批记录; 供方规格; 废物票据; 物料核对 |
| cp_finish | floor_make | uv_finish; spent_finish | coating_and_cure_record | coating_sku; formulation; supplied_wet_mass; solids_water_solvent; opening_finish; receipts; closing_finish; application_mass; retained_cured_mass; uncured_residue; volatile_species; coat_area; lamp_type; UV_dose; cure_test; raw_unit | 称整供涂料、涂布领用及实际残余，对匹配试片测保留涂层并独立验证固化。保留实测组分及真实蒸发/化学去向，不假定全保留、缩合水或零挥发物。 | kg; m2; 实测UV剂量 | 每涂料批及固化区间 | 完整涂布固化周期含灯预热与清理 | 实际涂布站及同成品品级 | 每 1 kg 参考流 | 涂料SDS/TDS与供方组成; 校准秤; 前后试验; 固化及UV设备记录 |
| cp_energy | floor_make | make_electricity | meter_record | meter_id; voltage; provider; geography; interval_start; interval_end; kWh_start; kWh_end; measured_power_rate; operating_state; causal_driver; idle_load; shared_load; allocation_decision | 每项真实工序及辅助系统读取校准累计表差，只有实际功率速率才积分。保留未除原始能量，kWh先转MJ再按第7节归属并继承存量向量，仅normalize_once生成报告强度。 | kWh; MJ | 每生产/待机/启停/清理区间 | 与WIP及放行批群匹配的完整周期 | 声明真实用户侧电压和供方，仅电力分支 | 每 1 kg 参考流 | 分表校准; 账单; 设备/负荷图; 时间记录; 分配敏感性 |
| cp_water | floor_make | make_water; cooling_purge; water_vapour | water_state_balance_record | raw_unit; opening_loop; closing_loop; opening_loop_B_i; closing_loop_B_i; makeup; internal_recirculation; liquid_purge; entrained_droplets; supplied_carrier_water; retained_water; humidity_in; humidity_out; measured_vapour; density_evidence; temperature; pressure; actual_rate; duration; receiver | 独立计量/称补水、回路存量、液体出口、保留水及蒸气，采组成与真实状态。保留累计读数，仅速率积分；若存在则另核供热方返回约定，不用质量残差虚构两个水/物种数量。 两个切点均保留独立核算的回路水量及其逐交换继承负荷向量；同一库存不得又计入WIP或原料库。 | kg; m3; h | 每区间及存量切点 | 完整运行及清理 | 实际冷却/清理回路及外部接口 | 每 1 kg 参考流 | 校准仪表; 水质含量检测; 湿度记录; 接收方及水热合同 |
| cp_species | floor_make | hcl_air; ipa_air; ozone_air; escaped_dust; spent_ipa; oxygen_uptake | species_specific_monitoring | species_id; CAS; actual_medium; sampling_point; measured_concentration; integrated_volume; actual_volume_rate; sampling_interval; T; P; wet_dry_basis; capture_efficiency; composition; uncertainty; detection_limit; waste_mass; receiver | 实际化学物种采样及状态匹配体积，浓度乘累计体积已经是数量，真实体积速率先积分。逐气体物种与去向分列，颗粒粒级互斥。不得从总VOC/COD/不透明度推定物种，不将捕集物再记空气释放，使用前补实际未列物种。 | kg; 原测量单位 | 每种代表工况含异常与清理 | 完整周期并披露采样代表性 | 实际过程排气/空气吸收/清洗接收端 | 每 1 kg 参考流 | 监测方法及校准; 实验室物种分析; 检出限/不确定度; 捕集与废物转移证据 |
| cp_release | floor_make | released_floor | unique_release_record | grade; roll_id; original_lot; first_release_flag; release_time; gross_mass; core_tare; package_tare; net_mass; moisture_state; measured_length; measured_width; retained_finish; accepted_test; reject_mass; repeat_release_id | 校准秤称调理验收卷材，扣全部可分离皮重，匹配固化/尺寸/性能验收。以原首次放行ID去重，排除旧已放行返工、重复及拒收试验；唯一新增放行净质量求和为Q，面积转换另实测可用面积。 | kg; m; m2 | 每卷及每次放行决定 | 同周期及存量切点 | 同指定品级及物理状态 | 每 1 kg 参考流 | 校准/皮重; 首次放行台账; 检测结果; 去重/拒收轨迹; 实际面积质量采样 |
| cp_stock | floor_make | 每种原始交换及颗粒/片材/WIP/返工转移 | lot_and_burden_vector_record | lot_id; parent_lot; opening_WIP; closing_WIP; opening_in_process; closing_in_process; opening_in_process_B_i; closing_in_process_B_i; internal_chip; internal_regrind; current_raw_exchange_i; opening_B_i; closing_B_i; transfer_B_i; cohort_id; historical_Q; failure_load; allocation_record; physical_outlet | 从配混/颗粒/片材/固化及真实返工逐项追踪数量和每个交换继承负荷向量。期初向量加实际归属当期未除新增，与期末/转移向量核对，不将质量比例套所有交换。不假定同强度库存；Q零也保留失败批负荷。 同时纳入独立核算的过程内库存，包括冷却回路水及真实设备/面涂层存料，保留各自物理状态及继承向量；识别并消除其与原料库存、WIP及FG的重叠。 | kg及每交换原生单位 | 每批转移及期初期末切点 | 相关前批历史及完整当期周期 | 相同批群的产线/WIP/回用料/返工接口 | 每 1 kg 参考流 | 批谱系; 实测存量; 逐交换向量核对; 历史放行/返回记录; 缺失向量披露 |
| cp_fg | fg_service | release_to_stock; customer_return; old_rework_receipt; gross_dispatch; rework_to_make; fg_reject | finished_stock_return_record | original_release_id; original_Q; opening_FG; new_Q_transfer; old_rework_receipt; physical_customer_return; original_dispatch; reverse_B_i; gross_dispatch; rework_to_make; FG_waste; closing_FG; opening_B_i; closing_B_i; incremental_service_i; observation_dates | 称实物FG/返回并保留原放行/发运向量，实物返回冲回真实原交付，识别增量返工。独立核对FG门，旧批与新Q分账，和制造配对内部转移，合并仅抵消匹配内部项。 | kg及每交换原生单位 | 每存量/发运/返回/返工变动 | 原始历史及声明实际FG期间 | 指定FG仓及原放行批群 | 每 1 kg 参考流 | 盘点; 发运/返回单; 历史负荷; 商业退款与实物返回区别 |
| cp_fg_energy | fg_service | fg_electricity | service_meter_record | meter_id; kWh_start; kWh_end; voltage; provider; geography; original_release_id; occupied_space; duration; handling_load; idle_cleanup; attribution_driver | 独立计量实际包装仓储搬运装载及真实待机清理，原始能量先转换再归属，按有证据服务机制分给原放行批并保留原分母，不将旧批服务放进新增Q。 | kWh; MJ | 每服务区间 | 明确实际观察窗口含旧FG | 实际FG设备及用户侧供电 | 每 1 kg 参考流 | 服务仪表; 负荷/空间时间记录; 校准; 批群归属及开放尾段披露 |
| cp_package | fg_service | 每个具体包装投入、毛随货外出、废物及托盘外部返回 | individual_package_stock_record | package_article; supplier_composition; raw_unit; unit_net_mass; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchases; external_return_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_ship_out; external_return_out; waste; internal_reuse; repair; cycle_history | 每件包装测实际整供质量并独立核物理账。实际存在的原料/涂料供货容器须另列具体投入/返回/废物卡，不论独立开票或捆绑。附着包装随含重复交付的gross实物发运，不随净产品Q。内部复用仅配对抵消，外部返回独立记录。若按件采购则实测每件质量，不猜kg/item。 | kg; item及另实测kg/item | 每接收/应用/发运/返回/废弃及切点 | 完整供货和FG期间含前周转历史 | 每个具体包装跨原料/WIP/FG/周转位置 | 每 1 kg 参考流 | 称重; 采购/返回记录; 包装规格; 盘点; 周转/维修及gross发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_unit_conversion | all inventory rows | 保留原读数。校准原始质量/能量/体积/速率先转每行单位再归属，kWh * 3.6得到MJ；独立实测速率仅积分一次，累计量不乘时间。状态特定密度须独立证据。 | cp_material; cp_finish; cp_energy; cp_water; cp_species; cp_fg_energy; cp_package | 未除的已转换原始交换量 | |
| cohort_numerator | all inventory rows | 每交换i核对期初继承B_i加第7节归属的当期未除新增，与期末/转移B_i对应；实际WIP、回用料、旧已放行批及失败周期向量独立继承。所得A_i归其原始放行批，废物负荷保留，除非有证据共功能分配改变归属。不将废物质量当避免投入扣减，不将一个库存比例套所有B_i。 独立核算的过程内库存向量（包括回路水）也按同一方式核对，库存移动不视为新生产，也不抹去保留的历史负荷。 | cp_stock; cp_fg; cp_material; cp_finish; cp_energy; cp_water; cp_species; cp_fg_energy; cp_package | 任何除法前的卡片单位A_i | ilcd-allocation-2010 |
| release_denominator | released_floor | Q = cp_release中唯一新增首次放行调理地板净千克求和，含保留涂层而排除可分离包装/芯。不把期末FG或重复放行/返回/旧料返工加入Q。 | cp_release; cp_stock; cp_fg | Q | |
| normalize_once | all inventory rows | Q > 0时仅一次x_i = A_i / Q，Q属于该原始放行批群。released_floor参考输出为1千克。Q = 0保留真实原始/归属负荷与库存至失败批账，不出单位结果，未来归属须有证据。卡片/aggregation引用同一次运算，不再除x_i。 | A_i; Q; cp_stock; cp_fg; cp_release | 每1 kg参考流x_i，或Q = 0无单位结果 | |
| manufacturing_physical_gate | floor_make | 期初WIP + 期初独立核算过程内库存 + 实际非吸收物料净领用 + 旧已放行返工接收 + 独立实测净吸收 = 期末WIP + 期末独立核算过程内库存 + 新Q + 旧返工回FG + 对外产品/废物/基本物质出口。冷却回路水及真实设备/面涂层存料仅在未纳入原料库存或WIP时计入过程内库存，逐回路/物料独立核对。每项实物投入（含净氧吸收）只计一次，化学反应不创造总质量。内部颗粒/回用料转移抵消，电力不入物理质量。另作独立C/Cl/Ca/Ti对应平衡，不将未知物种拟合成残差。 | cp_material; cp_finish; cp_stock; cp_release; cp_water; cp_species | 制造质量及独立相关元素/物种核对 |  |
| fg_physical_gate | fg_service | 期初FG + Q转入 + 客户实物返回 + 旧返工接收 = 期末FG + gross实物发运 + rework_to_make + FG废物。每继承负荷向量也同核，仅加真实服务/返工并冲回原交付。 | cp_fg; cp_stock; cp_release; cp_fg_energy | FG数量/向量核对 | |
| combined_physical_gate | floor_make; fg_service | 匹配Q及返工内部转移抵消后：期初WIP + 期初FG + 期初独立核算过程内库存 + 外部非吸收物料领用 + 客户实物返回 + 独立实测净吸收 = 期末WIP + 期末FG + 期末独立核算过程内库存 + gross实物发运 + 对外产品/废物/基本物质出口。纳入与制造门相同的回路/设备/面涂层库存，不重复原料/WIP/FG库存；每项投入及吸收仅出现一次。Q仍为首次放行生产统计，不在FG之外再作外部实物输出。包装排除产品净质量并入package_balance。 | cp_stock; cp_fg; cp_release; cp_material; cp_finish; cp_water; cp_species | 不重复Q的合并物理核对 |  |
| package_balance | fg_service | 每种包装独立：期初空件 + 期初附着WIP + 期初附着FG + 期初周转 + 采购 + 外部返回接收 = 期末空件 + 期末附着WIP + 期末附着FG + 期末周转 + 随gross实物发运外出 + 对外返回 + 废物。内部复用抵消，不用净Q替gross发运，不将返回/复用件再作采购或共产品。 | cp_package; cp_fg | 每种包装独立物理与负荷账 | |
| area_descriptor | reference product | g = 同批调理净m / 实测可用面积S，面积s对应s*g kg。保留实测质量、面积、厚度、面涂层和验收状态，不从此比例推密度。 | cp_release | 品级/状态特定实测kg/m2及面积描述 | |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 保留完整供货制剂及单一原子交换，匹配全部原生CAS/形态/路线/类型/属性限制、UUID官方中文名与真实供方。辅助UUID空缺保持具体身份工作，不用泛binding。 | 供方规格; 精确原生记录; 相容供方审查; 逐项未解决行 |
| dq_primary | floor_make | 从原料至固化验收卷材采真实未除测量，含每种失败/待机/清理/返工状态。公开案例仅为路线证据，不是本厂原始数量。 | 校准仪表/秤; 批记录; 全期日志; 存量及固化证据 |
| dq_vectors | floor_make; fg_service | 保留全部期初期末WIP/FG及逐交换历史向量、真实首次放行/发运/返回谱系与增量服务。未知历史或开放服务尾段是数据集明确完整性缺口。 独立核算的过程内回路/存料数量及各继承交换向量遵守相同要求，且不得与产品/原料库存重叠。 | 批谱系; 历史B_i; 返回冲回; 实际期间和物理门 |
| dq_species | floor_make | 独立支持总质量/元素平衡、真实物种及水状态。报告检出限、代表性、不确定度及未解决去向，平衡闭合本身不识别物种。 | 独立物料/元素/物种/水记录及敏感性 |
| dq_complete | all inventory rows | 数据集宣称完整前补每股实际缺失的单一物料、公用工程、包装、废物、气体物种与去向。不存在须证据，不把真实流藏在zero/other。 | 设备和供方清单; 出口调查; 逐包装账; 未测量/缺口登记 |
| dq_source_limits | all inventory rows | 不移植案例配方、能耗/蒸汽、来源寿命/认证、废物省略或工业面积分配。保留技术综合及归因方法条件。 | 来源特定路线/状态判断; 数据集边界声明; 第7节决定 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | 核真实紧密通体PVC卷材结构及完整颗粒压实/UV涂饰路线，含实际原料接收与终端检测。泛覆盖物UUID或CPC叶不单独建立适用性。 | ahf-homogeneous-2023 |
| validate_reference | released_floor | 核全部必需限定、唯一首次放行Q、实际调理净质量/皮重及保留涂层、双语同参考link/基准，不重复放行或FG计量。 | ahf-homogeneous-2023 |
| validate_accounting | all inventory rows | 先核单位转换、真实归属及未除A_i，仅对正的原批Q执行一次normalize_once。Q零负荷可见而不出单位结果。执行完整有限计量关系，不将未知称通过。 | ilcd-allocation-2010 |
| validate_gates | floor_make; fg_service | 独立核制造、FG及合并物理门、全部WIP/FG交换向量及逐包装账。历史客户返回冲回原发运/向量，真实额外返工独立归属，不作新增生产。 在制造及合并公式中均核对独立核算的期初期末过程内库存（含冷却回路水），每项真实吸收和投入只计一次。 | ilcd-allocation-2010 |
| validate_species | floor_make | 独立核水状态、质量/元素与物种证据，拒绝一个残差求两未知、累计体积再积分、猜密度、总VOC/COD转特定物种或捕集+排气重复。 | |
| validate_allocation | all inventory rows | 核归因语境、细分及专属/虚拟归属、逐交换决定性物理因果，之后才对真实剩余用共同过程门同期真实状态市场价值。不设固定比例、不任意质量/面积/经济选择、不自动回收credit、不作无支持废物方法声明。 | ilcd-allocation-2010 |
| validate_completeness | all inventory rows | 核每股实际原子流及去向、组成/供方限制、精确UUID属性/单位链、旧失败及缺失数据。普通辅助/供方工作区别于核心路线/终端/方法缺口，缺本厂证据阻止该数据集完整性，不伪造科学审批。 | |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 同一已限定PVC片材品级、路线及声明门的制造供应清单，安装及生命周期模块独立连接 |
| allowed_use | 匹配产品/涂层/供方/电压/状态后的质量基准制造建模，面积转换仅用同品级实测kg/m2 |
| excluded_use | CPC 36910泛全覆盖; 墙纸/墙/顶/自粘/硬芯/泡沫/瓷砖路线; 安装寿命比较; EPD认证; 默认配方/蒸汽/credit; 科学或翻译审批 |
| required_metadata | 产品及逐整供制剂; 路线设备; 首次放行批群及Q; 净质量/面积/状态; 固化验收; 场址/期间/电压/供方; WIP/FG向量和返回谱系; 逐包装及已观察服务; 上下游边界 |
| required_quality_disclosure | 采样/校准/不确定度; 来源迁移限制; 原生身份与供方限制; 辅助UUID空缺; 实际缺失数量/存量/物种; Q零失败; 分配敏感性; 未观察FG服务尾段 |
| update_trigger | 树脂/制剂/涂层/结构/路线改变; 新能源或热回路/供方; 验收/返回政策更新; 库存/服务模式实质改变; 更好原始证据或原生身份纠正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ahf-homogeneous-2023 | literature | AHF Products / SCS，SCS-EPD-08964，2023-05-10，AHF Contract Homogeneous Sheet，PDF第3–6及11页：https://www.ahfcontract.com/cdn/content/sites/10/EPD-AHFContract-Homogeneous.pdf?download=true | 同质涂饰卷材终端、原料至颗粒/压实/UV/退火/收卷路线、质量检测和纸/纸板包装；仅2021韩国案例，不迁移配方/克重/寿命/性能/面积分配。 |
| prodinex-pvc-2025 | literature | Stichting MRPI，Prodinex PVC/LVT干背地板，1.1.00809.2025，2025-04-24，PDF第2–4页：https://www.mrpi.nl/epd-files/epd/1.1.00809.2025%20MRPI%20EPD_PVC%20flooring%20Prodinex.pdf | 独立相邻原料实例DOTP、CaZn及聚氨酯丙烯酸酯，多层热压反例。不是同质路线证明，不迁移数量、不假设蒸汽、不作损失/默认废物边界、认证或分配依据。 |
| arkema-vinyl-formulation | extension_guidance | Arkema Plastic Additives，Plastic Additives for Luxury Vinyl Tile，未注明日期的出版方页面：https://plasticadditives.arkema.com/en/innovation/luxury-vinyl-tile/ | 原料选择技术综合及条件ESBO/硬脂酸/丙烯酸助剂/TiO2卡；北美LVT基材实例及另一硬质含锡配方为反向语境，不是同质地板配方、必加原料或数值默认。 |
| ilcd-allocation-2010 | official_guidance | 欧盟委员会JRC，ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance，2010第一版，§§7.9.2–7.9.3，PDF第275–288页、印刷255–268页：https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 条件归因细分/虚拟细分、逐交换决定性物理因果、真实剩余共同过程门经济价值及守恒，不提供工业配方、废物/回收默认、QFD产品功能分配或全方法符合性声明。 |
