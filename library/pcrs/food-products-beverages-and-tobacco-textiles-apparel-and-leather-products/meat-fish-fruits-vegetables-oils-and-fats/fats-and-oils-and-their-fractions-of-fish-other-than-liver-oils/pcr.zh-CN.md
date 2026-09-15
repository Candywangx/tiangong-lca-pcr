---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-fish-other-than-liver-oils
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鱼类脂肪、油及其分提物（鱼肝油除外）

## 1. 范围与适用性

本 PCR 覆盖在生产设施门口交付的、从鱼类获得的脂肪、油及物理分离馏分的生产，但完全排除全部或部分源自鱼肝的油及其馏分。它适用于拟进一步加工为食品的非鱼肝粗鱼油，以及供人类食用的非鱼肝鱼油或物理馏分。声明的产品应符合 CXS 329-2017 中适用的产品描述和加工状态。

前景数据包应按已知情况用学名识别鱼种（若缺少种级证据，则使用有文件支持的最具体分类单元），并声明所用解剖部位或物料流，以及适用时的野生或养殖来源。可接受的部位声明包括整鱼、躯体组织、鱼头、鱼架、鱼皮、边角料和明确分离的非肝内脏。仅声明“鱼类物料”不能满足要求。

鱼肝油、含鱼肝油的混合物、海洋哺乳动物油、贝类油、陆生动物脂肪、经化学改性的动物脂肪或油（包括氢化、酯交换、再酯化或反油酸化产品）、脂肪酸乙酯以及不用于所声明食品用途的产品均不在范围内。仅当为所声明非鱼肝鱼油产品实际实施时，才纳入提取、精炼、纯化和物理分提。上游捕捞、养殖和外购鱼类加工物料的生产通过链接的上游数据集表示，不得隐含并入本前景系统。

本 PCR 不规定通用能耗、组成或产品收率。这些数值取决于鱼种、解剖部位、鲜度、进料油状态、技术和产品等级，应由前景记录生成。CXS 329-2017 的组成与质量条款仅在适用于所声明具名或非具名鱼油时使用，不得转化为通用 LCI 组成或收率默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-fish-other-than-liver-oils |
| classification_refs | CPC 3.0：21525，鱼类脂肪、油及其分提物（鱼肝油除外） |
| covered_products | 拟进一步加工为食品的非鱼肝粗鱼油；精炼非鱼肝鱼油；物理分离的非鱼肝鱼油馏分；仅来自鱼类的具名或非具名鱼油，前提是声明鱼种和解剖部位或物料流 |
| excluded_products | 鱼肝油及含鱼肝油的任何混合物；贝类油；海洋哺乳动物油；猪油、牛羊脂及其他陆生动物脂肪；归入 CPC 21525 之外的化学改性动物脂肪或油；脂肪酸乙酯；无法证明鱼种和解剖来源的产品；非食品产品 |
| representative_product | 生产设施门口的一种已声明非鱼肝鱼油或物理馏分，并明确鱼种、解剖来源、加工状态和市场等级 |
| production_route | 接收与鱼肝排除控制；处理鱼类物料时的油回收和分离；实际实施时的精炼或纯化；实际实施时的物理分提；储存与出厂 |
| market_state | 拟进一步加工为食品的散装或包装粗油，或已可用于所声明下游食品用途的散装或包装食用油/馏分；声明氧化防护和加工状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为食品加工或人类食用提供所声明油品功能的非鱼肝鱼类脂肪、油或物理馏分 |
| How much | 生产设施门口 1 kg 净产品 |
| How well | 满足所声明的粗制、精炼或物理分提等级及 CXS 329-2017 适用条款；记录鱼种、解剖来源、加工状态和符合性依据 |
| How long or cycle | 设施门口的一个生产批次；本中间或最终食品产品不指定使用期限 |
| reference_flow_link | 功能单位由 1 kg 参考产品流实现，不含包装质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 鱼油 `dacba994-e061-44ed-940e-61f7820422c6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼类学名或有文件支持的最具体分类单元；解剖部位或物料流；无鱼肝来源投入的明确确认；适用时的野生或养殖来源；具名或非具名鱼油；粗制、精炼、纯化或物理分提状态；提取与精炼路线；食品用途状态；散装或包装状态；分配方法；地理范围；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在设施门口准确报告 1 kg 非鱼肝鱼油净产品；包装质量单独列入清单，不得计入参考产品质量。 |
| `wet_material_mass` | 鱼或鱼类加工物料投入 | Mass | kg | 按实际接收状态记录接收质量，并披露是否包含水、冰或其他载体物料；没有实测水分数据和有文件支持的计算，不得换算为干基。 |
| `oil_mass_state` | 粗油、精炼油、馏分和含油残余物 | Mass | kg | 按实测加工状态和批次边界记录每股油流；不得由通用鱼油因子推断含油率、收率或组成。 |
| `utility_units` | 电力、燃料、蒸汽、热、冷却、水和惰性气体 | 相关能量、质量或体积属性 | 数据集参考单位 | 保留源记录单位，记录换算，并使用适用批次产出将实际消耗归一化至 1 kg 参考产品。 |
| `quality_measurements` | 产品质量与身份检验 | 检验特定属性 | 方法特定单位 | 记录 CXS 329-2017 适用符合性结果和分析方法，不得将脂肪酸或氧化规格视为清单质量分数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收具有鱼种和解剖来源文件且排除鱼肝的鱼类或鱼类加工物料，或者接收具有同等可追溯性和加工状态文件的外购非鱼肝粗制/精炼鱼油 |
| starting_condition_role | 前景门口投入，其身份、质量、来源和鱼肝排除证据决定生产路线是否合格 |
| product_classification_scope | 仅限 CPC 3.0 子类 21525：鱼类脂肪、油及其分提物（鱼肝油除外）；化学改性产品和非鱼类动物油仍在该类别之外 |
| recursive_input_rule | 外购合格非鱼肝鱼油或馏分作为投入时，将其一次性记录为技术圈产品投入并链接单独的上游数据集；不得在接收过程中递归重建其上游提取或精炼 |
| upstream_dataset_requirement | 为捕捞或养殖、鱼类加工、外购非鱼肝鱼类物料或油、公用工程、加工助剂、包装、纳入范围的运输和废物处理链接在物种、来源系统、地理、技术和时期方面具有代表性的数据集 |
| disclosure | 声明鱼种/分类单元、解剖部位或物料流、鱼肝排除证据、适用时的野生/养殖状态、进料状态、所有实际加工步骤、产品等级、截断决定、分配选择、上游数据集替代和任何数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_non_liver_identity` | 所有投入和产品流 | 仅纳入鱼类来源的非鱼肝含油物料。保存充分的接收、隔离和质量记录，以证明鱼肝来源油既未被有意使用，也未混入参考产品。 | unsd-cpc-3-0-2025; codex-cxs-329-2017 |
| `boundary_foreground_gate` | 前景生产系统 | 从接收所声明合格物料或外购油开始，在参考产品储存完毕且已准备于生产设施门口出厂时结束；纳入实际实施的提取、分离、精炼、纯化、物理分提、储存和包装步骤。 | codex-cxs-329-2017; eu-pef-2021 |
| `boundary_upstream_links` | 上游供应 | 通过明确的上游产品或废物处理数据集表示捕捞、养殖、鱼类加工、外购中间产品、公用工程、加工助剂、包装和处理服务；不得通过遗漏将其负担设为零。 | eu-pef-2021 |
| `boundary_actual_flows` | 前景清单 | 纳入实际路线中实测的产品投入和产出、能源载体、水、加工助剂、包装、废物、废水和直接基本流排放。只有按照有文件支持的研究规则评估其质量和环境相关性后，才可排除某一流。 | eu-pef-2021 |
| `boundary_fdm_bat_applicability` | 法规/BAT 解释 | 不得把 FDM BAT 排放水平或绩效值作为通用鱼油默认值。欧盟决定 2019/2031 明确将初级鱼油生产排除在 FDM BAT 范围之外；应另行记录场址许可证要求和实际排放并识别适用的行业规则。 | eu-fdm-bat-2019 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_and_segregation` | 物料接收、身份控制与鱼肝排除 | required | 始终 | 前景接收和合格性控制 | kg 已接收合格物料或油 |
| `oil_recovery_and_separation` | 油回收与相分离 | conditional | 从整鱼、鱼类部位、鱼类加工流或其他非油进料回收油时纳入 | 前景提取与分离 | kg 产出非鱼肝粗鱼油 |
| `refining_and_purification` | 精炼与纯化 | conditional | 对实际实施的每个精炼或纯化步骤纳入 | 前景调质 | kg 产出精炼或纯化油 |
| `physical_fractionation` | 物理分提或浓缩 | conditional | 仅在实际实施物理分提且产品未转入化学改性类别时纳入 | 前景产品差异化 | kg 产出所声明油品馏分 |
| `storage_packaging_and_dispatch` | 储存、包装与出厂准备 | required | 始终；包装投入仅适用于实际出厂市场状态 | 前景收尾和设施门口 | 设施门口 1 kg 参考产品 |

### 过程：物料接收、身份控制与鱼肝排除（`material_receipt_and_segregation`）

#### 输入

##### 产品流

###### 合格非鱼肝鱼类物料或外购鱼油（`eligible_fish_material_input`）

按鱼种/分类单元、解剖部位或物料流、产地、适用时的野生/养殖状态、质量和进料加工状态分别记录每个接收批次。

- 选定流：所声明非鱼肝鱼类物料、粗油、精炼油或物理馏分
- 流属性/单位：Mass / kg
- 数量规则：按批次实测接收合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipt_identity`
- 来源：`unsd-cpc-3-0-2025`; `codex-cxs-329-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入加工的已接收合格物料（`accepted_material_output`）

记录转入下一实际过程的实测质量，保持鱼种、部位和状态不变，或明确更新状态。

- 选定流：已接收非鱼肝鱼类物料或鱼油
- 流属性/单位：Mass / kg
- 数量规则：按批次实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每接收批次并归一化至 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipt_identity`
- 来源：`codex-cxs-329-2017`

##### 废物流

###### 被拒收、误识别或含鱼肝的物料（`rejected_ineligible_material`）

记录拒收质量和去向。被拒收的含鱼肝物料不得与合格投入抵销，也不得表示为参考产品。

- 选定流：送往所声明处理或回收的拒收鱼类物料或油
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收批次并归一化至 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipt_identity`
- 来源：`unsd-cpc-3-0-2025`; `codex-cxs-329-2017`

##### 基本流

### 过程：油回收与相分离（`oil_recovery_and_separation`）

#### 输入

##### 产品流

###### 已接收非鱼肝鱼类物料（`recovery_feed_input`）

记录实测进料质量以及从接收环节继承的鱼种和解剖来源。

- 选定流：已接收非鱼肝鱼类物料
- 流属性/单位：Mass / kg
- 数量规则：实测过程进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 粗油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`codex-cxs-329-2017`

###### 水和其他加工介质（`recovery_water_and_media`）

记录跨越过程边界的水、冰或其他供应介质。不得根据通用鱼油过程推断消耗。

- 选定流：场址特定水或所声明加工介质
- 流属性/单位：质量或体积 / 记录单位
- 数量规则：按批次、仪表或对账发票实测消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 粗油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_media`
- 来源：

###### 电力和热能（`recovery_energy`）

记录调质、蒸煮、压榨、离心或分离实际使用的电力、燃料、蒸汽和外供热。

- 选定流：场址特定电力和热能载体
- 流属性/单位：能量或燃料属性 / 记录单位
- 数量规则：针对回收批次计量、分表计量或分配的设施消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 粗油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_media`
- 来源：

##### 废物流

##### 基本流

###### 回收过程直接排放（`recovery_direct_emissions`）

记录归属于回收过程的实际直接空气和水排放；当前景系统运行燃烧源时还包括燃烧排放。

- 选定流：场址特定空气或水体基本流排放
- 流属性/单位：Mass / kg
- 数量规则：按物质实测或依据许可证方法计算的排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 粗油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_and_discharges`
- 来源：`eu-pef-2021`

#### 输出

##### 产品流

###### 非鱼肝粗鱼油（`crude_fish_oil_output`）

记录实测粗油产出。隐含回收收率应使用同一批次进料和产出质量计算；不适用默认收率。

- 选定流：非鱼肝粗鱼油
- 流属性/单位：Mass / kg
- 数量规则：实测可销售或可转移粗油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`codex-cxs-329-2017`

###### 非油共产品（`recovery_coproducts`）

按实测质量和去向分别记录各蛋白质丰富相、水相或其他可销售产出。

- 选定流：按实际市场身份声明的共产品
- 流属性/单位：Mass / kg
- 数量规则：按共产品和批次实测产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每回收批次并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：

##### 废物流

###### 回收残余物和废水（`recovery_residues_and_wastewater`）

按实测数量和处理去向记录分离固体、污泥、拒收油相和废水。

- 选定流：送往处理的所声明残余物、污泥、拒收油或废水
- 流属性/单位：质量或体积 / 记录单位
- 数量规则：按物流实测或质量平衡核算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 粗油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：

##### 基本流

### 过程：精炼与纯化（`refining_and_purification`）

#### 输入

##### 产品流

###### 粗制或部分精炼非鱼肝鱼油（`refining_oil_input`）

为实际实施的每个精炼或纯化阶段记录进料油质量和状态。

- 选定流：粗制或部分精炼非鱼肝鱼油
- 流属性/单位：Mass / kg
- 数量规则：按精炼批次实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 精炼油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`codex-cxs-329-2017`

###### 精炼助剂、水和气体（`refining_aids_and_media`）

按物质名称和功能记录实际使用的碱、酸、吸附剂、助滤剂、水、使用时的溶剂、抗氧化剂、惰性气体及其他加工投入。

- 选定流：具名的场址特定精炼助剂或加工介质
- 流属性/单位：质量或体积 / 记录单位
- 数量规则：实测领用量、批次配方量或对账采购量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`codex-cxs-329-2017`

###### 精炼电力和热能（`refining_energy`）

记录实际加工序列使用的电力、燃料、蒸汽、加热、冷却、真空和压缩气体能耗。

- 选定流：场址特定电力和热能载体
- 流属性/单位：能量或燃料属性 / 记录单位
- 数量规则：针对精炼批次计量、分表计量或分配的设施消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_media`
- 来源：

##### 废物流

##### 基本流

###### 精炼过程直接排放（`refining_direct_emissions`）

记录精炼、适用时的溶剂处理和现场燃烧产生的场址特定空气和水体排放。

- 选定流：场址特定空气或水体基本流排放
- 流属性/单位：Mass / kg
- 数量规则：按物质实测或依据许可证方法计算的排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_and_discharges`
- 来源：`eu-pef-2021`

#### 输出

##### 产品流

###### 精炼或纯化非鱼肝鱼油（`refined_fish_oil_output`）

记录实测产出质量和所声明质量状态。根据所声明鱼油类型确定 CXS 329-2017 适用性，不得赋予通用组成。

- 选定流：精炼或纯化非鱼肝鱼油
- 流属性/单位：Mass / kg
- 数量规则：按批次实测接收油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每精炼批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_and_quality`
- 来源：`codex-cxs-329-2017`

##### 废物流

###### 移除相和废精炼材料（`refining_wastes`）

仅在实际产生时记录皂脚、胶质、废吸附剂或助滤剂、馏出物、溶剂损失、拒收油和废水，并披露去向及任何共产品状态。

- 选定流：送往所声明去向的具名移除相或废材料
- 流属性/单位：质量或体积 / 记录单位
- 数量规则：按物流实测或质量平衡核算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`codex-cxs-329-2017`

##### 基本流

### 过程：物理分提或浓缩（`physical_fractionation`）

#### 输入

##### 产品流

###### 用于分提的合格非鱼肝鱼油（`fractionation_oil_input`）

记录实测进料油、相关时的所声明组成检验和物理分提前的加工状态。

- 选定流：合格非鱼肝鱼油
- 流属性/单位：Mass / kg
- 数量规则：按分提批次实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 所声明馏分产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`codex-cxs-329-2017`

###### 分提公用工程和加工介质（`fractionation_utilities_and_media`）

记录冬化或其他所声明物理分离路线实际使用的电力、加热、冷却、真空、水和加工介质。

- 选定流：场址特定公用工程或具名加工介质
- 流属性/单位：相关属性 / 记录单位
- 数量规则：计量、批次记录或对账消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 所声明馏分产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_media`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 所声明非鱼肝鱼油馏分（`fish_oil_fraction_output`）

记录实测馏分质量和身份。不得将标准组成范围用作过程收率。

- 选定流：所声明非鱼肝鱼油物理馏分
- 流属性/单位：Mass / kg
- 数量规则：按批次实测接收馏分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_and_quality`
- 来源：`codex-cxs-329-2017`

###### 其他可销售油品馏分（`other_fraction_outputs`）

以实测质量、规格、去向和经济状态分别记录每种其他可销售馏分。

- 选定流：所声明共产品油品馏分
- 流属性/单位：Mass / kg
- 数量规则：按批次实测共产品馏分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分提批次并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：

##### 废物流

###### 分提残余物和废介质（`fractionation_wastes`）

按实测数量和处理去向记录不可销售残余物、废介质和废水。

- 选定流：送往所声明去向的具名残余物或废介质
- 流属性/单位：质量或体积 / 记录单位
- 数量规则：按物流实测或质量平衡核算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 所声明馏分产出并归一化至 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：

##### 基本流

### 过程：储存、包装与出厂准备（`storage_packaging_and_dispatch`）

#### 输入

##### 产品流

###### 已接收非鱼肝鱼油产品（`dispatch_oil_input`）

记录适用质量放行后转入最终储存的已接收油质量。

- 选定流：所声明粗制、精炼、纯化或物理分提非鱼肝鱼油
- 流属性/单位：Mass / kg
- 数量规则：按批次实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每出厂批次并归一化至 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_and_quality`
- 来源：`codex-cxs-329-2017`

###### 储存公用工程、惰性气体和包装（`dispatch_inputs`）

记录所声明市场状态实际使用的储存能耗、惰性气体、本阶段添加的抗氧化剂以及一级、二级或运输包装。

- 选定流：场址特定公用工程、具名添加剂、惰性气体或包装材料
- 流属性/单位：相关属性 / 记录单位
- 数量规则：实测、批次记录或物料清单数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging_dispatch`
- 来源：`codex-cxs-329-2017`; `eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考非鱼肝鱼油产品（`reference_product_output`）

使用已核验的 Tiangong 参考身份和必需限定信息报告已放行产品。

- 选定流：鱼油 `dacba994-e061-44ed-940e-61f7820422c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净放行产品的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 储存损失、不合格油和包装废物（`dispatch_wastes`）

按去向分别记录实际储存损失、不合格产品、清洗残余物和包装废物。

- 选定流：送往所声明去向的具名油损失、清洗残余物或包装废物
- 流属性/单位：质量或体积 / 记录单位
- 数量规则：按物流实测或库存核算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging_dispatch`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产出提取、精炼和分提 | 首先通过细分已实施过程，直接计量独立运行阶段或产品线的物料、公用工程、排放和废物流，以避免分配。 | eu-pef-2021 |
| `allocation_supplier_input` | 外购鱼类加工物料或油 | 保留供应数据集声明的上游负担和分配状态。不得仅因投入被称为副产品、残余物或低价值物料就赋予零上游负担。 | eu-pef-2021 |
| `allocation_physical_relation` | 尚未解决的联合产出 | 在可行细分后，当某物理因果关系能够反映共产品产出变化如何改变前景投入和排放时，采用并记录该关系。没有论证时不得把简单质量分配称为因果关系。 | eu-pef-2021 |
| `allocation_economic_fallback` | 缺乏可辩护物理因果关系的联合产出 | 仅将经济分配作为披露的后备方案。记录产品特定数量、价格来源、价格基准、货币、地理、参考期、负值或零值处理，并对重要共产品进行敏感性分析。 | eu-pef-2021 |
| `allocation_waste_and_recovery` | 废物、残余物、回收材料和处理产出 | 根据有文件支持的法律/市场状态和去向对每项产出分类。没有已证明的功能和市场，不得把废物计为共产品；应与所选下游数据集一致地建模处理负担和任何回收。 | eu-pef-2021 |
| `allocation_mass_balance` | 所有多产出过程 | 分配前，在一致的湿基或实际状态质量基准上核对实测投入、产品、共产品、废物和实测库存变化；披露无法解释的不平衡，不得强制并入油收率。 | eu-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipt_identity` | `material_receipt_and_segregation` | 接收和拒收物料身份 | 接收日志、供应商声明、追溯记录、地磅记录 | lot_id; supplier; fish_scientific_name_or_taxon; common_name; wild_or_farmed; anatomical_part_or_stream; liver_exclusion_evidence; incoming_state; gross_mass; tare_mass; accepted_mass; rejected_mass; rejection_reason; destination | 对照实物批次核验文件身份，记录质量并保留明确的鱼肝排除证据 | kg 加文本限定信息 | 每批 | 参考期内所有批次 | 服务于本数据集的所有供应来源和接收点 | 按批次汇总接收和拒收质量；保留限定信息前不得合并批次 | 签署/受控接收记录、供应商规格、追溯证明、秤校准、隔离记录 |
| `cp_process_mass_balance` | `oil_recovery_and_separation` | 过程进料、产品、共产品、废物和库存变化 | 批次表、罐计量、秤记录、流量计、处置记录 | process_id; lot_id; stream_id; stream_role; opening_stock; input_mass; output_mass; closing_stock; moisture_or_carrier_basis; destination | 在一个所声明质量基准上核对每股物料流的校准测量 | kg | 每批或连续生产周期 | 覆盖正常运行变化的代表性时期 | 所有纳入的生产线和班次 | 归一化到产品产出前按过程和批次/周期计算质量平衡 | 仪器校准、批次签署、罐容换算表、核对记录 |
| `cp_utilities_and_media` | `oil_recovery_and_separation` | 电力、燃料、蒸汽、热、冷却、水和加工介质 | 分表、公用工程表、批次领用、发票对账 | process_id; lot_or_period; utility_or_medium; opening_reading; closing_reading; quantity; unit; shared_load_basis; operating_hours; production_mass | 优先采用过程分表；否则用有文件支持的工程驱动因素分配共享用量并与发票总量核对 | 记录的物理单位 | 每批/周期，或至少按月并匹配产量 | 与生产数据相同的时期 | 所有纳入设备和共享服务 | 扣除实测非生产用量、分配共享用量、透明换算单位并归一化到实际产品质量 | 仪表校准、发票、锅炉日志、工程分配依据、完整性核对 |
| `cp_refining_inputs` | `refining_and_purification` | 精炼助剂和添加剂 | 配方、物料领用、采购和库存记录 | lot_id; substance_name; function; concentration; issued_quantity; returned_quantity; stock_change; unit; supplier; recovery_or_destination | 按具名物质记录每个精炼序列的净消耗量 | kg、L 或记录单位 | 每精炼批次 | 参考期内所有精炼批次 | 所有纳入的精炼线 | 净领用等于领用减退回再加可归属库存变化；归一化到已接收精炼油 | 批准配方、批次记录、库存核对、供应商身份 |
| `cp_emissions_and_discharges` | `oil_recovery_and_separation` | 直接空气和水体排放 | 连续监测、定期检测、排放流量计、实验室分析、燃料计算 | process_id; source_id; substance; concentration; flow; duration; quantity; method; detection_limit; discharge_destination | 使用场址许可证或公认测量/计算方法，并保留未检出值处理 | kg、kg/m3、m3 或方法单位 | 按许可证要求且足以代表参考期 | 同一生产时期，并识别偶发事件 | 所有可归属烟囱、排气口和排放点 | 必要时由浓度和流量计算物质负荷，映射至生产并归一化到参考产品 | 实验室资质、方法引用、校准、许可证报告、不确定性和检出限记录 |
| `cp_product_mass_and_quality` | `storage_packaging_and_dispatch` | 已接收油/馏分质量和 CXS 符合性证据 | 罐/秤记录、分析证书、放行记录 | lot_id; product_mass; species_or_taxon; anatomical_source; liver_exclusion_confirmation; named_or_unnamed_oil; processing_state; applicable_cxs_section; test_result; test_unit; analytical_method; acceptance_status | 测量放行质量并保留所声明 CXS 329-2017 产品类型所需的检验结果 | kg 和方法特定单位 | 每个放行批次 | 参考期内所有批次 | 范围内每个产品等级和生产线 | 仅汇总已放行合格质量；将不合格质量保留为单独产出 | 校准质量记录、监管链、认可或受控实验室报告、质量放行签字 |
| `cp_storage_packaging_dispatch` | `storage_packaging_and_dispatch` | 储存投入、包装、出厂和损失 | 罐日志、物料清单、物料领用、发运单、清洗记录 | lot_id; opening_stock; received_mass; dispatched_mass; closing_stock; loss_mass; electricity; inert_gas; additive; packaging_material; packaging_mass; cleaning_material; waste_destination | 核对储存库存，并为所声明市场状态记录实际包装和防护投入 | kg、kWh、m3 或记录单位 | 每批并按月核对 | 与产品产出相同的时期 | 范围内所有储罐、灌装线和包装规格 | 核对期初加接收量与出厂加期末库存及损失；将投入归一化到净产品质量 | 储罐校准、BOM 版本、发运记录、库存核对、废物转移记录 |

当精炼、分提或其他过程存在重要直接排放时，为该过程使用相同字段和方法要求实例化 `cp_emissions_and_discharges`。当回收以外的过程需要过程特定质量平衡时，使用适用的 `process_id` 实例化 `cp_process_mass_balance`；不得合并时期或产品等级不匹配的数据。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 净参考产品质量 = 产品与容器出厂毛重 - 空容器/包装质量；储罐或散装测量直接使用校准净油质量 | 毛重；皮重或包装质量；校准散装质量 | kg 净参考产品 | eu-pef-2021 |
| `calc_process_yield` | 每个实际转化过程 | 过程收率 = 同一所声明质量基准上的实测已接收目标油或馏分产出 / 实测合格进料；报告计算值，不得采用通用默认值 | 同批次已接收产出质量；合格进料质量；质量基准声明 | kg 目标产出/kg 合格进料 | codex-cxs-329-2017 |
| `calc_mass_balance_closure` | 每个过程和批次/周期 | 闭合度 =（总实测产出 + 期末库存 - 期初库存）/ 总实测投入；仅在有记录支持时报告未计量蒸发或取样，并披露剩余不平衡 | 所有投入/产出质量；期初和期末库存 | 无量纲闭合度和无法解释的 kg 不平衡 | eu-pef-2021 |
| `calc_normalized_inventory` | 前景清单行 | 归一化数量 = 可归属的实测或计算流量 / 同一对齐生产时期的净参考产品质量 | 可归属流量；净产品质量；单位换算 | 每 1 kg 参考产品的流量 | eu-pef-2021 |
| `calc_emission_load` | 实测排放 | 物质负荷 = 实测浓度 × 实测排放体积，并进行单位换算及记录未检出值处理；有直接质量测量时优先使用 | 浓度；体积或流量和时长；检出限处理 | 每时期及每 kg 参考产品的 kg 物质 | eu-pef-2021 |
| `calc_allocation_factor` | 无法避免的分配 | factor_i = 所选物理因果量_i / 总量，或在有文件支持的后备方案中采用经济价值_i / 总价值；对所有联合归属的前景流一致应用同一基准 | 共产品数量或价值；分配基准；参考期 | 各产出的分配因子 | eu-pef-2021 |
| `calc_liver_exclusion_balance` | 接收和产品追溯 | 接收的含鱼肝投入应为零；任何检出或声明的鱼肝物料均记录为拒收/不合格，并使受影响产品批次不适用于本 PCR | 接收身份记录；隔离记录；拒收质量；产品谱系 | 通过/失败及被拒含鱼肝物料 kg 数 | unsd-cpc-3-0-2025; codex-cxs-329-2017 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_traceability` | 产品和物料身份 | 将每个参考产品批次追溯到鱼种/分类单元、解剖部位或物料流、产地、适用时的野生/养殖状态及明确鱼肝排除证据。 | 供应商声明、接收记录、隔离记录、批次谱系、产品放行记录 |
| `dqr_measurement` | 质量、公用工程和排放 | 使用校准或受控测量；记录换算因子、共享资源分配驱动因素、检出限及重要时的测量不确定性。 | 校准证书、仪表记录、实验室方法、发票核对、计算表 |
| `dqr_temporal` | 前景数据 | 使用共同且有代表性的参考期，通常至少为连续 12 个月；若较短生产周期就是完整生产活动，则可使用较短周期，并论证季节性和异常事件处理。 | 带日期的生产、公用工程、采购、排放和出厂记录 |
| `dqr_technological` | 纳入过程 | 匹配实际提取、分离、精炼、纯化、分提、储存和包装技术；不得不披露地替换为通用鱼油路线。 | 工艺流程图、设备清单、批次指令、运行日志 |
| `dqr_geographical` | 前景和上游数据 | 表示实际设施和供应地区、电网、燃料、水、运输和处理服务；披露任何代理地理。 | 场址地址、供应商来源、数据集元数据、公用工程合同、处理记录 |
| `dqr_completeness` | 前景清单 | 对每个实际过程的物料投入、产品、共产品、废物、库存变化、公用工程、废水和直接排放进行核对。记录排除项，并证明其未隐藏鱼肝投入或重要环境流。 | 质量和能量核对、截断日志、缺失数据登记、排放清单 |
| `dqr_no_generic_ranges` | 能耗、组成和收率 | 不得使用通用鱼油能耗、组成或收率值。没有来源支持范围时，保留前景数据要求，并在发布或比较用途前将缺失观测标为待替换。 | 前景采集协议、分析证书、未解决数据登记、来源评审 |
| `dqr_source_currency` | 外部规则和数据集 | 在数据集发布时，核实 CXS 329-2017、适用法律要求、上游数据集和分析方法针对所声明地理和产品仍然有效。 | 带日期来源登记、版本记录、数据集元数据、法规评审 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 应为 `dacba994-e061-44ed-940e-61f7820422c6`，Mass 属性 UUID 应为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 应为 `93a60a57-a4c8-11da-a746-0800200c9a66`，净参考数量应为 1 kg。 |  |
| `validate_species_and_part` | 产品和合格投入 | 当鱼种/分类单元或解剖部位/物料流缺失、仅声明为通用鱼类物料，或无法从参考产品追溯到接收批次时，校验失败。 | codex-cxs-329-2017 |
| `validate_no_liver` | 产品类别边界 | 当鱼肝、鱼肝来源油、含鱼肝油的混合物或鱼肝状态未解决的物料进入参考产品谱系时，校验失败。 | unsd-cpc-3-0-2025; codex-cxs-329-2017 |
| `validate_excluded_categories` | 产品分类 | 对海洋哺乳动物油、贝类油、陆生动物脂肪、脂肪酸乙酯或 CPC 21525 之外的化学改性油，校验失败。 | unsd-cpc-3-0-2025; codex-cxs-211-1999; codex-cxs-329-2017 |
| `validate_cxs_applicability` | 所声明产品等级 | 要求数据集识别 CXS 329-2017 中适用的产品描述和加工状态，并保留相应符合性证据。不得将具名油组成范围应用于未声明或不同油品类型。 | codex-cxs-329-2017 |
| `validate_process_route` | 过程图和清单 | 每个实际前景步骤均应出现在过程图和清单中；每个纳入过程均应具有同期投入、产出、公用工程、废物和直接排放，或有文件支持的零值/不适用依据。 | eu-pef-2021 |
| `validate_mass_balance` | 每个实际过程 | 要求披露每个批次或对齐周期的质量平衡闭合度和无法解释的不平衡；禁止通过虚构产品收率或组成强制平衡。 | eu-pef-2021 |
| `validate_foreground_values` | 能源、水、助剂、收率和排放 | 要求提供前景记录或基于这些记录的有文件支持计算。拒绝没有引用来源及所声明适用性支持的通用能耗、用水、组成和收率默认值。 | eu-pef-2021 |
| `validate_allocation` | 多产出过程 | 要求提供细分证据或有文件支持的物理因果关系；使用经济分配时，要求提供价格、时期、地理、货币、零值/负值处理和敏感性结果。 | eu-pef-2021 |
| `validate_data_quality` | 发布数据集 | 要求身份、技术、时间、地理、测量、完整性、来源时效、缺失数据和代理披露足以支持评审和下游复用。 | eu-pef-2021 |
| `validate_fdm_bat_scope` | BAT 或法规声明 | 拒绝声称欧盟决定 2019/2031 提供通用鱼油 BAT 绩效或排放值；引用该来源时应披露其明确排除初级鱼油生产。 | eu-fdm-bat-2019 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种所声明非鱼肝鱼油或物理馏分的设施门口前景生产数据集 |
| downstream_use | `secondary_dataset`；经独立评审且使用者确认范围、地理、技术和产品等级代表性时可用作 `background_dataset` |
| allowed_use | 当鱼种/分类单元、解剖来源、路线、分配、地理、时期和市场状态与预期用途匹配时，用于食品级非鱼肝鱼油生产及下游食品的 LCA |
| excluded_use | 鱼肝油；含鱼肝油的混合物；贝类或海洋哺乳动物油；陆生动物脂肪；CPC 21525 之外的化学改性油或脂肪酸乙酯；饲料或技术级产品；缺少适用评审和等效建模选择的比较声明 |
| required_metadata | PCR id 和版本；参考 UUID；鱼种/分类单元；解剖部位/物料流；鱼肝排除证据；适用时的野生/养殖状态；粗制/精炼/馏分状态；具名/非具名鱼油；实际过程路线；设施地理；参考期；分配；截断；上游数据集清单；CXS 适用性；包装状态 |
| required_quality_disclosure | 测量和校准依据；批次和时间覆盖；质量平衡闭合度；公用工程分配；产品质量方法；共产品和废物分类；直接排放方法；缺失数据；代理；不确定性；来源版本；评审状态 |
| update_trigger | 鱼种或解剖来源、鱼肝物料纳入、原料供应系统、提取/精炼/分提技术、产品等级或 CXS 适用性、分配依据、包装状态、场址、公用工程组合、排放控制、法律要求发生变化，或前景证据有重要改进 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，《产品总分类 3.0 版解释性说明》，子类 21524-21525 及组 2152/2159，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-12） | CPC 产品边界；鱼肝油的分离；化学改性动物脂肪和油的排除 |
| `codex-cxs-329-2017` | standard | Codex Alimentarius，CXS 329-2017《鱼油标准》，2017 年通过，2021 年和 2024 年修订。https://workspace.fao.org/sites/codex/Standards/CXS%20329-2017/CXS_329e.pdf（检索日期 2026-08-12） | 鱼油描述；粗油与直接食用状态；具名/非具名油身份；提取/精炼/分提路线；产品质量、卫生和标签适用性 |
| `codex-cxs-211-1999` | standard | Codex Alimentarius，CXS 211-1999《具名动物脂肪标准》，1999 年通过，修订至 2024 年。https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf（检索日期 2026-08-12） | 范围对照：将猪油和牛羊脂等具名陆生动物脂肪排除在本鱼油 PCR 之外 |
| `eu-pef-2021` | official_guidance | 欧盟委员会 2021 年 12 月 15 日关于使用环境足迹方法的建议（EU）2021/2279。https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-12） | 功能单位、明确系统边界、企业特定前景数据、清单完整性、数据质量、分配层级、报告和校验 |
| `eu-fdm-bat-2019` | official_guidance | 欧盟委员会 2019 年 11 月 12 日关于食品、饮料和乳品行业 BAT 结论的实施决定（EU）2019/2031。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-12） | 适用性检查：初级鱼油生产排除在 FDM BAT 范围之外；直接排放和废水记录应采用场址实际方法和适用行业规则，而非引入 FDM 数值 |
