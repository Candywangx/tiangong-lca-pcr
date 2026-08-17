---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.rice-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 米浆

## 1. 范围与适用性

本 PCR 适用于主要以稻米（*Oryza* 属物种）制造的液态植物饮料，包括以整米、米碎、米粉或稻米来源糖浆为原料，且稻米是特征性谷物配料的产品。范围包括作为成品饮料生产的原味、加糖、调味和强化型产品。数据包必须声明产品特定的配方、稻米原料形态、总固形物或干物质含量、热处理路线、储存制度和包装形式。

前景范围始于饮料工厂接收稻米或已声明的稻米来源配料及其他配方材料，止于工厂门口已装入初级包装的合格米浆。稻米农业生产、外购配料生产、公用工程、包装材料和场外废物处理均以关联的上游数据集表示。配送、零售、消费者冷藏、使用和包装生命末期不属于前景过程，但可在下游生命周期模型中加入。

本 PCR 不包括动物乳混合饮料或含乳糖饮料、婴幼儿配方食品、以酸奶或益生菌饮料销售的发酵米饮料、烹饪用米粥、作为配料销售的米糖浆，以及稻米并非特征性谷物配料的混合植物饮料。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.rice-milk |
| classification_refs | CPC 3.0：24424 Rice milk |
| covered_products | 主要以稻米制造的成品液态植物饮料，包括整米、米碎、米粉和米糖浆路线；原味、加糖、调味或强化型产品 |
| excluded_products | 动物乳混合饮料；含乳糖饮料；婴幼儿配方食品；发酵米酸奶或益生菌饮料；米粥；配料用米糖浆；非以稻米为特征的混合植物饮料 |
| representative_product | 配制成稳定液态饮料的可销售米浆 |
| production_route | 稻米接收与预处理；研磨或浆料制备；可选糊化与酶法淀粉转化；过滤或分离；配制与强化；均质；热处理；灌装、初级包装及已声明的储存调节 |
| market_state | 制造工厂门口的包装成品饮料，并按实际情况声明为货架稳定、常温、冷藏或冷冻状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供适用于已声明食品或饮料用途的稻米来源植物成品饮料 |
| How much | 1 kg 米浆 |
| How well | 符合生产者声明的组成、食品安全、稳定性和包装放行规范的可销售产品 |
| How long or cycle | 工厂门口的一次已放行生产输出；保质期作为限定信息报告，不建模消费者使用时长 |
| reference_flow_link | 该功能单位由 1 kg 合格米浆净质量实现，不含初级包装质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 稻米配料形态与来源；配方与强化；总固形物或干物质含量；热处理路线；货架稳定或冷藏状态；初级包装形式与净装量；生产地域与参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考米浆 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含初级包装的饮料净质量；体积记录必须用批次特定的实测或有据可查的密度换算，并保留密度、温度和来源记录。 |
| `ingredient_mass_basis` | 稻米、水、添加物、酶和其他配方投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录收到状态质量；浓度、水分或固形物含量影响配方或可比性时须另行报告；不得无说明地将干物质换算为收到状态质量。 |
| `energy_consistency` | 电力和热能记录 | Energy | 电力用 kWh；燃料、蒸汽或热量用 MJ | 保留计量单位和换算因子；除非声明效率和计算方法，不得混合外购能源与有用过程热。 |
| `packaging_separation` | 初级和次级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种包装材料按每 1 kg 饮料净质量分别报告，包装质量不得计入参考产品数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 稻米或已声明的稻米来源配料、水、配方材料、公用工程和包装进入饮料制造场址时，具备数量、供应商、地域和上游数据集引用；同时声明稻米配料形态及固形物或水分基准。 |
| starting_condition_role | 前景门到门米浆制造的进入条件 |
| product_classification_scope | CPC 3.0 代码 24424，仅限以稻米为特征的非动物来源液态乳替代品 |
| recursive_input_rule | 作为配料使用的米浆必须表示为单独引用的上游产品数据集，不得递归调用本前景制造系统。 |
| upstream_dataset_requirement | 为稻米或稻米来源配料、其他食品配料、酶与加工助剂、供水、电力、燃料或热量、包装材料、范围内入厂运输以及废物或废水处理关联上游数据集。 |
| disclosure | 声明稻米配料形态与来源、配方、固形物含量、加工路线、热处理、生产地域与时期、包装、储存状态、排除阶段、分配选择和任何缺失的上游数据集。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景米浆生产 | 纳入从稻米配料接收到预处理、转化、分离、配制、均质、热处理、灌装直至包装产品放行的全部场内物料与能源使用；仅按实际路线有条件地纳入工序，并记录省略项。 | `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025` |
| `boundary_upstream_links` | 外购投入与场外服务 | 以关联的上游数据集表示外购物料、能源、包装和处理服务的生产与交付，不在前景过程中重复构建。 | `eu-pef-2021` |
| `boundary_downstream_disclosure` | 配送、零售、使用和生命末期 | 下游阶段不纳入本前景数据集，必须披露其排除；用于从摇篮到坟墓生命周期模型时应明确加入。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `rice_preparation` | 稻米配料接收与预处理 | required | 始终适用；预清洁米粉或糖浆路线未使用的操作记为不适用 | 前景原料预处理 | 向后续工序转移的已处理稻米配料 kg |
| `slurry_conversion` | 浆料制备与淀粉转化 | required | 始终适用；糊化与酶使用取决于已声明的稻米配料和配方 | 前景提取与转化 | 转化后米浆料 kg |
| `separation_formulation` | 分离、混合与强化 | required | 始终适用；无不溶残渣去除的路线将物理分离记为不适用 | 前景配制 | 配制饮料基料 kg |
| `stabilisation_treatment` | 均质与热处理 | required | 始终适用；记录实际均质以及巴氏杀菌、灭菌或 UHT 路线 | 前景产品稳定与食品安全处理 | 处理后米浆 kg |
| `filling_storage` | 灌装、包装、冷却与厂内储存 | required | 始终适用；冷却与冷藏只适用于冷藏产品 | 前景成品处理 | 工厂门口可销售米浆 kg |

### 过程：稻米配料接收与预处理（`rice_preparation`）

#### 输入

##### 产品流

###### 稻米配料（`rice_input`）

记录进入生产的实际稻米、米碎、米粉或米糖浆，包括供应商、来源、收到状态质量和固形物或水分基准。

- 选定流：稻米或已声明的稻米来源配料
- 流属性/单位：Mass / kg
- 数量规则：已放行生产消耗的实测收到状态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_preparation_batch`
- 来源：`sahni-cereal-beverages-2023`
- 数量范围：暂定稻米投入筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：0.30
  - 单位：kg/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始估计；以配方和批次记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已处理稻米配料（`prepared_rice`）

将实测的已处理稻米、米粉、糖浆或研磨物转入浆料制备，并保留水分或固形物调整。

- 选定流：已处理稻米配料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或计算得到的干物质等效转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的已处理稻米配料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_preparation_batch`
- 来源：`sahni-cereal-beverages-2023`

##### 废物流

###### 拒收稻米和清洁残渣（`rice_preparation_rejects`）

记录离开过程的拒收谷物、异物、粉尘和其他清洁残渣，并注明去向和处理路线。

- 选定流：稻米预处理残渣
- 流属性/单位：Mass / kg
- 数量规则：实测或核算的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_preparation_batch`
- 数量范围：暂定拒收物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始拒收比例；以场址记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：浆料制备与淀粉转化（`slurry_conversion`）

#### 输入

##### 产品流

###### 已处理稻米配料（`conversion_rice_input`）

记录从上一过程转移的已处理稻米配料。

- 选定流：已处理稻米配料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化浆料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 来源：`sahni-cereal-beverages-2023`

###### 过程水和配方水（`conversion_water`）

记录浆料形成、本过程内清洗、稀释和酶反应所加水；就地清洗水若单独计量，则保留为独立公用工程记录。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量或按批次配方记录的耗水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 来源：`sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`
- 数量范围：暂定水投入筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.70
  - 上限：1.50
  - 单位：kg/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始配方及过程水估计；以配方和水表记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加工酶（`conversion_enzymes`）

使用 α-淀粉酶、葡萄糖淀粉酶或其他酶时，记录商业酶制剂质量、活性和载体浓度。

- 选定流：食品加工酶制剂
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的商业酶制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转化浆料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 来源：`sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`

###### 转化用电（`conversion_electricity`）

记录研磨、泵送、搅拌和转化设备耗电，按分表或有据可查的设备记录分配。

- 选定流：米浆转化用电
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或设备负荷乘以运行时间的计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 数量范围：暂定用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1.00
  - 单位：kWh/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始转化用电估计；以计量数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 转化用热（`conversion_heat`）

记录按实际路线用于烘烤、糊化、液化和糖化温控的燃料、蒸汽或外购热量。

- 选定流：米浆转化用过程热
- 流属性/单位：Energy / MJ
- 数量规则：计量热量，或按有据可查的低位热值和效率换算燃料用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 来源：`tu-rice-milk-processing-2025`
- 数量范围：暂定过程热筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.10
  - 上限：5.00
  - 单位：MJ/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始热能估计；以计量的燃料、蒸汽或热量记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转化后米浆料（`converted_slurry`）

记录转入分离与配制的转化浆料质量和固形物含量。

- 选定流：转化后米浆料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及固形物含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化浆料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 来源：`sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`

##### 废物流

###### 转化损失与清洗废水（`conversion_wastewater`）

如计量或批次记录允许，分别记录排放浆料、不合格物料和本过程废水，并报告处理去向。

- 选定流：稻米加工废水与转化损失
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或用实测密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slurry_conversion_batch`
- 数量范围：暂定废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始过程废水估计；以排放记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：分离、混合与强化（`separation_formulation`）

#### 输入

##### 产品流

###### 转化后米浆料（`formulation_slurry_input`）

记录从淀粉转化过程接收的浆料。

- 选定流：转化后米浆料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配制饮料基料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batch`

###### 配方与强化配料（`formulation_ingredients`）

分别记录植物油、甜味剂、盐、香料、稳定剂、乳化剂、维生素、矿物质和其他配方配料，并记录商业制剂浓度和供应商数据。

- 选定流：已声明的配方配料
- 流属性/单位：Mass / kg
- 数量规则：每种商业配料的实测加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batch`
- 来源：`sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`

#### 输出

##### 产品流

###### 配制米饮料基料（`formulated_base`）

记录送往稳定与热处理的饮料基料质量、固形物含量和配方标识。

- 选定流：配制米饮料基料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 配制饮料基料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batch`

##### 废物流

###### 不溶性稻米残渣与过滤损失（`separation_residue`）

记录截留固体、过滤损失及其去向；区分可销售共产品和送往处理的废物。

- 选定流：不溶性稻米残渣
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并记录干物质含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batch`
- 来源：`sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`
- 数量范围：暂定残渣筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg 湿残渣/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始湿残渣估计；以实测残渣质量和干物质替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：均质与热处理（`stabilisation_treatment`）

#### 输入

##### 产品流

###### 配制米饮料基料（`treatment_base_input`）

记录进入均质和热处理的配制基料。

- 选定流：配制米饮料基料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后米浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_batch`

###### 处理用电（`treatment_electricity`）

记录均质、泵、控制系统和热处理设备用电。

- 选定流：产品处理用电
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或设备负荷乘以运行时间的计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_batch`
- 来源：`tu-rice-milk-processing-2025`
- 数量范围：暂定处理用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.50
  - 单位：kWh/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始处理用电估计；以计量数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用热（`treatment_heat`）

记录巴氏杀菌、灭菌或 UHT 处理所用的蒸汽、燃料或外购热量，并保留时间—温度记录。

- 选定流：热处理用过程热
- 流属性/单位：Energy / MJ
- 数量规则：计量热量，或按有据可查的低位热值和效率换算燃料用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_batch`
- 来源：`tu-rice-milk-processing-2025`
- 数量范围：暂定处理用热筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.10
  - 上限：3.00
  - 单位：MJ/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始热处理能耗估计；以计量数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 处理后米浆（`treated_rice_milk`）

记录放行至灌装的处理后产品质量，以及实际均质和热处理参数。

- 选定流：Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入灌装的合格产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后米浆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_batch`
- 来源：`tu-rice-milk-processing-2025`

##### 废物流

###### 不合格处理产品与清洗废水（`treatment_losses`）

记录不合格产品、启停损失和清洗废水及其去向。

- 选定流：处理损失与废水
- 流属性/单位：Mass / kg
- 数量规则：实测或核算的损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_batch`
- 数量范围：暂定处理损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始综合损失估计；以场址记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：灌装、包装、冷却与厂内储存（`filling_storage`）

#### 输入

##### 产品流

###### 处理后米浆（`filling_product_input`）

记录进入灌装线的处理后米浆。

- 选定流：Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售米浆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_storage_batch`

###### 初级和次级包装（`packaging_inputs`）

分别记录每种包装材料和组件，包括范围内的容器、封盖、标签、套标、纸箱和托盘份额。

- 选定流：已声明的饮料包装材料
- 流属性/单位：Mass / kg
- 数量规则：发出包装量减去有记录的退回量和未用库存，并与合格灌装件数核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售米浆净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_filling_storage_batch`
- 来源：`eu-pef-2021`
- 数量范围：暂定包装质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.20
  - 单位：kg 包装/kg 米浆净质量
  - 基准：每 1 kg 可销售米浆净质量的宽泛初始包装估计；以物料清单和灌装计数替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装与储存用电（`filling_storage_electricity`）

记录灌装、封口、输送、冷却和已声明停留时间内厂内产品储存的用电。

- 选定流：灌装与储存用电
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，按运行时间或质量吞吐量分配至已放行产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_storage_batch`
- 数量范围：暂定灌装与储存用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.50
  - 单位：kWh/kg 米浆
  - 基准：包括已声明厂内储存的每 1 kg 可销售米浆宽泛初始用电估计；以计量数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 可销售包装米浆（`reference_product_output`）

这是参考产品输出。饮料净质量与包装质量分别记录，并保留已放行灌装计数和质量记录。

- 选定流：Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 已放行米浆净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_filling_storage_batch`

##### 废物流

###### 包装废料与不合格灌装产品（`filling_waste`）

按材料和去向分别记录损坏包装、生产线废料、不合格灌装件和退回产品。

- 选定流：包装与灌装产品废物
- 流属性/单位：Mass / kg
- 数量规则：实测废料和不合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售米浆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_storage_batch`
- 数量范围：暂定灌装废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 米浆
  - 基准：每 1 kg 可销售米浆的宽泛初始综合灌装损失估计；以场址记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 同时产生米浆和其他有价值输出的过程 | 技术可行时，通过单独计量或拆分独立运行的预处理、分离、公用工程和包装活动来避免分配。 | `eu-pef-2021` |
| `allocation_physical_then_economic` | 可销售稻米固形物、糖浆或其他共产品 | 无法拆分时，若物理因果关系能反映投入和能源如何形成共产品，则采用有记录的物理关系；否则采用代表性价格的经济分配，并披露数量、价格、时期和敏感性。 | `eu-pef-2021` |
| `allocation_waste_and_recycling` | 残渣、废水、包装废料与回收材料 | 分配负荷前先将每个输出分类为共产品、可回收材料或废物。纳入前景收集和处理负荷；仅在下游模型声明方法且避免重复计算时采用避免负荷或回收信用。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rice_preparation_batch` | `rice_preparation` | 稻米投入、已处理转移物与拒收物 | 收货单；批次记录；秤；水分或固形物检测 | lot_id; rice_form; supplier; origin; input_kg; moisture_or_solids_percent; prepared_output_kg; reject_kg; reject_destination | 经校准的质量计量并按生产批次核对 | kg; percent | 每个接收和处理批次 | 已声明的代表性生产期 | 为所报告产品服务的全部稻米预处理 | 按批次汇总质量并归一化到合格参考产品；单独保留干物质调整 | 秤校准；供应商规范；批次追溯；水分或固形物检测 |
| `cp_slurry_conversion_batch` | `slurry_conversion` | 水、酶、能源、转化浆料与损失 | 配方；水表；配料领用；电表；燃料或蒸汽表；批次转移与排放记录 | batch_id; water_kg; enzyme_product_kg; enzyme_activity; electricity_kWh; heat_MJ; slurry_output_kg; slurry_solids_percent; loss_kg | 批次配方与校准计量；仅在无分表时使用设备负荷计算 | kg; kWh; MJ; percent | 每批次，公用工程至少每月核对 | 已声明的代表性生产期 | 为所报告产品服务的全部转化设备与共用公用工程 | 汇总产品特定记录；共用公用工程按有据可查的运行时间或质量吞吐量分配；归一化到合格参考产品 | 仪表校准；配方批准；设备运行时间；换算因子记录 |
| `cp_formulation_batch` | `separation_formulation` | 配方配料、饮料基料与残渣 | 配方单；配料领用；转移秤；过滤或残渣记录 | batch_id; ingredient_id; ingredient_kg; concentration; base_output_kg; solids_percent; residue_wet_kg; residue_dry_matter_percent; destination | 批次质量记录和实验室固形物测量 | kg; percent | 每批次 | 已声明的代表性生产期 | 为所报告产品服务的全部分离与混合线 | 按配方汇总并归一化到合格参考产品；分别保留每种配料 | 批准配方；秤校准；实验室方法；残渣去向凭证 |
| `cp_treatment_batch` | `stabilisation_treatment` | 处理能源、产品转移与损失 | 均质机日志；时间—温度记录；仪表；批次放行；清洗与损失记录 | batch_id; input_kg; output_kg; electricity_kWh; heat_MJ; homogenisation_parameter; treatment_temperature; holding_time; loss_kg | 自动生产日志与校准计量，并与批次质量核对 | kg; kWh; MJ; process parameter | 每批次；公用工程至少每月核对 | 已声明的代表性生产期 | 为所报告产品服务的全部均质与热处理设备 | 汇总已放行批次，将能源和损失归一化到合格参考产品 | 传感器和仪表校准；经验证的热处理程序；批次放行记录 |
| `cp_filling_storage_batch` | `filling_storage` | 包装输出、包装材料、电力与灌装废物 | 包装物料清单；领用和退回记录；灌装计数；检重秤；电表；储存日志；废料记录 | sku; packaging_material; issued_kg; returned_kg; good_units; net_fill_kg; product_output_kg; electricity_kWh; storage_duration; scrap_kg | 库存核对、校准检重秤与能源计量 | kg; kWh; hour or day | 每生产批次；能源和库存至少每月核对 | 已声明的代表性生产期 | 为所报告产品服务的灌装、冷却和厂内储存 | 饮料净质量与包装分开计算；物料和能源总量归一化到已放行饮料质量 | 包装规范；质量平衡核对；检重秤校准；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalisation` | 所有质量清单行 | 归一化量 = 合格前景质量 / 已放行合格米浆净质量 | 投入、输出、残渣或废物质量；已放行米浆质量 | kg/kg 米浆 |  |
| `calc_energy_normalisation` | 电力与热能 | 归一化能源 = 分配给产品的能源 / 已放行合格米浆净质量；记录所有共用公用工程分配 | 计量能源；分配驱动量；已放行米浆质量 | kWh 或 MJ/kg 米浆 | `eu-pef-2021` |
| `calc_volume_to_mass` | 以体积记录的饮料和水 | 质量 = 实测体积 × 与相关物料、温度和批次对应的实测或有据可查的密度 | 体积；密度；测量温度 | kg |  |
| `calc_packaging_intensity` | 包装投入 | 包装强度 =（发出包装 - 有记录的退回 - 该批次未用期末库存）/ 已放行饮料净质量 | 包装库存；灌装计数；净装量；已放行饮料质量 | kg 包装/kg 米浆 |  |
| `calc_mass_balance` | 每个过程和关联生产批次 | 质量平衡差 = 总质量投入 - 产品、共产品、废物、实测损失及存量变化输出总和；同时报告 kg 和占总投入百分比，并调查重要的无法解释差异 | 所有质量投入与输出；期初和期末库存 | 质量平衡差 kg 及百分比 |  |
| `calc_coproduct_allocation` | 需要分配的共用负荷 | 将选定物理或经济分配因子一致应用于共用投入和排放；保留未分配清单与因子推导 | 未分配清单；共产品数量；物理关系或代表性价格 | 每 kg 米浆的已分配清单 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 使用指定 Rice milk 产品流 UUID 和 Mass 属性；声明所有必需限定信息，并确认产品以稻米为特征且为非动物来源。 | Tiangong 身份回读；产品规范；批准配方 |
| `dq_measurement` | 物料与能源记录 | 使用经校准或验证的测量系统；保留原始单位、换算因子、仪表边界以及不确定性或估算方法。 | 校准证书；仪表图；计算记录；`eu-pef-2021` |
| `dq_temporal` | 前景数据集 | 覆盖已声明的代表性生产期和相关季节、配方、启停及运行模式，或披露并说明排除项。 | 带日期批次与公用工程记录；生产计划；`eu-pef-2021` |
| `dq_completeness` | 过程清单 | 核算每个必需过程以及所列物料、能源、产品、残渣、废水和包装角色，或标记为不适用并说明理由。 | 完整性矩阵；质量与能源核对；废物记录 |
| `dq_geography_technology` | 前景与上游数据集 | 匹配实际工厂地域、电网、燃料、稻米来源、处理技术、包装和废物去向；披露代理数据集及其局限。 | 场址元数据；供应商记录；数据集元数据；`eu-pef-2021` |
| `dq_product_quality` | 可销售米浆 | 仅将清单总量关联到符合已声明组成、固形物、食品安全、稳定性、热处理、灌装和储存规范并已放行的批次。 | 批准规范；实验室与放行记录；时间—温度日志；`tu-rice-milk-processing-2025` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品与功能单位 | 核验 1 kg 米浆净质量使用产品流 `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg；拒绝含包装的参考质量。 |  |
| `validate_product_scope` | 产品身份 | 确认稻米是特征性谷物配料，饮料为非动物来源且不含乳糖，并具备全部必需限定信息；拒绝排除的产品类型。 | `unsd-cpc-3-2025` |
| `validate_process_coverage` | 前景边界 | 确认每个必需过程均有记录，或对路线特定操作有明确不适用声明；确认已披露上游和下游边界处理。 | `eu-pef-2021`; `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025` |
| `validate_inventory_provenance` | 清单行 | 确认每个前景值或计算值均关联到所述采集协议和来源记录；标记未注明的默认值，以及任何被当作最终前景数据使用的推理估算。 |  |
| `validate_mass_balance` | 每个过程和生产期 | 要求以 kg 和百分比报告质量平衡差，调查被判定对数据集重要的无法解释差异，并保留纠正措施或接受证据。 |  |
| `validate_allocation` | 共产品、残渣与回收材料 | 确认每项输出分类、分配层级和因子有记录；使用经济分配时进行敏感性分析；不得重复计算回收或避免负荷信用。 | `eu-pef-2021` |
| `validate_data_quality` | 数据集放行 | 确认校准、时间覆盖、技术与地域匹配、完整性、产品放行和代理披露符合已声明的数据质量要求。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造工厂门口成品米浆的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 米浆配方、生产路线、地域、时期、包装和储存状态与已声明数据集相匹配，或已透明调整的产品与过程建模 |
| excluded_use | 在功能表现、系统边界、分配、数据质量、地域、时期和包装不等同时用于直接产品比较或公开比较声明；对排除产品类型建模；将暂定推理估算作为经验证场址数据使用 |
| required_metadata | PCR id 与发布后的版本；产品流 UUID；配方与强化；稻米配料形态与来源；固形物含量；生产路线；热处理；场址地域；参考期；包装；储存状态；分配；上游数据集；采集协议 |
| required_quality_disclosure | 数据覆盖与缺口；计量和计算方法；质量平衡结果；分配因子；代理数据集；推理估算；排除阶段；产品放行证据；不确定性与局限 |
| update_trigger | 稻米来源或形态、配方、固形物含量、转化或热处理技术、工厂或能源供应、包装、储存制度、共产品路线、分配基准、废物处理或代表性生产期发生重要变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | CPC 24424 分类身份与米浆产品范围 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会，*Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations*，2021，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-11） | 生命周期边界关联、外购投入与包装建模、分配层级、数据质量和下游披露 |
| `sahni-cereal-beverages-2023` | 文献（`literature`） | Sahni 等，*A comprehensive review on functional beverages from cereal grains—characterization of nutraceutical potential, processing technologies and product types*，2023，https://pmc.ncbi.nlm.nih.gov/articles/PMC10275771/（检索于 2026-08-11） | 商业米浆工艺分解：研磨、加水、淀粉水解、过滤、强化与均质 |
| `tu-rice-milk-processing-2025` | 文献（`literature`） | Tu 等，*Influence of homogenization and pasteurization on the physical characteristics, antioxidant properties, and microbial content of VD20 rice milk*，Scientific Reports 15，9683（2025），DOI: 10.1038/s41598-025-88436-z | 米浆批次工序、质量转移点、均质、热处理记录和产品质量证据 |
