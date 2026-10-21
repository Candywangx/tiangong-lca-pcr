---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.ep-multi-ply-vulcanized-conveyor-belts
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 完整EP多层织物芯硫化橡胶输送带

## 1. 范围与适用性

本方法覆盖真实工业子集：完整平型输送带，采用多层经涤纶纬聚酰胺EP机织骨架、层间胶及SBR基上下橡胶覆盖层，经贴合、硫磺硫化、裁边及检验后以开口卷供货。真实层数、EP整理、覆盖/层间胶配方、边部、尺寸、硫化及验收规格逐产品确定。独立工厂及商业产品primary支持结构/工艺综合，不证明同一SKU、配方、硫化条件、性能或寿命。[fenner-belt-making-2023; fenner-superfort; somi-belt-process]

排除独立外售未硫化覆盖/层间胶片、裸织物骨架、带坯、NN/EE或钢丝绳、专有单层、PVC/PU整芯、环形加工组件、花纹/挡边及传动带。EP/NN/钢丝绳、配方、等级、工况、性能及寿命不可互换。完整增强/贴合/硫化及供货使本PCR区别于外售未硫化SBR覆盖胶片PCR，仅改变用途不构成新产品方法。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.ep-multi-ply-vulcanized-conveyor-belts |
| classification_refs | CPC3.0 36240; narrower industrial subset |
| covered_products | 完整EP多层平型硫磺硫化输送带、SBR基上下覆盖胶及独立规定层间胶 |
| excluded_products | 仅未硫化胶片/带坯或织物; NN/EE/钢丝绳; 单层; 热塑性整芯; 环形/花纹/挡边及传动带 |
| representative_product | 一个真实声明EP多层开口卷配置，附完整逐层BOM及真实验收 |
| production_route | 真实混炼或整份胶料供货 → 热炼/覆盖胶与织物压延 → 逐层贴合/带坯检验 → 硫磺压机/末端冷却 → 裁边/试验/真实修补/质检 → 收卷/包装/仓储/工厂交付 |
| market_state | 真实验收工厂门净交付的完整硫化开口卷带 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供给独立声明规格的完整EP多层输送带 |
| How much | 工厂门1 kg验收净交付带体 |
| How well | 真实完整带验收及EP/覆盖/层间胶配置，不设通用拉伸、磨耗、粘附、耐热或阻燃等级 |
| How long or cycle | 真实供货期间/状态，不假定寿命或输送吨公里 |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实工厂及报告期间; EP经纬聚合物、织法、整理及层数; 宽长厚及实测净质量配置; 逐基胶牌号或整份供货上覆盖、下覆盖、层间胶及配方; 完整真实硫磺硫化体系及压机记录; 压延、叠层、边部状态及修补历史; 真实终验等级及用途且不假定性能等效; 开口卷供货及包装组成、皮重和复用; Q为唯一实际验收工厂门净交付量且与新放行P分开; 原料、WIP、成品及包装期初末、结转负荷、失败及返工; 退回冲销再交付链接及真实仓储搬运发运; 完整native宽Product工厂成品状态限制及provider兼容性 |

每项必需限定信息须声明在可消费数据集元数据、产品说明或过程备注。cp_delivery确定唯一真实工厂门净交付Q，新质量放行P单独保留。终端卡片完整native限制须向下游保留。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按cp_delivery取得1 kg净交付完整带体，经校准真实净质量排除可拆包装并保留供货水分/保留材料状态。Native Mass不建立密度。 |
| dimension_conversion | all inventory rows | 质量及实测尺寸 | kg | 长度/面积/卷数只有对同EP层结构、宽厚、胶料及卷配置有可追溯配对净称量才可转换kg。面积采用真实长宽，不设通用kg/m、kg/m2、卷重或运输服务量；拉伸数据或次级属性系数不是密度。 |
| one_reporting_basis | all inventory rows | 逐行声明实物量或能量 | per 1 kg reference flow | 采集未除原始期间分子及完整WIP/库存结转负荷。report_once在原始转换及批群归属后唯一归一，卡片A_i/Q和aggregation_rule指同一操作而非顺次重复除。 |
| whole_preparation | all inventory rows | 整份供货质量及成分子账 | kg | 外购胶料、油、湿胶浆及分散液按整份供货质量计一次，活性、载体聚合物/油及水子账不新增采购。现场混配采用真实独立外购原料及混合能耗/损失，phr需真实配方及实测基胶基准。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 工厂接收真实外购成分或整份未硫化胶料、EP织物及辅助品，加期初原料/WIP/成品/包装和结转负荷 |
| starting_condition_role | 完整带制造/供货前景接收点，不是上游零负荷截断 |
| product_classification_scope | CPC3.0 36240窄范围完整EP多层输送带子集 |
| recursive_input_rule | 内部胶料、胶布、带坯、边料及放行/仓库转移配对保留负荷，不再采购。外来同类别成品带不自动作为初级路线投入，独立核实状态/路线和上游数据，避免无限递归 |
| upstream_dataset_requirement | 逐实际牌号/形态/配方/路线、地理、期间及公用工程匹配provider证据。整份外购胶料包含上游混炼，native物理身份本身不是定量provider证据 |
| disclosure | 工厂/期间、真实EP结构/配方/硫化、供货状态、Q/P门、WIP/成品结转、真实仓储/包装/发运及全部来源/native限制 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | belt_supply | 纳入真实现场混炼或上游整份胶料供货、热炼/压延/织物覆胶、逐层铺叠/贴合及带坯检查、硫磺压机/末端冷却、裁边/试样/真实修补/终检、收卷/包装、真实仓储及工厂搬运/发运。保留失败、零产出、返工、清洗及WIP期初末负荷，不重复外购胶料及成分投料。 | `fenner-belt-making-2023`; `somi-belt-process`; `fenner-rubber-2024` |
| boundary_delivery | product | Q是唯一真实工厂门净交付量，不是新放行P。保留成品期初末及逐交换结转负荷，未交付库存不计Q。生产和仓储/发运分别记账，合并抵消内部P交接，保留全部真实仓储、包装、搬运及返工。退回/再验收不新增P或重复交付Q。 |  |
| boundary_downstream | belt_supply | 接收不删除上游负荷。客户货运、安装/环形接头、输送服务、使用及寿终在本开口卷工厂门外另建模型。真实工厂发运/装载能耗仍纳入，不假定运输服务输出或EP、NN及钢丝绳间寿命/等效。 | `fenner-superfort`; `somi-belt-process` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| belt_supply | 完整EP多层制造及工厂交付 | required | 真实第1节子集及路线并有独立工段记录 | 胶料/混炼 → 压延/织物覆胶 → 逐层贴合/带坯检查 → 硫磺压机/末端冷却 → 裁边/试验/修补/质检 → 收卷/包装/仓储/发运；集成单元 | per 1 kg reference flow |

逐真实胶料、EP层、硫化批及供货批群保留独立工段记录。胶料、胶布及带坯是内部状态，拆分子模型时配对抵消转移并保留结转负荷。仅product是终端参考。具体条件卡由实际记录触发，不是通用配方。每种新增真实牌号、制剂、处理、燃料/制冷剂、包装物、外部联产品或基本物种分别建具体卡。真实外售中间物或联产品无论是否共用UUID都须显式保留。

### 过程：完整制造及工厂交付 (`belt_supply`)

#### 输入

##### 产品流

###### 干态丁苯橡胶 (`sbr`)

现场SBR基覆盖胶混炼时逐真实牌号称量，保留聚合路线、结合苯乙烯、油展及水分，不推定配方或乳液/溶液牌号，整份外购胶料内含聚合物不再次采购。

- 选定流：干态丁苯橡胶
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-belt-making-2023`

###### 干天然橡胶 (`nr`)

仅纳入真实共混成分，保留逐牌号及供货水分，不设NR/SBR比例或橡胶互换。

- 选定流：干天然橡胶
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 聚丁二烯橡胶 (`br`)

仅纳入真实成分并记录催化体系/牌号及形态，不替代SBR、NBR、EPDM或再生胶。

- 选定流：聚丁二烯橡胶
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 炭黑 (`carbon_black`)

记录真实填料牌号和质量、收集、返回及损失，不设通用phr。

- 选定流：炭黑
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-belt-making-2023`

###### 沉淀二氧化硅 (`silica`)

仅计真实独立投料，保留处理、含量及水分，整份胶料内含填料作成分子账。

- 选定流：沉淀二氧化硅
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 石蜡基橡胶加工油 (`process_oil`)

仅纳入实际整份油牌号，与油展胶或外购胶料内含油区分。每种其他油须独立成行，不假定芳烃油与石蜡油等效。

- 选定流：石蜡基橡胶加工油
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 氧化锌粉末 (`zinc_oxide`)

仅计实际独立采购硫化活性剂，保留牌号/含量，不重复预制剂内含氧化锌。

- 选定流：氧化锌粉末
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-rubber-2024`

###### 硬脂酸 (`stearic_acid`)

仅计真实成分，商业混合脂肪酸须建独立整份混合物行，不能用纯硬脂酸身份。

- 选定流：硬脂酸
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 元素硫粉末 (`sulfur`)

现场可硫磺硫化混炼的真实独立硫磺投料。油处理或聚合物载体制剂是另一整份采购投入，不重复活性物/载体采购，不假设反应水收率。

- 选定流：元素硫粉末
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-belt-making-2023`

###### 橡胶载体N-环己基-2-苯并噻唑次磺酰胺预制剂 (`cbs_preparation`)

仅在真实采购此具体促进剂制剂时纳入，称量整份制剂，CBS含量与载体作子账而非额外采购。不同促进剂另建行，本卡不是强制工业硫化配方。

- 选定流：橡胶载体N-环己基-2-苯并噻唑次磺酰胺预制剂
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 聚合2,2,4-三甲基-1,2-二氢喹啉 (`tmq`)

仅纳入真实防老剂并保留形态/含量，其他防老剂独立成行，不从性能主张推定成分。

- 选定流：聚合2,2,4-三甲基-1,2-二氢喹啉
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 石蜡 (`wax`)

仅计真实独立蜡投料及牌号/质量，排除外购胶料已含蜡。

- 选定流：石蜡
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 未硫化SBR基上覆盖胶料 (`bought_top`)

仅计此完整胶料的真实外供。记录真实牌号/配方、完整可硫磺硫化体系、接收质量/水分及载体成分，不重复采购内含聚合物/油/助剂，不将内部批转移称为采购。保留上游混炼数据，上覆盖、下覆盖及层间胶分立且不互换。

- 选定流：未硫化SBR基上覆盖胶料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-rubber-2024`

###### 未硫化SBR基下覆盖胶料 (`bought_bottom`)

仅计此完整胶料的真实外供。记录真实牌号/配方、完整可硫磺硫化体系、接收质量/水分及载体成分，不重复采购内含聚合物/油/助剂，不将内部批转移称为采购。保留上游混炼数据，上覆盖、下覆盖及层间胶分立且不互换。

- 选定流：未硫化SBR基下覆盖胶料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-rubber-2024`

###### 未硫化织物芯层间胶料 (`bought_skim`)

仅计此完整胶料的真实外供。记录真实牌号/配方、完整可硫磺硫化体系、接收质量/水分及载体成分，不重复采购内含聚合物/油/助剂，不将内部批转移称为采购。保留上游混炼数据，上覆盖、下覆盖及层间胶分立且不互换。

- 选定流：未硫化织物芯层间胶料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`fenner-rubber-2024`

###### 经涤纶纬聚酰胺输送带骨架织物 (`ep_fabric`)

必需的多层EP机织骨架。记录真实经纬聚合物牌号、织法、面密度、宽度、水分及供应商粘附处理状态，含整理剂的成品织物采购一次。不用NN/EE/钢丝绳、轮胎帘子布或专有单层替代，不假定尼龙6/66或浸胶体系。

- 选定流：经涤纶纬聚酰胺输送带骨架织物
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_structure采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_structure`
- 来源：`fenner-belt-making-2023`; `fenner-superfort`

###### 未硫化橡胶粘结胶浆制剂 (`rubber_cement`)

仅计成型或局部修补真实使用的整份供货胶浆，记录全湿质量、真实橡胶/溶剂/水组成及施用损失，不同胶浆/底涂另建行。不假定压延胶布层间必用外加胶浆，供应商织物整理剂不再次采购。

- 选定流：未硫化橡胶粘结胶浆制剂
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 水性硬脂酸锌防粘分散液 (`anti_tack`)

仅计真实整份湿冷却隔离制剂，不假定必用该槽液体系，活性物与水作子账。跟踪真实稀释水、槽库存、保留膜、排污及污泥；其他制剂另建具体行。

- 选定流：水性硬脂酸锌防粘分散液
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_material采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

###### 矿物液压油 (`hydraulic_oil`)

真实液压设备整份油补加，记录牌号、泄漏/收集/处置和回路期初末，循环不是重复采购。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`somi-belt-process`

###### 矿物导热油 (`thermal_oil`)

仅计真实回路补加及损失，与外购热或燃料分开。记录整份牌号及库存，循环流量不是采购消耗。

- 选定流：矿物导热油
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`somi-belt-process`

###### 交流电 (`electricity`)

逐工段真实电耗，包括每轮混炼、压延/成型/压机、真实电加热、冷却、空压、抽风、试验/修补、收卷、仓储及发运搬运和失败返工。电机额定功率或装机容量不是消耗。

- 选定流：交流电
- 流属性/单位：电能 / kWh
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`somi-belt-process`

###### 外购饱和蒸汽 (`steam`)

仅计真实外购蒸汽路线，记录交付焓、压力/温度、质量和冷凝水返回，不再采购其上游燃料，不假定文献导热油压机用蒸汽。

- 选定流：外购饱和蒸汽
- 流属性/单位：热能 / MJ
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

###### 外购热能 (`heat`)

仅计真实外部计量热及明确界面/返回条件，与蒸汽、电力和现场热炉燃料区分，无证据不同时计入替代路线。

- 选定流：外购热能
- 流属性/单位：热能 / MJ
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

###### 天然气 (`natural_gas`)

仅计真实现场锅炉/导热油炉燃料，保留体积条件、组成和热值。积分体积不再乘时间，其他燃料及实际燃烧物种分别列行。

- 选定流：天然气
- 流属性/单位：低位热值能 / MJ
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

###### 外购工业用水 (`water`)

实际接触、冷却、槽液稀释及清洗外部补水并按工段标记。内部循环不是新采购，制剂载水保留子账，蒸发/排放独立记录。

- 选定流：外购工业用水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`somi-belt-process`

###### 可复用聚酯防粘隔离布 (`release_cloth`)

仅计供应商核实为聚酯的真实材质，记录采购、周转池、真实复用及损失，不设通用寿命。其他纺织材质另列物品，复用不再采购。

- 选定流：可复用聚酯防粘隔离布
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 木质输送带运输卷筒 (`wood_reel`)

真实整件卷筒，保留供应商组成、实测皮重、所有权、周转池及损失；不重复采购内含木材，不假定每筒米数。

- 选定流：木质输送带运输卷筒
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 聚乙烯包装薄膜 (`wrap`)

真实供货保护膜，与带体Q及复用隔离布分别称量，记录领退及废料。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 聚丙烯包装带 (`strap`)

真实包装带，保留聚合物规格、质量、返回及损失；钢带是另一物品。

- 选定流：聚丙烯包装带
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 硫化橡胶制的传动、输送带或胶带 (`product`)

终端完整平型硫磺硫化带：多层经涤纶纬聚酰胺EP、分立层间胶及SBR基上下覆盖胶，完成裁边、终检、真实修补、收卷/包装、仓储及工厂发运搬运后以开口卷供货。Q为唯一实际验收工厂门净交付量，不是新放行P，并排除可拆包装。Native身份为Product flow；生产混合，在工厂；成品，已制造；仅Mass。未声明固定等级、聚合物配方、增强体、CAS或独立geography/locationOfSupply/介质；地理未指定不代表中国/香港/全球代表性。原生中文comment使用流体，与正式basename及Product类型不一致：保留该元数据缺陷，不作液体或密度解释。宽身份本身不证明EP配置、配方、供应商数量、性能/寿命或定量provider兼容性，须有真实独立合格规格和证据。

- 选定流：硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`generic`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_delivery`
- 来源：`fenner-belt-making-2023`; `fenner-superfort`; `somi-belt-process`

###### 木质输送带运输卷筒 (`supplied_wood_reel`)

随交付带体外出的真实物品，与Q分开，核对库存、外出、返回及复用，不再次记材料消耗。

- 选定流：木质输送带运输卷筒
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 聚乙烯包装薄膜 (`supplied_wrap`)

随交付带体外出的真实物品，与Q分开，核对库存、外出、返回及复用，不再次记材料消耗。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 聚丙烯包装带 (`supplied_strap`)

随交付带体外出的真实物品，与Q分开，核对库存、外出、返回及复用，不再次记材料消耗。

- 选定流：聚丙烯包装带
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_pack采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 返回蒸汽冷凝水 (`condensate`)

仅计真实公用工程返回，保留质量、焓及接收边界，不重复蒸汽水/能量。

- 选定流：返回蒸汽冷凝水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_utility采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

##### 废物流

###### 未硫化橡胶混炼胶废料 (`uncured_scrap`)

真实出厂混炼/压延拒收胶料；内部回用保留转移及新增负荷，不作外部输出。

- 选定流：未硫化橡胶混炼胶废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 废涤纶-聚酰胺骨架织物 (`fabric_scrap`)

真实未覆胶EP边料及整理/水分；覆胶边料是独立复合废物流。

- 选定流：废涤纶-聚酰胺骨架织物
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 未硫化EP增强带坯废料 (`green_scrap`)

真实外出增强带坯拒收物，胶/布组成作子账，不增加第二份废物总量。

- 选定流：未硫化EP增强带坯废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 已硫化EP增强输送带废料 (`cured_scrap`)

真实硫化裁边、破坏试样及终验拒收物按去向/质量分开。可售降级Product须显式独立实物出口及分配，不可隐藏或改名逃避参考规则。

- 选定流：已硫化EP增强输送带废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 含炭黑混炼收集粉尘 (`dust`)

真实外部处置粉尘，与内部返回及空气排放分开，收集不是大气释放。

- 选定流：含炭黑混炼收集粉尘
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 橡胶输送带生产废水 (`wastewater`)

向明确处理接收方的真实湿废水及组成，若纳入现场处理则抵消内部转移并逐项建立真实出口；COD不是物质或平衡填项。

- 选定流：橡胶输送带生产废水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 含硬脂酸锌冷却隔离污泥 (`sludge`)

仅在真实槽液化学匹配时纳入，保留湿/固/水及去向，其他污泥另列具体交换。

- 选定流：含硬脂酸锌冷却隔离污泥
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 废矿物液压油 (`spent_oil`)

真实液压油处置；若发生废导热油则另列独立流。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 废聚乙烯薄膜 (`film_scrap`)

真实保护膜废物及组成/接收方。

- 选定流：废聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 废聚丙烯包装带 (`strap_scrap`)

真实包装带废物/损失，与薄膜分开。

- 选定流：废聚丙烯包装带
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

###### 废木质运输卷筒 (`reel_scrap`)

真实退出周转的卷筒及去向，保留复用池核算。

- 选定流：废木质运输卷筒
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_outlet采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：

##### 基本流

###### 粒径小于10微米的颗粒物，排入空气 (`pm_air`)

仅计真实有据空气排放份额及粒径定义，与收集粉尘及其他粒级分开。

- 选定流：粒径小于10微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_emission采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：

###### 苯乙烯，排入空气 (`styrene_air`)

仅计混炼/硫化/胶浆使用中有独立证据的真实物种，不用通用VOC或假定聚合物单体损失代苯乙烯。

- 选定流：苯乙烯，排入空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_emission采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：

###### 水蒸气，排入空气 (`water_air`)

同状态真实蒸发，区分自由/载体/结构水、相变化及独立有据化学产耗水，不作残差拟合。

- 选定流：水蒸气，排入空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_emission采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：

###### 化石二氧化碳，排入空气 (`co2_air`)

仅计有真实现场燃料碳/氧化证据的排放，不把外购公用工程上游排放再次排在现场。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_emission采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

仅计真实有据NO2，NOx总量需保留报告约定，不可默认成为纯NO2。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；完整原始期间分子经原始转换及同批群负荷归属后在第8节唯一报告操作中仅除一次；按cp_emission采集并核实真实适用性。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | belt_supply | 采用已声明归属型情景及ILCD7.9.2/7.9.3层级。首先用真实计量/转移细分或虚拟细分专属批、产线、试验、仓储及供货负荷。不同配方/产品批群不可互换，不假设覆盖全厂的统一质量/收入份额。 | `ilcd-allocation-2010` |
| allocation_physical | belt_supply | 对每个剩余共用交换用真实工程证据确立决定性物理因果。实测工艺关系或仓储面积/体积与持续时间可支持具体驱动关系，通用质量、机时或额定功率本身不能。保留驱动量、关系式及全部产品完整性。 | `ilcd-allocation-2010` |
| allocation_remaining | belt_supply | 仅对前述步骤无法归属的剩余共用负荷记录理由，采用同工序出口条件、期间及数量/质量下真实联产品市场价值。保留价格/币种及必要时有据扣除的后加包装/运输。分配后之和须等于分配前清单，不任意切换物理/经济方法、不设固定份额或宣称完整ILCD/PEF符合。 | `ilcd-allocation-2010` |
| allocation_returns | belt_supply | 内部边料/粉尘、返回及返工不是新联产品、负采购或自动回收抵扣。真实外售降级带/胶或回收物须有显式独立Product/Waste出口、接收方、边界及有据分配/处理。不通过改名或未列实物角色而共用参考UUID隐藏。 | `ilcd-allocation-2010` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

collection_method保留未除的原始期间分子及完整WIP/成品结转负荷。aggregation_rule声明同一唯一report_once操作的最终基准，不在采集端归一。

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | belt_supply | 终端带体、放行及库存 | 原始记录及计量账 | 场址; 期间; 层结构; EP聚合物及整理; 覆盖/层间胶配方; 宽厚长; 卷ID; 皮重; 净质量; 新放行P; 发运/验收ID; 退回/冲销/再交付; Q; WIP/成品期初末; 逐交换结转负荷 | Owner: 质检放行负责人和仓管共同负责。保留未除真实期间质量及签署放行/交付记录，经校准净称量排除卷筒/膜/包装带。实际长/面积/卷数与同配置净质量配对，不设固定每米kg。确定含结转成品的唯一验收工厂门净交付Q，另保留新放行P。退回/再验收/再交付链接原批，既不新增P也不重复Q，报告时Q须为正。 | kg; m; m2; 卷数 | 逐事件及期间核对 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 真实工厂及工厂发运门 | 每 1 kg 参考流 | 称量/尺寸校准; BOM及终检; 发运/退回链; 实物库存及既往负荷 |
| cp_material | belt_supply | 逐成分及整份胶料/制剂 | 原始记录及计量账 | 材料/牌号ID; 供应商; 配方版本; 毛皮净; 含量/水分/载体; 接收/领用/返回; 工段/轮次; 失败/零产出; WIP期初末质量及结转负荷 | Owner: 混炼材料保管负责人。逐外购牌号和逐轮保留原始未归一期间数量，包括失败、零产出、拒收及返工。整份供货胶料/胶浆/油/分散液计一次，实测活性/载体/水作成分子账。现场混配采用独立采购原料及真实混合能耗/损失，内部转移及库存配对。 | kg | 逐接收及批投料/轮次 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 接收、母炼/终炼及制剂制备 | 每 1 kg 参考流 | CoA; 完整批准批配方; 校准秤; 领退及转移记录 |
| cp_structure | belt_supply | EP织物、压延、叠层及硫化 | 原始记录及计量账 | 织物牌号; 经纬聚合物; 织法/整理; 质量/面积; 宽; 层数; 上/层间/下胶质量/厚度; 裁切/边; 带坯/硫化转移; 实际压机温度/压力/时间/张力; 试验/修补; 失败周期; WIP结转 | Owner: 压延/成型工程师及硫化/质检保管负责人。记录同配置未除的真实织物领用及逐层、配对带坯/硫化转移和实际硫化/试验/修补/验收。保留每个失败周期及WIP负荷，硫化条件及带重由真实场址测量取得，不套用文献设置。 | kg; m; m2; 实录工艺单位 | 逐卷、叠层及硫化周期 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 织物接收、压延/成型、硫化/末端冷却及整理 | 每 1 kg 参考流 | 织物证书; 逐层BOM; 称量/尺寸; 真实硫化曲线; 破坏及外观质检 |
| cp_utility | belt_supply | 逐公用工程、燃料及回路油 | 原始记录及计量账 | 工段/表ID; 间隔; 积分读数或速率; 供回条件; 热值/焓; 质量/体积; 补加/返回; 回路库存; 失败/返工活动; 仓储占用/搬运 | Owner: 工厂公用工程师及仓库能源保管负责人。保留逐工段、失败/零产出、返工和真实仓储/包装/发运的原始期间表差、燃料/油领用及回路补加/损失。保留供热/蒸汽/燃料边界及冷凝水返回。速率乘时长得到分子，积分气液体积不再乘时长。每种真实不同燃料及制冷剂单列交换，不用额定功率替代。 | kWh; MJ; kg; 附条件m3 | 逐表间隔、补加及返回 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 全工厂工段及真实仓储/发运 | 每 1 kg 参考流 | 表校准; 发票; 焓/热值基准; 回路平衡; 归属证据 |
| cp_pack | belt_supply | 逐卷筒、布、膜及包装带 | 原始记录及计量账 | 物品/材质ID; 实测皮重; 采购/领用/返回/废弃; 周转池期初末; 随货Product输出; 真实复用; 损坏/损失; 批群链接 | Owner: 包装/发运保管负责人。保留原始真实物品质量及流转，与带体Q分开，记录供应商组成及实测物品皮重。复用卷筒/布采用真实池、返回及损失，不假设次数或每卷米数。保留所有包装/重包/搬运负荷及随货包装。 | kg; 物品数 | 逐包装、返回、损失及盘点 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 整理、包装、仓储及发运 | 每 1 kg 参考流 | 供应商组成; 皮重实测; 周转池账; 发运/返回/损失记录 |
| cp_outlet | belt_supply | 逐实物拒收及外部出口 | 原始记录及计量账 | 流/状态; 组成; 湿干质量; 接收方/处理; 内部返回; Product/Waste身份; 期初末库存; 试样; 失败批; 结转负荷 | Owner: 回收/废物保管负责人及生产库存核算员。保留每种真实未硫化胶、EP织物、未/已硫化复合物、收集粉尘、废水、油及包装流的原始全期间外出数量及组成。逐去向/等级分开、内部返回配对，确立真实可售联产品及分配。 | kg | 逐取样、转移及外运 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 全部生产、返工及供货出口 | 每 1 kg 参考流 | 地磅; 联单; 测定; 接收方/处理证明; 实物平衡 |
| cp_emission | belt_supply | 逐物质及接收介质 | 原始记录及计量账 | 物质/介质; 采样窗口; 浓度; 匹配气液量; 干湿/参考条件; 收集; 实际水相; 独立有据反应水; 失败/返工 | Owner: 环境监测保管负责人。保留真实混炼/压延/硫化/胶浆、现场能源、返工及仓储的原始期间测量和有据物种/相转换。每种物质仅凭独立实测/化学依据，不以同一残差、COD或通用VOC拟合未知排放及反应水，收集废物/废水转移与直接基本流释放分开。 | kg; 实录原单位 | 逐有据采样及期间积分 | 包括失败、返工及结转负荷的完整真实报告期间和期初末批群链接 | 真实释放点及接收介质 | 每 1 kg 参考流 | 采样/实验室QA; 校准; 气液条件; 物种证据及独立质量/元素平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q。A_i为逐原子未除分子，经原始转换、专属/共用归属及原料、WIP、成品期初末负荷调整后唯一归属于同真实供货产品/配方/路线/状态批群。Q由cp_delivery提供，为正的唯一验收工厂门净交付带体kg。保留全期间失败/零产出/返工及期初结转负荷，期末未交付负荷向后结转，再仅归一一次。卡片与aggregation_rule指同一次报告操作，参考输出为Q/Q=1 kg。 | A_i; Q; cp_delivery; cp_material; cp_structure; cp_utility; cp_pack; cp_outlet; cp_emission | a_i |  |
| raw_conversion | all inventory rows | 实际毛皮净质量转换kg。长度/面积/卷数须有cp_delivery/cp_structure配对净带称量和精确配置，不用固定kg/m或服务量。材料体积需真实同状态密度。速率乘时长得到分子，积分气液体积不再乘时间。report_once前保留气体条件/热值、蒸汽质量/焓和电/热单位。 | cp_delivery; cp_structure; cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | converted raw numerators |  |
| physical_closure | belt_supply | 逐控制体独立核对实物质量和元素：期初库存加真实外部流入等于期末库存加全部真实外部流出，包含逐Product出口、公用工程返回、随货包装、废物及基本物种。生产账新放行P只计一次，不再把同批期末成品库存加作另一生产输出。独立成品仓账保留期初、内部P交接、Q、退回/返工、期末及结转负荷，合并抵消内部转移。真实物种、自由/载体/结构水及独立有据化学产耗水分开。不用同一平衡残差或COD拟合未知出口与未知反应水，硫磺硫化不建立通用净产水量。 | cp_delivery; cp_material; cp_structure; cp_utility; cp_pack; cp_outlet; cp_emission | raw physical mass element and burden ledgers |  |
| whole_inputs | belt_supply | 整份外供胶料、油、湿胶浆及分散液作为一次采购制剂，其实测活性/聚合物/载体/水分数在该质量内核对，不重复采购。现场混配采用真实独立采购成分及真实能耗/损失。包装及复用卷筒/布账独立于带Q保留采购、期初末、随货输出、返回/废弃/复用。 | cp_material; cp_pack; cp_delivery | nonduplicated preparations and packaging |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | belt_supply | 核实真实多层EP机织骨架、分立层间胶、SBR基双覆盖及完整硫磺硫化开口卷验收。Native宽名称不证明EP/NN/钢丝绳、等级或寿命等效。 | 织物/胶料供应商记录; 完整逐层BOM; 硫化/终验 |
| quality_period | all inventory rows | 完整期间投入/负荷包含失败、零产出、返工、WIP及成品结转；Q为真实正的唯一净交付，不用P、毛通过量或包装质量替代。 | 期间/批群及实物库存核对; 退回链接; 逐交换既往负荷 |
| quality_units | all inventory rows | 校准质量/能量、同配置长/面积/件数转换、整份制剂及独立实物/物种证据；不设默认重量、配方、收率、服务量、硫化条件或反应水。 | 校准; 测定; 配对净称量; 条件/相态及物种证据 |
| quality_projection | belt_supply | 将每个native名称分量、comment缺陷、等级/形态/路线/地理/介质及精确属性/单位限制保留在可消费context。两语言投影保留每个原始表/来源/协议/计算/质量字段及完整限制，仅Schema/ID相同不充分。 | 完整直读原件; primary来源; 原始到typed审计; provider证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | reference_flow_link选定唯一实际终端Product输出并与声明参考UUID一致，即独立合格完整硫化EP带，不是胶料、带坯、织物或输送服务。保留精确官方中文basename及全部native限制，其他真实输出即使共用UUID也保留其实物角色。 |  |
| validate_delivery | all inventory rows | 核实正的唯一净交付Q与P分开，匹配产品/配方/路线/状态/期间及实测质量转换。核对全期间失败/返工、WIP/成品期初末质量及负荷、链接退回/再验收/再交付和真实仓储/包装/搬运/发运，仅report_once归一。 |  |
| validate_balance | belt_supply | 对每项真实材料/公用工程/包装及Product/Waste/基本流出口核对physical_closure及whole_inputs，内部转移配对抵消、避免重复采购、保留独立水/物种证据而不残差拟合，使用前补全全部真实配方/硫化/公用工程/出口行。 |  |
| validate_method | belt_supply | 执行限定EP结构及供货、采集owner、来源/native/provider适用性、双语全字段保留及声明分配层级。核心参考/方法矛盾阻止可用指导，普通未来测量/辅助UUID缺口如实披露而不造值，科学复核独立进行。 | `fenner-belt-making-2023`; `somi-belt-process`; `ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 向下游安装/使用模型供给有据匹配的完整EP多层硫化开口卷带体 |
| allowed_use | 真实结构/胶料/供货状态及兼容地理/技术/期间/provider，明确1 kg工厂净交付及包装边界 |
| excluded_use | 默认替代全部36240带、未硫化胶料/织物、输送服务、EP/NN/钢丝绳等效或固定寿命；完整ILCD/PEF/科学批准主张 |
| required_metadata | 全部必需限定信息及完整native限制; 协议owner; 真实配方/结构/硫化; Q/P及库存/结转账; 公用工程/包装/出口及分配 |
| required_quality_disclosure | 真实覆盖; 未来测量/provider/辅助身份缺口; 来源综合及独立性限制; native元数据缺陷; 不确定性与复核待定 |
| update_trigger | EP层结构/整理、胶料配方、硫化、供货状态、过程/边界、Q门/转换、库存归属或primary/native证据实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fenner-belt-making-2023 | literature | Quality in the making – how rubber conveyor belts are made; Mining & Quarry World December 2023; https://www.fennerdunlopemea.com/app/uploads/Quality-in-the-Making.-MQW-December-2023.pdf | 荷兰工厂一手观察：SBR及按配方混炼、EP经涤纶纬聚酰胺、多层擦胶/贴合/硫磺硫化/终检/仓储发运。不是同SKU配方或通用数量、工况、性能、寿命。原文误称炭黑为聚合物，不采用该分类、营销或法规主张；钢丝绳及专有单/双层结构不纳入。 |
| fenner-superfort | literature | Superfort multi-ply conveyor belts; HTML snapshot 2026-10-16T11:17:40.555Z; https://www.fennerdunlopemea.com/conveyor-belts/superfort/ | 真实EP多层产品供货及不同覆盖胶等级，不移植库存尺寸、强度、通用配方、性能、寿命、温度、单位米质量或定量清单。与同厂家文章不是独立来源。 |
| somi-belt-process | literature | Stage-wise conveyor belt manufacturing; Web snapshot 2026-10-16; https://somiconveyor.com/our-usp | 独立印度厂家真实母炼/终炼、压延擦胶/覆盖片、逐层贴合、硫化/冷却、裁边、检验、修补及包装。仅采用适合多层织物的工序，不采用绳芯筒架/梳理要求、设备数量、额定功率、产能、时长、配方、磁场主张或清单因子。 |
| fenner-rubber-2024 | literature | It’s all about the rubber; Mining & Quarry World October 2024; https://www.fennerdunlopemea.com/app/uploads/Its-all-about-the-rubber.-MQW.-OCT-2024-003.pdf | 按配方混炼、分段混炼、压延冷却及外包胶料背景。与2023文章同作者/厂家，不作独立佐证。不移植投料比例、配方、温度、胶料质量占比、法规/耐久主张；不采用误称炭黑为聚合物的措辞。 |
| ilcd-allocation-2010 | official_guidance | ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance; First edition March 2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅作声明归属型情景的方法依据：细分/虚拟细分、逐交换决定性物理因果，再仅对无法确立因果的剩余负荷采用同一工序出口状态市场价值。不任意选物理/经济方法，不设固定份额、后果型替代、自动回收抵扣或完整ILCD/PEF符合性。 |
