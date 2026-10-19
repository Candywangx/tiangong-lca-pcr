---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.writing-or-drawing-ink-and-other-inks
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 书写或绘图墨水：水性染料配制路线

## 1. 范围与适用性

本记录覆盖实际作为书写墨水供应的水性可溶染料物理配制，以EP0030389A1实例2为有证据的蓝色代表。分类名称不建立配方。对选定产品和期间追踪有记录的溶解/混合、实际调制、质量放行、包装、仓储、搬运、清洗、返工和厂门发运。专利中的成分比例、温度、时长及性能测试仅是实例，不规定工业剂量、收率、操作条件或服务性能。`sakura-aqueous-writing-ink-1981`。

印刷油墨（包括喷墨、胶印、凹印油墨）、美术颜料和涂料、单独染料/颜料/树脂/溶剂、完整笔具/墨盒、固体墨条、颜料研磨、UV固化、染料盐合成及其他化学反应路线不在本证据限定方法内。“绘图墨水”或“其他墨水”用途标签本身不扩大覆盖范围，条件复用前须证明同一物理配制路线及产品状态。适用的产品复用既有语义记录，不因新最终用途另造重复PCR。真实新增配料、容器、处理及公用工程须先分别成为具体原子交换，才可声称覆盖完整。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.writing-or-drawing-ink-and-other-inks |
| classification_refs | CPC 3.0 35140; 仅分类背景；方法只覆盖声明子集，本记录不创建accepted edge |
| covered_products | 有记录的物理配制水性可溶染料书写墨水 |
| excluded_products | 印刷油墨；美术颜料；原料染料/颜料/树脂/溶剂；笔具；反应及颜料分散路线 |
| representative_product | 蓝色水性书写墨水；酸性蓝9商品制剂代表，不是通用强制组成 |
| production_route | 取得整份商品配料；溶解/混合；实际调制；放行；包装/仓储/搬运及发运；不假定反应 |
| market_state | 厂门交付的含载体水液体制剂；包装单独记录 |



## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应所声明的整份水性染料书写墨水液体制剂 |
| How much | 厂门实际交付并验收的1 kg净墨水 |
| How well | 满足真实声明的产品规格及接收验收记录；不规定通用书写长度、危害、耐久性或剂量 |
| How long or cycle | 一个声明且匹配的交付核算期间；此为质量参考，不是使用寿命功能比较 |
| reference_flow_link | delivered_ink |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 书写或绘画用墨水及其他墨水 `7b873d98-a9cc-416f-a9e8-a5888295364b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实墨水身份及书写功能; 配方修订与整份供货形态; 水性可溶染料路线; 载体/活性/水分基准; 产品等级及验收规格; 场址和供应商地理; 匹配期间及交付批群; 实际净交付参考门; 在制品和成品期初期末及结转负荷; 退回/返工链接; 包装和纳入的发运范围; 原生身份限制及provider适用性 |



所有必需限定信息均应在数据集元数据或等效产品/过程说明中声明。原生参考身份宽于本方法；药品generalComment是明确元数据债务，未提供CAS、等级、地理/locationOfSupply或配方。Mass参考系数1不是密度。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_ink_mass | reference product | Mass | kg | 参考是扣除所有包装的整份供应墨水。Q为真实唯一正值验收净交付量，不是新增放行产量，也不是干染料或活性质量。期末未交付成品不计入Q。 |
| supply_form | all material inputs | Mass | kg | 按完整供货湿形态计量外购制剂。含量及载体水仅为成分子账，不可把整份制剂采购与其成分重复计算。现场分别采购及混配负荷仍为外部投入。 |
| raw_conversion | all inventory rows | Declared row property | declared row unit | 各原始记录先换算，再唯一归一。体积换质量须有同配方及温度条件下的实测密度。流率只积分一次；已积分液体/气体体积不再乘时间。统一保留kWh或MJ；蒸汽热采用实测焓差。 |



## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从现场接收整份商品配料或相符的整份已配制墨水，至实际厂门净交付的物理配制 |
| starting_condition_role | 前景接收边界；上游生产须链接，不得因遗漏而视为零 |
| product_classification_scope | CPC35140背景，仅限声明的水性可溶染料书写墨水路线；排除35130印刷油墨及35120美术颜料 |
| recursive_input_rule | 整份外购墨水作为一个外部投入并带上游生产。返工及生产到仓库交接为内部链接，合并时抵消，不产生循环新采购或新输出 |
| upstream_dataset_requirement | 逐项匹配真实供货形态、路线、浓度、地理和参考单位；通用身份UUID不建立背景provider数量 |
| disclosure | 声明接收、生产放行、在制品、成品仓储、包装、搬运、退回、处理及厂门发运边界，列明纳入负荷及明确排除项 |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_physical | formulate_dispatch | 使用真实溶解/混合记录。本方法不提供颜料研磨、树脂合成、染料盐反应、反应水因子或通用配方。新增化学反应须有独立反应/物种证据及方法审查。 | `sakura-aqueous-writing-ink-1981` |
| boundary_complete | formulate_dispatch | 纳入声明边界内可归属的准备、实际过滤、质量废弃、失败/零产出批、清洗、返工、包装、仓储、搬运、装载及其他真实发运负荷。真实缺失流逐项原子补充。厂门以外运输另为声明模块。 |  |
| boundary_stock | formulate_dispatch | 分别保留生产与成品仓库质量账。生产记录唯一新增质量放行量及在制品，不可把同批放行量及其期末成品库存加成两个生产输出。仓库记录期初、内部收货、实际净发运、废弃和期末。合并抵消内部放行/收货。在制品/成品库存结转负荷保留，包括失败与返工负荷。 |  |



## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulate_dispatch | 水性墨水配制及厂门交付 | required | 声明的水性可溶染料产品；条件行仅在真实发生时纳入 | foreground_production | 实际净交付1 kg墨水 |



### 过程：水性配制及厂门交付（`formulate_dispatch`）

代表卡片描述分别取得的真实供货形态，不构成强制配方。未用配料须记录为未使用；真实不同的染料、助剂、树脂、燃料、过滤介质、容器组件或出口须另设化学/物理身份具体的行并提供证据。现场记录未齐前，不声称现场清单完整。内部退回/返工及期初期末库存保留为链接子账，不得隐去。

#### 输入

##### 产品流

###### C.I. 酸性蓝9商品染料制剂（`dye_blue9`）

有证据的蓝色代表产品使用 Water Blue #9。采集整份购入制剂及其含量、水分和盐分；不得用纯染料质量或检索命中的硫酸铜替代。

- 选定流：C.I. 酸性蓝9商品染料制剂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### N,N,N′,N′-四(2-羟丙基)乙二胺商品制剂（`amine_stabilizer`）

仅在实际投料时纳入；保留整份供货形态及含量。六亚甲基四胺或三乙胺检索结果是不同物质。

- 选定流：N,N,N′,N′-四(2-羟丙基)乙二胺商品制剂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### 乙二醇（`ethylene_glycol`）

身份为工业纯物质，CAS 107-21-1，环氧乙烷水合路线、生产及工业投入组合，在工厂；名称另提电解液溶剂用途。地理/locationOfSupply及纯度数值未指定。仅用于相符的购入物质，不据此推定电解液等级或场址。购入水溶液须作为独立整份制剂，不能以本纯物质行再重复加水采购。

- 选定流：乙二醇 `3685eaf5-415b-46b2-a350-8b8cf548abbf`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### 甘油（`glycerol`）

CAS 56-81-5；生产混合，在工厂。地理/locationOfSupply、等级、纯度及制造路线未指定。原生医疗及无毒文字不构成本PCR的危害或性能规则。独立匹配供应商形态与路线；粗甘油或水溶液不自动等同。

- 选定流：甘油 `32d6a3cd-fb89-4a48-9594-bb240083042e`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### 苯甲酸钠商品制剂（`sodium_benzoate`）

仅纳入实际采购和使用，保留制剂浓度。苯甲酸不等于苯甲酸钠；不规定通用防腐剂剂量或安全性质。

- 选定流：苯甲酸钠商品制剂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### Scourol #400 聚氧乙烯烷基醚制剂（`surfactant_scourol400`）

历史实例指定该商品制剂，但未提供烷基链、EO分布及活性含量；不得推成月桂基醚或纯表面活性剂。数据集使用前须以原始证据核实当前供应商身份及真实整份制剂。其他助剂须另建具体原子行并提供证据。

- 选定流：Scourol #400 聚氧乙烯烷基醚制剂

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### 水性墨水配制用水（`formulation_water`）

按实际供水等级记录单独取得的配制水。购入染料或助剂溶液内已有的水仅入成分子账，不再次作为外部采购。不默认去离子路线。

- 选定流：水性墨水配制用水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：`sakura-aqueous-writing-ink-1981`

###### 书写或绘画用墨水及其他墨水（`purchased_ink`）

条件纳入实际混配或换装的外购整份已配制水性书写墨水；它不等于原子颜料、染料、树脂或溶剂。通用原生身份为工厂生产混合、已制造成品Product，地理/locationOfSupply、等级及CAS未指定；无关药品备注是元数据债务。核实适用性与上游生产负荷，UUID不提供配方。内部返工不能变成此项外购。

- 选定流：书写或绘画用墨水及其他墨水 `7b873d98-a9cc-416f-a9e8-a5888295364b`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：

###### 配制及厂门发运作业用电（`electricity`）

计量边界内混合、泵送、实际过滤、清洗、包装、仓储、搬运、发运和返工用电。共用设施采用有记录的物理动因，不假定未指定的区域供应商。

- 选定流：配制及厂门发运作业用电

- 流属性/单位：Energy / kWh

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_utilities`

- 来源：

###### 蒸汽供应的工艺热（`steam_heat`）

条件纳入实际外购蒸汽热，按蒸汽与回流冷凝水焓计量。不得将同一热量再计为电加热，或同时记为燃料与外购热。真实现场燃烧供热须另列燃料、锅炉水和排放原子行。

- 选定流：蒸汽供应的工艺热

- 流属性/单位：Energy / MJ

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_utilities`

- 来源：

###### 墨水设备清洗用水（`cleaning_water`）

采集包括失败批和换批在内的真实清洗用水，不并入配制水。有清洗剂时须另列具体行。

- 选定流：墨水设备清洗用水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_materials`

- 来源：

###### 交付书写墨水用玻璃瓶（`glass_bottle`）

条件纳入实际玻璃瓶，称量玻璃部分并追踪破损、退回、复用及应归属制造负荷。散装交付按真实容器记录，不能虚设玻璃瓶。

- 选定流：交付书写墨水用玻璃瓶

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：

###### 聚丙烯瓶盖（`pp_cap`）

条件纳入真实聚丙烯封盖，与玻璃分列；其他材质的垫片或封膜须另列原子行。不得由瓶型推定瓶盖聚合物。

- 选定流：聚丙烯瓶盖

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：

###### 瓦楞纸板运输纸箱（`corrugated_carton`）

条件纳入真实单个纸箱，按声明结构称量；有内衬、胶带及托盘时分别列行。包装质量不计入墨水Q，但其负荷保留。

- 选定流：瓦楞纸板运输纸箱

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：

###### 新墨水过滤滤芯（`fresh_filter`）

条件纳入真实生产过滤滤芯，依供应商资料声明材质及尺寸。整份滤芯消耗与废滤芯残墨区分；稳定性试验用滤纸不能作为生产过滤证据。若有另购过滤介质，须独立原子列行。

- 选定流：新墨水过滤滤芯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 输出

##### 产品流

###### 书写或绘画用墨水及其他墨水（`delivered_ink`）

终端参考输出为厂门实际唯一验收净交付墨水。原生宽泛名称、已制造状态、Product类型及Mass相符；名称未指定等级或地理/locationOfSupply，也无CAS。原生generalComment写作352 Pharmaceutical products / 352 药品产品，与产品不符的元数据明确作为债务保留，不据此认作药品身份或配方。本方法仅可用于声明的水性书写墨水子集。

- 选定流：书写或绘画用墨水及其他墨水 `7b873d98-a9cc-416f-a9e8-a5888295364b`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：1 千克

- 数值来源模式：`fixed_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_delivery`

- 来源：`sakura-aqueous-writing-ink-1981`

##### 废物流

###### 废墨水过滤滤芯（`spent_filter`）

仅在真实生产过滤时条件纳入，记录含残墨的废滤芯并区分滤芯消耗。专利稳定性测试用滤纸不能证明所有工厂都设生产过滤。

- 选定流：废墨水过滤滤芯

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_outlets`

- 来源：

###### 送处理的废弃水性染料书写墨水（`waste_ink`）

采集最终废弃质量、组成和处理路线，包括失败或零产出批。内部返工墨水是有链接的内部转移，不能同时记为外部废物和新采购。不指定通用危险分类。

- 选定流：送处理的废弃水性染料书写墨水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_outlets`

- 来源：

###### 书写墨水设备清洗废水（`wash_effluent`）

采集整份废水流及独立测得的组成。交接污水处理时为废物流；若纳入现场处理，须展开处理投入、污泥和逐物种排放，不得重复计同一未经处理负荷。

- 选定流：书写墨水设备清洗废水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_outlets`

- 来源：

##### 基本流

###### 墨水作业向空气排放的水蒸气（`water_to_air`）

条件纳入测量或独立证据支持的蒸发，并声明空气介质。质量缺口不自动等于水，不为物理混配虚构反应水量。

- 选定流：墨水作业向空气排放的水蒸气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_outlets`

- 来源：

###### 向空气排放的乙二醇（`glycol_to_air`）

条件纳入真实乙二醇排放并声明空气介质。必须有该物种证据；总VOC、COD或衡算残差都不能识别乙二醇排放。其他真实物种须分别另列原子行。

- 选定流：向空气排放的乙二醇

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：按第8节唯一期间计算将可归属交换按声明参考流报告一次；保留本卡采集协议。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`process_output`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_outlets`

- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | formulate_dispatch | 先将配料及生产/仓储/发运负荷追溯至真实产品-路线-状态批群，再用实测动因细分共用作业。记录动因值并守恒。不虚设固定分配，也不将废物当共产品抵扣。 |  |
| allocation_failures | formulate_dispatch | 原始账保留所有可归属失败、零产出、废弃及返工负荷。按有记录的因果关系可归于正交付批群；独立Q为零期间不得除算或悄然删除，保留并明确关联后续批群，或不报告归一数据集。内部再验收不产生新产量。 |  |



## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各协议的aggregation_rule仅声明最终报告基准；collection_method采集未除的原始期间量和全部结转负荷。仅计算规则delivery_normalization执行一次A/Q，不能在采集端或卡片再次除算。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | formulate_dispatch | terminal delivery and stocks | weighing_and_acceptance | 产品/配方/路线/状态; 批/交付/退回ID; 期间; 毛/皮/净kg; 放行记录; 在制品及成品期初期末kg; 库存负荷向量; 转移/返工链接 | owner：发运及库存核算负责人。将校准净交付称重与唯一验收/冲回记录核对；生产、在制品及仓库分别成账。记录全部期初期末质量及既往结转负荷、失败批和退回。再验收不造新产量；同一实物退回量无相应冲回不得获得第二次交付计数。仅采集原始量，本协议不做A/Q。 | kg | 逐次移动及期末 | 完整匹配核算期间及库存结转历史 | 声明工厂及交付批群 | 每 1 kg 参考流 | 秤校准; 验收/退回轨迹; 库存及负荷结转核对 |
| cp_materials | formulate_dispatch | each acquired ingredient and cleaning water | purchase_and_charge_records | row_id; 供应商/批; 整份供货形态; 毛/皮/净; 含量/水/活性; 投料和损失; 退回; 原料及在制品期初期末; 结转负荷 | owner：配制材料核算员。保留全期间逐项采购及投料，包括失败、零产出及返工。将接收及原料库存与真实消耗核对；整份制剂与成分子账区分。记录匹配在制品/成品负荷转移且不再次归一；核对供货形态与原生限制。采集端不做A/Q。 | kg | 逐批及逐次投料 | 包含失败批及前期库存历史的完整匹配期间 | 同场址/产品/路线/状态 | 每 1 kg 参考流 | 发票; 投料秤; 供应商规格; 含量检测; 库存核对 |
| cp_utilities | formulate_dispatch | electricity and separately metered steam heat | meter_records | row_id; 仪表起止; 流率/时长或积分总量; 蒸汽/冷凝水质量及焓; 作业; 物理动因; 失败/返工/仓储/发运; 在制品/成品负荷转移 | owner：公用工程工程师。对完整纳入作业分别采集原始实测用电和蒸汽热，保留物理分配和结转负荷链接。记录失败及无产出运行。换算前区分积分体积与流率。采集端不做A/Q。 | kWh; MJ | 仪表间隔及期末 | 完整匹配期间及结转负荷历史 | 同场址及纳入作业 | 每 1 kg 参考流 | 仪表校准; 分配动因; 能量衡算; 库存负荷链接 |
| cp_packaging | formulate_dispatch | each actual packaging component | component_records | row_id; 材料; 组件数量/质量; 废弃/破损; 退回/复用循环; 期初期末库存及结转负荷; 交付链接 | owner：包装负责人。分别称量实际各组件，将采购、消耗、复用、损失及库存与交付匹配。保留包装、仓储、搬运负荷及成品库存结转。采集端不除Q。 | kg | 逐组件批及期间 | 完整交付期间及复用容器历史 | 同交付批群 | 每 1 kg 参考流 | 组件称重; 规格; 复用及库存核对 |
| cp_outlets | formulate_dispatch | each actual waste or elementary outlet | weighing_sampling_and_monitoring | row_id; 出口; 湿质量; 组成; 实际物种; 介质/子介质; 废物交接; 积分体积或流率/时间; 实测密度; 处理; 残墨; 在制品/库存及返工链接 | owner：环境及废物计量负责人。独立测量每项真实出口；整份废水质量与物种子账并存，不重复排放。记录零产出/失败批及处理边界。物理质量/元素与物种、水证据独立闭合，不得以一个残差、COD或总VOC同时推定两个未知量。采集端不做A/Q。 | kg | 逐出口事件或监测间隔 | 包含失败及结转的完整匹配期间 | 同声明过程及出口介质 | 每 1 kg 参考流 | 废物交接; 实验室方法; 监测校准; 质量/元素及物种/水核对 |



### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | 报告前用可追溯实际因子换算原始分子单位。实测体积采用同配方和实测温度下密度；流率仅对记录时段积分一次，积分体积已是总量。外购蒸汽热采用转移质量乘实测焓差；3.6 MJ/kWh仅作精确单位换算。 | raw records; measured factors | raw_period_j |  |
| delivery_normalization | all inventory rows | Q为匹配产品/路线/状态/批群的真实唯一正值验收净交付墨水kg，排除包装及未交付库存；退回带相应冲回，不得重复计交付。逐交换/负荷j，在抵消有链接的内部转移并作有记录的物理细分后，A_j = raw_period_j + opening_WIP_burden_j + opening_finished_burden_j - closing_WIP_burden_j - closing_finished_burden_j；期初期末项是归属的交换数量，不能以库存kg代替能量。仅当Q > 0时，将a_j = A_j / Q报告一次。纳入所有可归属失败/零产出、废弃、返工、包装、仓储、搬运及发运负荷。卡片和aggregation_rule指同一次报告操作，绝非依次多次除算。操作后终端delivered_ink固定为1 kg。 | raw_period_j; opening_WIP_burden_j; opening_finished_burden_j; closing_WIP_burden_j; closing_finished_burden_j; Q; cp_delivery; cp_materials; cp_utilities; cp_packaging; cp_outlets | a_j |  |
| physical_reconciliation | formulate_dispatch | 对生产及仓库各账核对实物期初质量 + 实际外部接收 = 外部输出 + 实物期末质量，合并时抵消内部链接，有实测空气摄入时纳入。包装与墨水区分。含量染料、载体水和元素子账不能变成额外采购。真实物种、反应水形成/消耗及相态/自由水变化须有独立证据；单凭物理混配不产生反应水项。未知差异保留为量化不确定性，不拟合成排放或反应水。 | mass and element ledgers; species and water measurements; stock and transfer records | reconciliation evidence |  |



### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 使用前核对完整原生名称各分量、CAS、路线、等级/形态、地理/locationOfSupply、类型/介质及全部属性。身份与供应商/背景适用性区分，保留卡片中特定限制。辅助匹配缺口披露；矛盾参考或真实化学身份不得替代。 | 完整原生记录; 供应商原件; 路线及状态审计 |
| quality_complete | all inventory rows | 所有原始分子、分母及结转负荷覆盖同一真实产品-路线-状态批群。不遗漏无产出运行、库存、退回、返工或纳入的仓储/发运。单一专利不建立可转用消耗/排放范围；记录实测不确定性及证据缺口。 | 全期间账; 库存负荷结转; 计量不确定性; 零产出记录 |
| quality_scope | formulate_dispatch | 历史专利实例仅支持声明配制路线。核实真实配方、规格和验收；不得由配料或原生文字声称通用安全、耐久、档案、抗菌或其他性能。 | `sakura-aqueous-writing-ink-1981` |



## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_ink | 要求reference_flow_link唯一指向Product输出、声明参考UUID及1 kg净整份墨水。外购整份墨水投入可以共用通用UUID，不得隐去或改名成染料。核对真实水性书写范围及原生元数据债务。 |  |
| validate_ledger | all inventory rows | 核实正值真实交付Q、原始期间匹配、完整在制品及成品负荷结转、内部抵消、退回/返工、失败负荷及唯一报告除算。拒绝除零、用干染料替代分母、整份/成分重复采购，或在生产放行时额外再加同批成品库存输出。 |  |
| validate_physical | all inventory rows | 分别核验完整实物质量/元素及真实物种和水证据；核对实际介质、供货状态、密度条件、积分体积处理、热量单位、包装及处理边界。缺失计量或出口身份保留为明确数据集覆盖不完整，不虚构零排放。 |  |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 下游模型中的声明水性书写墨水供应 |
| allowed_use | 经适用性审查的同声明配制路线、状态和厂门净交付基准 |
| excluded_use | 印刷油墨; 美术颜料; 原料颜料/染料/树脂替代; 每支笔剂量、书写服务等同或通用危害/性能声明 |
| required_metadata | 产品/配方/路线/状态; 供货形态; 场址/期间/地理; 参考门; Q; 在制品/成品库存及负荷; 退回/返工; 包装/发运; 原生限制; provider匹配 |
| required_quality_disclosure | 采集owner与方法; 全期间完整性; 库存负荷历史; 分配动因; 不确定性; 未决UUID/provider/范围缺口; 不暗示科学批准 |
| update_trigger | 配方、供货形态、化学路线、生产/发运参考门、能源、包装、库存实践或证据改变 |



## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sakura-aqueous-writing-ink-1981 | literature | Sakura Color Products Corporation. Aqueous ink composition. EP0030389A1, 1981-06-17. https://data.epo.org/publication-server/rest/v1.2/patents/EP0030389NWA1/document.pdf ; 取得于2026-10-16；PDF第1、9页（印刷第8页）、第12-13页（印刷第11-12页），实例1-2 | 原始历史专利案例：水性书写墨水混配路线及分别列明的商品配料；实例2蓝色代表。Scourol #400为实例1的商品烷基醚制剂，不是指定的纯月桂基醚。仅一个来源，不建立工厂经验范围、通用配方、收率、密度、能耗、排放、危害、寿命、剂量或当前供应商批准。仍须真实工厂及供应商证据。 |
