---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-flours
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他谷物粉

## 1. 范围与适用性

本 PCR 适用于除小麦或混合麦以外、由已声明谷物籽粒磨制成干粉的前景生产。其磨坊门前景范围从谷物接收开始，涵盖清理、按条件进行的调质或碾皮、研磨与分离、按条件进行的面粉处理、后整理、散装装运或包装，以及场址公用工程和粉尘控制服务。

前景数据包应识别谷物种类或声明的谷物混合物，并区分食品级、饲料级或其他经验证等级。还应说明面粉为全谷物粉还是精制粉，适用时的出粉率或灰分规格、水分基准、粒径规格、处理或添加剂状态，以及散装或包装交付状态。

本 PCR 不包括小麦粉和混合麦粉、不作为面粉销售的粗粒或谷物粉、分离淀粉、含有实质性非谷物配料的预制粉，以及由根、块茎、豆类、油籽、坚果或其他非谷物原料制成的粉。谷物种植、收获、磨坊外干燥和入厂运输位于前景磨坊边界之外；当摇篮到大门研究纳入这些负荷时，应连接相应上游数据集。零售、食品制备、消费以及面粉产品生命末期均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-flours |
| classification_refs | CPC 3.0: 23120, Other cereal flours, exact |
| covered_products | 由已声明非小麦/非混合麦谷物制成的干粉，例如黑麦、大麦、燕麦、玉米、稻米、高粱、小米或范围内谷物混合粉 |
| excluded_products | 小麦粉或混合麦粉；不作为面粉销售的粗粒、谷物粉、颗粒或淀粉；预制混合粉；非谷物粉；湿面糊或面团 |
| representative_product | 经验证的 Tiangong 代表产品身份 `Flour`；前景数据包必须声明实际谷物和等级 |
| production_route | 接收和储存；清理；按条件进行调质、脱壳或碾皮；研磨与分离；按条件进行面粉处理；后整理；散装发运或包装 |
| market_state | 磨坊门处可销售的干谷物粉，采用已声明散装或包装形式，并满足已声明水分和粒径规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在磨坊门提供由已声明谷物制成、符合已声明等级和产品规格的干燥可销售面粉 |
| How much | 1 kg 净面粉 |
| How well | 已声明谷物种类或混合物、等级、全谷物或精制状态、适用时的出粉率或灰分规格、水分、粒径、处理/添加剂状态和交付形式 |
| How long or cycle | 磨坊门处一个生产和发运批次；不赋予使用期功能 |
| reference_flow_link | 参考产品输出 `flour_product_output` 实现该功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 面粉 `67b80ae5-687f-418a-84ba-f06b01a6139b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 谷物种类或已声明混合物；食品级、饲料级或其他经验证等级；全谷物或精制状态；适用时的出粉率或灰分规格；水分基准；粒径规格；热处理、微粉化、强化或添加剂状态；散装或包装交付状态 |

Tiangong 参考流名称为 `Flour`，其源记录带有饲料级描述。只有当该流的身份和限定信息能代表被建模产品时才保留此流。对于其他等级产品，或通用身份在其他方面不适用时，应换用名称、分类、状态、流属性和单位支持均经过独立验证的更具体 Tiangong 产品流。不得无说明地沿用该通用 UUID。

构建前景数据包时，`必需限定信息` 中列出的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考面粉输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明水分以收到状态报告 1 kg 净可销售面粉；参考数量不含包装质量。 |
| `moisture_basis` | 谷物、中间面粉、共产品和最终面粉 | 质量和实测水分分数 | kg and % mass fraction | 记录每项质量是收到状态还是干物质基准。仅使用批次特定的水分测量并按 `calc_dry_matter` 在不同基准之间转换。 |
| `energy_accounting` | 外购电力、燃料、蒸汽和输出能源 | 能源载体特定的能量属性 | Carrier unit and MWh | 保留原始计量载体单位，披露换算因子，并计算不重复计数外购与自发能源的场址总量。 |
| `water_accounting` | 调质及其他工艺用水 | 体积或质量 | m3 or kg | 在仪表或批次记录允许时，将调质用水与其他工艺及卫生用水分开；一致地归一化至参考面粉输出。 |
| `packaging_mass` | 销售包装 | 质量 | kg | 按材料记录包装，并从面粉净质量中排除；仅纳入随参考产品交付的包装。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有已声明种类、来源、水分、储存条件和磨前处理状态的谷物籽粒在面粉磨坊门处接收 |
| starting_condition_role | 前景大门到大门起点；上游谷物生产和外部物流仍作为连接的产品系统 |
| product_classification_scope | 由已声明非小麦/非混合麦谷物制成的其他谷物粉；分类不能替代产品限定信息 |
| recursive_input_rule | 用于混配或返工的外购范围内谷物粉应作为具有自身数据集的上游产品投入仅记录一次，不得递归调用同一前景磨粉路线 |
| upstream_dataset_requirement | 对谷物籽粒、外购面粉、包装、能源载体、供水、添加剂、纳入时的运输以及磨坊外废物处理使用单独记录的上游数据集 |
| disclosure | 声明谷物身份、接收状态、所纳入磨坊操作、条件性处理、共产品和废物去向、分配方法、包装状态、时间/场址覆盖，以及全部排除的上游或下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_mill_operations | 纳入接收和储存、清理、研磨与分离、后整理、发运、场址能源以及粉尘控制；当参考产品实际采用时，纳入调质、碾皮/脱壳、干燥、蒸汽处理、微粉化、混配和包装。 | eu-jrc-fdm-bref-2019 |
| `boundary_rule_2` | upstream_product_inputs | 将种植、收获、磨坊外干燥和入厂运输置于前景磨坊过程之外，但在研究边界纳入这些负荷时连接上游数据集。 |  |
| `boundary_rule_3` | air_emissions_and_captured_material | 将排放至环境的粉尘报告为基本流输出；将过滤器粉尘、筛除物、谷壳、麸皮及其他收集物按实际去向报告为产品或废物流输出。 | eu-jrc-fdm-bref-2019 |
| `boundary_rule_4` | conditional_routes | 对未实施的条件性操作应予排除，不得插入零吞吐量过程；记录能够证明代表批次未采用该操作的证据。 | eu-jrc-fdm-bref-2019 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `grain_receipt_cleaning` | 谷物接收、储存与清理 | `required` | 对接收的谷物籽粒始终纳入 | 前景物料接收、清理和污染物去除 | kg 接收谷物籽粒 |
| `grain_conditioning` | 调质、脱壳或碾皮 | `conditional` | 使用水、蒸汽、润麦、脱壳、碾皮或同等准备步骤时纳入 | 谷物磨前前景准备 | kg 准备后谷物 |
| `milling_separation` | 研磨、筛理与分离 | `required` | 始终纳入 | 前景粒径减小以及面粉与相关物流的分离 | kg 可销售面粉 |
| `special_flour_treatment` | 面粉特殊处理 | `conditional` | 使用干燥、蒸汽处理、微粉化、涡轮分离、强化或其他磨后处理时纳入 | 前景产品特定处理 | kg 处理后面粉 |
| `finishing_dispatch` | 混配、储存、包装与发运 | `required` | 始终纳入最终储存和发运；仅在实施时纳入混配和包装 | 磨坊门处前景后整理和产品转移 | kg 发运面粉 |
| `site_utilities_control` | 场址公用工程与环境控制 | `required` | 纳入服务于代表生产的公用工程使用和环境控制 | 前景设施公用工程核算和直接排放控制 | kg 发运面粉 |

### 过程：谷物接收、储存与清理（`grain_receipt_cleaning`）

#### 输入

##### 产品流

###### 已声明谷物籽粒投入（`cereal_grain_input`）

根据地磅、收货或供应商记录分别记录每种谷物及其物料状态。分配流身份时，应使用与已声明谷物和状态相符的经验证 Tiangong 产品流。

- 选定流：已声明谷物籽粒；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：进入代表生产的合格谷物净质量实测值，经库存变化调整并保持已声明水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：
- 数量范围：暂定谷物投入质量平衡 QA 校验；应以实测出粉率证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：2.0
  - 单位：kg grain/kg saleable flour
  - 基准：每 1 kg 可销售面粉的收到状态谷物投入，并披露水分基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入准备或研磨的清洁谷物（`cleaned_grain_output`）

记录转入下一操作的合格清洁谷物质量，并保留谷物身份和水分基准。

- 选定流：清洁的已声明谷物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或接收质量扣除实测清理去除物和库存变化后的计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：

##### 废物流

###### 清理废料与污染物（`cleaning_rejects`）

按实际处理路线记录石块、金属、糠秕、异种种子、变质谷物及其他剔除物。出售或作为共产品使用的物料应改列为产品输出。

- 选定流：谷物清理废料；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按废料类别和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收谷物籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：eu-jrc-fdm-bref-2019
- 数量范围：暂定清理废料 QA 校验；应以场址记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg rejects/kg received grain
  - 基准：每 kg 接收谷物的收到状态清理废料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放至空气的未捕集清理粉尘（`cleaning_dust_air`）

仅记录跨越环境边界的粉尘。本基本流行不纳入过滤器截留粉尘或与筛除物一起收集的粉尘。

- 选定流：排放至空气的颗粒物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：清理工序可归属的有组织排放和经量化无组织粉尘实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：eu-jrc-fdm-bref-2019

### 过程：调质、脱壳或碾皮（`grain_conditioning`）

#### 输入

##### 产品流

###### 用于准备的清洁谷物（`conditioning_grain_input`）

仅对已声明谷物和产品规格实际采用的准备操作记录进入的清洁谷物。

- 选定流：清洁的已声明谷物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：来自清理工序的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：eu-jrc-fdm-bref-2019

###### 调质用水（`conditioning_water`）

纳入润湿或润麦所加水。蒸汽冷凝水或单独计量的卫生用水应分开记录。

- 选定流：Process water；Tiangong UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：代表谷物使用的计量用水或批次配方加水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：eu-jrc-fdm-bref-2019
- 数量范围：暂定调质用水 QA 校验；应以实测水分平衡证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：m3/tonne saleable flour
  - 基准：每 tonne 可销售面粉的调质用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 用于研磨的准备后谷物（`prepared_grain_output`）

记录转入研磨的调质、脱壳、碾皮或其他准备后谷物，包括准备后的水分。

- 选定流：准备后的已声明谷物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量，并记录准备方法和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

###### 谷壳和准备废料（`conditioning_rejects`）

按实际去向记录谷壳和其他去除物。具有市场用途或内部用途的物流应重新归类为产品输出。

- 选定流：谷物谷壳或准备废料；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按物料和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

### 过程：研磨、筛理与分离（`milling_separation`）

#### 输入

##### 产品流

###### 进入磨机的谷物（`mill_grain_input`）

记录进入粒径减小工序的准备后或直接清洁谷物，并识别其来源准备路线。

- 选定流：准备后的已声明谷物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：磨机进料质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售面粉输出（`flour_product_output`）

这是定量参考产品输出。即使保留通用 Tiangong 流，数据集也应识别实际谷物及全部必需限定信息。

- 选定流：面粉 `67b80ae5-687f-418a-84ba-f06b01a6139b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明水分基准归一化后恰好 1 kg 净可销售面粉
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

###### 麸皮、胚芽及其他可销售谷物组分（`milling_coproducts`）

分别记录每项输出组分，并说明其组成、水分、去向以及市场或内部使用状态。

- 选定流：已声明谷物磨粉共产品；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按物流实测共产品质量，并经库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

###### 捕集的研磨粉尘和过滤器粉尘（`captured_mill_dust`）

过滤器或清扫回收的粉尘应记录为废物；只有证据表明其为可销售或内部再用产品物流时才另作处理。

- 选定流：捕集的谷物粉尘；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：收集质量实测值或有记录的过滤器质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

###### 排放至空气的未捕集研磨粉尘（`milling_dust_air`）

记录治理后的有组织颗粒物排放实测值和经量化的无组织排放。以下浓度范围是 BAT 筛选基准，不能替代司法辖区限值或归一化排放质量。

- 选定流：排放至空气的颗粒物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：排气浓度乘以实测干气体积和运行时间，再加上具有实质性的经量化无组织排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：eu-jrc-fdm-bref-2019
- 数量范围：欧盟谷物磨粉 BAT 有组织粉尘筛选上端值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：mg/Nm3
  - 基准：治理后有组织粉尘在适用采样期间的平均值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：eu-jrc-fdm-bref-2019

### 过程：面粉特殊处理（`special_flour_treatment`）

#### 输入

##### 产品流

###### 进入特殊处理的面粉（`untreated_flour_input`）

仅纳入送往干燥、蒸汽处理、微粉化、涡轮分离、强化或其他已声明处理的面粉组分。

- 选定流：面粉 `67b80ae5-687f-418a-84ba-f06b01a6139b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明处理的质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 处理后面粉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：eu-jrc-fdm-bref-2019

###### 强化剂或加工添加剂（`treatment_additives`）

仅在实际使用时记录每种添加剂，并识别其浓度和上游数据集。

- 选定流：已声明强化剂或加工添加剂；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：批次配方记录或计量添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 处理后面粉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后面粉输出（`treated_flour_output`）

记录处理后输出的水分、粒径或组分、强化和处理状态。

- 选定流：处理后面粉；按适用情况使用经验证的通用或更具体 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：可销售处理后面粉质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 处理后面粉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_dispatch`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

### 过程：混配、储存、包装与发运（`finishing_dispatch`）

#### 输入

##### 产品流

###### 进入发运准备的成品面粉（`finished_flour_input`）

记录转入最终储存、混配、散装装运或包装的面粉，并避免在汇总清单中重复计算内部转移。

- 选定流：面粉 `67b80ae5-687f-418a-84ba-f06b01a6139b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：内部转移质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运面粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_dispatch`
- 来源：

###### 随产品交付的包装材料（`packaging_inputs`）

按材料分别记录包装袋、内衬、封口、标签及其他随附包装；经证实为无随附包装的散装交付时省略本行。

- 选定流：已声明包装材料；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：包装材料清单与采购和生产记录核对后的计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净发运面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装质量 QA 校验；应以包装材料清单替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg packaging/kg net flour
  - 基准：每 kg 净发运面粉的随附包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运的参考面粉（`dispatched_flour_output`）

将发运净面粉与定量参考产品核对，并披露产品是散装还是包装形式。

- 选定流：面粉 `67b80ae5-687f-418a-84ba-f06b01a6139b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 净面粉；不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 后整理包装和产品损失（`finishing_waste`）

按去向记录破损包装、洒落、规格外面粉和返回的内部物料；不得将内部返工面粉作为外部废物输出计数。

- 选定流：按已声明材料分类的后整理废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按处理路线实测离开代表前景系统的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：

##### 基本流

### 过程：场址公用工程与环境控制（`site_utilities_control`）

#### 输入

##### 产品流

###### 场址能源载体（`site_energy_inputs`）

以原始单位分别记录外购电力、燃料、蒸汽及其他能源载体，然后计算服务于代表生产且不重复计数的场址总量。

- 选定流：能源载体特定投入；Tiangong UUID 未解析
- 流属性/单位：Energy or carrier-specific property / original unit and MWh equivalent
- 数量规则：经库存、能源输出及场址内发电核对后，归属于代表生产的计量或发票能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：eu-jrc-fdm-bref-2019
- 数量范围：JRC 谷物磨粉单位能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：0.13
  - 单位：MWh/tonne product
  - 基准：每 tonne 谷物磨粉产品的场址年均能源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：eu-jrc-fdm-bref-2019

###### 其他工艺和卫生用水（`other_process_water`）

当具有实质性时，记录服务于代表生产的非调质工艺和卫生用水，并与调质用水分开。

- 选定流：Process water；Tiangong UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：场址计量用水扣除单独记录的调质用水及排除用途后的计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的废水（`mill_wastewater`）

仅在产生废水并跨越前景边界送出时纳入；识别内部再用及处理去向。

- 选定流：磨坊废水；Tiangong UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：归属于代表生产的排放体积实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 可销售面粉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | independently_measurable_processes | 首先通过细分接收、准备、研磨、处理、后整理和公用工程操作，并在技术可行时采用过程或生产线特定测量来避免分配。 | iso-14044-2006 |
| `allocation_rule_2` | joint_milling_burdens | 当细分不能避免面粉和共产品之间的分配时，如物理因果关系能够反映投入和负荷随输出的变化，则使用有记录的物理因果关系。若不存在可辩护的物理关系，则基于代表性价格期间进行经济分配并执行敏感性检查。 | iso-14044-2006 |
| `allocation_rule_3` | waste_and_coproduct_classification | 根据实际去向和预期用途证据对麸皮、胚芽、谷壳、筛除物、规格外面粉和捕集粉尘分类。不得仅为规避废物负荷而赋予共产品身份，也不得将未跨越系统边界的内部循环物料作为外部物流分配负荷。 | iso-14044-2006 |
| `allocation_rule_4` | allocation_disclosure | 报告分配方法、总和为一的分配因子、物理或经济数据期间、零负荷排除项、内部循环物流，以及任何实质性共产品分配的敏感性结果。 | iso-14044-2006 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `grain_receipt_cleaning` | 谷物接收、清洁转移和库存 | 地磅、收货、筒仓和供应商记录 | cereal species; supplier lot; origin; mass; moisture; acceptance/rejection; silo; opening/closing stock | 经校准地磅或接收秤，与供应商文件和筒仓库存核对 | kg and % moisture | 每次交付和每月库存结算 | 与产品输出相同的代表期；通常至少连续 12 个月或有理由说明的完整生产期 | 每个纳入磨坊和储存边界 | 合格接收量加期初库存减期末库存；谷物种类和水分基准分开 | 秤校准；供应商记录；库存核对；异常日志 |
| `cp_process_batches` | `grain_conditioning`; `milling_separation`; `special_flour_treatment` | 工艺路线、中间转移、水/添加剂配方和处理组分 | 批次、控制系统、配方和生产日志 | batch_id; cereal; route; input/output mass; moisture; process time; water; steam; additive; treatment setting | 计量转移以及签署的批次或控制系统记录 | kg; m3; carrier unit; process setting | 每批次或连续生产线每班 | 与产品输出相同的代表期 | 每条纳入生产线和处理路线 | 仅汇总匹配已声明参考产品和路线的批次 | 仪表校准；批次谱系；配方版本；操作异常日志 |
| `cp_product_dispatch` | `milling_separation`; `special_flour_treatment`; `finishing_dispatch` | 可销售面粉生产和发运 | 生产、筒仓、质量放行、包装和发运记录 | product_id; cereal; grade; whole/refined; extraction/ash; moisture; particle size; treatment; net mass; packaging state; destination | 核对放行产量、筒仓库存变化、包装输出和散装发运 | kg and product specification units | 每批次和每月结算 | 与投入相同的代表期 | 每个纳入磨坊和产品线 | 仅汇总合格净面粉；排除包装并单独跟踪返工 | 秤校准；实验室证书；放行记录；库存核对 |
| `cp_coproduct_waste` | `grain_receipt_cleaning`; `grain_conditioning`; `milling_separation`; `finishing_dispatch` | 共产品、废料、捕集粉尘和废物 | 称量票据、销售、废物转移和内部使用记录 | stream_id; material; mass; moisture; destination; revenue; legal status; internal reuse | 称量每项物料流，或使用有记录的容器数量和经验证换算因子 | kg and currency where economic allocation is used | 每次转移；每月核对 | 与面粉输出相同的代表期 | 所有纳入生产线和废物去向 | 按物流和去向汇总；内部转移在汇总前景系统中抵消 | 秤校准；转移单；客户或废物承包商记录；收入账簿 |
| `cp_energy_records` | `site_utilities_control` | 电力、燃料、蒸汽、场址内发电和能源输出 | 仪表、发票、罐存和发电日志 | carrier; meter_id; amount; unit; energy content/conversion factor; opening/closing stock; generated/exported amount; allocation key | 经校准仪表和发票，与燃料库存和发电记录核对 | original carrier unit and MWh | 连续或按发票期间；每月结算 | 通常至少连续 12 个月或有理由说明的完整生产期 | 全场址，并对非面粉用途作有记录的排除或分配 | 每种载体仅转换一次；扣除输出；核对自发和外购能源；透明分配至代表生产 | 仪表校准；发票；燃料规格；核对记录 |
| `cp_water_records` | `grain_conditioning`; `site_utilities_control` | 调质用水、其他工艺用水和废水 | 仪表、批次配方和排放日志 | meter_id; use_area; volume; batch_id; source; reused volume; discharge destination | 可用时使用分表，否则使用有记录批次配方或场址平衡 | m3 | 连续或每批次；每月结算 | 与面粉输出相同的代表期 | 每个纳入磨坊和用水区域 | 分开调质、其他工艺、再用和排放水；透明分配未分表共用水 | 仪表校准；配方记录；水平衡核对 |
| `cp_packaging_records` | `finishing_dispatch` | 随附包装 | 材料清单、采购、库存和包装线记录 | material_id; material type; unit mass; units used; opening/closing stock; scrap; product_id | 经验证包装规格，与采购和生产线数量核对 | kg | 每次包装运行和每月结算 | 与包装面粉相同的代表期 | 每条纳入包装线 | 按材料汇总随产品提供的包装；排除未转移的可重复使用资产 | 供应商规格；数量核对；称量检查 |
| `cp_air_emissions` | `grain_receipt_cleaning`; `milling_separation`; `site_utilities_control` | 有组织和具有实质性的无组织粉尘排放 | 烟道测试、连续/定期监测、排气流量、运行小时和治理记录 | source_id; concentration; gas volume; reference conditions; operating time; filter status; diffuse estimate method | 适用标准测量，或使用实测浓度和气体流量的有记录工程计算 | mg/Nm3; Nm3; h; kg | 法定频率，以及治理措施重大变化后 | 测试应代表纳入运行模式和生产期 | 每个实质性排放点和有记录无组织源 | 将浓度和干气流量转换为质量并按匹配产量归一化；不加计捕集粉尘 | 需要时的认可测试报告；仪器校准；采样计划；过滤器维护记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | 谷物、面粉、共产品和废物 | dry mass = as-received mass × (1 − moisture mass fraction)；仅使用目标物流实测水分分数转换回收到状态 | as-received mass; measured moisture fraction | 干质量或透明换算的收到状态质量 |  |
| `calc_reference_normalization` | 所有前景清单行 | normalized amount = period amount attributable to represented product ÷ net kg of conforming dispatched flour in the same period | attributable flow amount; dispatched reference-product mass | 每 1 kg 参考面粉的数量 |  |
| `calc_site_energy` | `site_energy_inputs` | 使用已披露因子将各载体转换为 MWh；外购能源 + 场址内使用的自发能源 − 能源输出 − 排除用途，且不得重复计数；再除以可销售面粉吨数 | carrier records; conversion factors; generation; exports; excluded uses; product tonnes | MWh/tonne saleable flour | eu-jrc-fdm-bref-2019 |
| `calc_dust_mass` | `cleaning_dust_air`; `milling_dust_air` | emitted mass = measured concentration × dry-gas volume over operating time，换算为 kg，再加上单独量化的无组织排放 | concentration; dry-gas flow or volume; operating time; diffuse release estimate | 每参考输出的颗粒物排放 kg | eu-jrc-fdm-bref-2019 |
| `calc_mass_balance` | 前景磨坊系统 | 谷物和其他物料投入 + 期初库存 = 面粉 + 共产品 + 废物 + 直接物料排放 + 期末库存；报告绝对和百分比残差，不得强制归零 | 水分基准一致的投入、输出、排放和库存变化 | 质量平衡残差和完整性指标 |  |
| `calc_allocation_factors` | 联合磨粉负荷 | 根据所选物理关系或同一代表期的经济价值计算因子；将因子归一化为总和一，并保留未舍入审计表 | co-product quantities or economic values; selected allocation basis | 分配因子和敏感性情景 | iso-14044-2006 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 谷物种类或混合物及每项必需限定信息应齐全，并在流、过程、批次和发运记录之间一致。 | 产品规格、质量放行证书、批次谱系和经验证 Tiangong 流身份 |
| `dq_measurement` | 质量、水分、水、能源和排放 | 使用经校准仪器或有记录的供应商测量；转换前保留原始单位和参考条件。 | 校准记录、实验室方法、发票、仪表台账和测试报告 |
| `dq_temporal` | 前景期间 | 使用连续代表期，通常至少 12 个月；较短完整生产期应有理由，并披露季节性、停机和异常批次。 | 覆盖表、生产日历、停机日志和理由 |
| `dq_completeness` | 前景清单 | 核对投入、输出、库存变化、内部循环物流、能源、水、粉尘、共产品、废物和包装；解释实质性缺口，不得以虚构物流平衡。 | 质量和公用工程平衡、完整性清单和核对残差 |
| `dq_route_specificity` | 条件性操作 | 证明代表批次是否采用调质、脱壳/碾皮、特殊处理、混配和包装。 | 过程图、批次路线记录和产品规格 |
| `dq_source_traceability` | 外部和上游数据 | 记录来源版本或出版物、网络证据检索日期、上游数据集身份、地理、时间、技术及任何替代。 | 来源登记和数据集元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow_identity | 确认参考数量为 1 kg、Mass 为参考属性，并且仅在谷物、等级和其他限定信息使其具有代表性时使用通用 Flour UUID；否则要求经验证的更具体流。 |  |
| `validation_rule_2` | product_scope | 拒绝未识别谷物，或代表小麦/混合麦粉、非谷物粉、淀粉、不作为面粉销售的谷物粉或本 PCR 范围外预制混合粉的数据包。 |  |
| `validation_rule_3` | boundary_and_route | 确认所有必需操作均有表示，且每项条件性操作要么以记录纳入，要么以路线证据排除；核实已披露上游和下游排除项。 | eu-jrc-fdm-bref-2019 |
| `validation_rule_4` | mass_and_moisture | 重新计算干物质换算和前景质量平衡；标记水分基准不一致、无法解释的库存变化、重复内部转移或实质性残差。 |  |
| `validation_rule_5` | energy_and_water | 重新计算载体换算和用水分离；标记重复计算的场址内发电、能源输出、调质用水或共用场址公用工程。将场址能源与所引筛选范围比较，超出范围时要求说明而非自动拒绝。 | eu-jrc-fdm-bref-2019 |
| `validation_rule_6` | dust_and_waste | 确认捕集粉尘未作为基本流排放报告，有组织粉尘质量使用兼容的浓度与气体体积参考条件，并且废物/共产品去向与转移证据一致。 | eu-jrc-fdm-bref-2019 |
| `validation_rule_7` | allocation | 确认首先考虑细分、分配因子总和为一、分配基准与因果或经济证据匹配，并对实质性联合负荷披露敏感性结果。 | iso-14044-2006 |
| `validation_rule_8` | data_coverage | 确认原始记录覆盖与参考输出相同的产品、场址、路线和期间；列出所有未执行检查，并将缺少身份或实质性清单证据的结果视为不确定。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由真实磨坊记录产生的产品特定前景大门到大门面粉磨制数据集 |
| downstream_use | `secondary_dataset`；在代表性经过审查并连接适当上游数据集时可作为 `background_dataset` |
| allowed_use | 为已声明谷物粉、磨坊技术、地理、时间段、等级、处理和交付状态构建过程或生命周期模型 |
| excluded_use | 用于未声明谷物或等级的通用使用；小麦/混合麦粉；农业种植；零售或使用阶段；替代必需限定信息或流身份不同的产品 |
| required_metadata | canonical PCR id；经验证参考流身份；谷物种类/混合物；等级；全谷物/精制状态；适用时的出粉率/灰分；水分和粒径；处理/添加剂；散装/包装状态；场址/地理；技术；期间；过程路线；上游数据集身份；分配方法 |
| required_quality_disclosure | 记录覆盖；校准和实验室证据；质量平衡残差；能源和用水核对；排放方法；共产品/废物去向；分配因子和敏感性；推理估算替换情况；未解析 UUID 的替代情况 |
| update_trigger | 谷物或产品规格、流身份、磨坊路线或设备、能源结构、粉尘控制、共产品去向、分配基准、包装、场址边界或代表期发生足以实质性改变数据集的变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries* (2019), Chapter 9 and Section 17.8, https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期 2026-08-11） | 谷物磨粉工艺分解；条件性处理；用水依赖背景；单位能耗 QA 范围；粉尘来源、治理和 BAT 筛选基准 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, Clause 4.3.4.2 | 分配层级、物理/经济关系和分配披露 |
