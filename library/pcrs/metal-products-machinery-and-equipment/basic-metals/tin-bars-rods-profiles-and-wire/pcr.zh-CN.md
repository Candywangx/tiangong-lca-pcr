---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tin-bars-rods-profiles-and-wire
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---
# 锡条、锡杆、锡型材和锡丝
## 1. 范围与适用性
适用于以接收金属料生产锡或已声明锡合金条、杆、实心型材和丝的门到门过程；排除未锻轧锡、板带箔、粉末、管、制成品、使用和寿命终止。
## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tin-bars-rods-profiles-and-wire |
| classification_refs | CPC 3.0 41547 |
| covered_products | 锡及已声明锡合金条、杆、实心型材和丝 |
| excluded_products | 未锻轧锡、板带箔、粉末、管和制成品 |
| representative_product | 锡杆 |
| production_route | 已声明铸造/成形/精整路线 |
| market_state | 工厂门口可销售半成品实心产品 |
## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 合格可销售的涵盖产品 |
| How much | 1 kg 净可销售产品 |
| How well | 声明成分、形态、尺寸、状态、表面和规格 |
| How long or cycle | 报告期生产周期 |
| reference_flow_link | 扣除内部回用和不合格品后的净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 锡条材 `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 形态；成分；尺寸；状态；表面；路线；地理范围；期间 |
## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 质量流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用一致质量基准并将净产出归一化为 1 kg。 |
## 5. 系统边界
### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的精炼锡或已声明锡合金原料 |
| starting_condition_role | 上游生产以关联投入数据集表示 |
| product_classification_scope | 所涵盖实心半成品形态 |
| recursive_input_rule | 场外同类别原料记录一次；内部废料不跨越边界 |
| upstream_dataset_requirement | 外购投入采用代表性数据集 |
| disclosure | 声明路线、合金、内部废料循环和表面处理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景系统 | 纳入现场成形和精整；排除使用和寿命终止。 | `un-cpc-3-0-structure-2025` |
## 6. 过程清单结构
### 过程图
| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tin_semifabrication` | 锡半成品加工 | required | 始终 | 前景生产 | 1 kg 净产品 |
### 过程：锡半成品加工（`tin_semifabrication`）
#### 输入
##### 产品流
###### 锡原料（`tin_feedstock`）
记录跨越工厂边界的已声明牌号原料接收质量。
- 选定流：锡金属原料
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：
###### 外购电力（`electricity`）
记录纳入生产设备及已分配辅助设施消耗的电力。
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量的归属电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：
##### 废物流
##### 基本流
#### 输出
##### 产品流
###### 参考产品（`reference_product`）
记录扣除内部回用和不合格品后的净合格产品质量。
- 选定流：锡条材 `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf`
- 流属性/单位：Mass / kg
- 数量规则：固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：
##### 废物流
###### 含锡工艺废料（`process_scrap`）
仅记录离开前景边界的分类废料；排除内部回用。
- 选定流：锡废料 `72bbff5c-c26f-4b7b-971e-df634b72ea28`
- 流属性/单位：Mass / kg
- 数量规则：称量场外质量；排除内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：
##### 基本流
## 7. 分配与共产品处理
| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用生产 | 优先划分；剩余共用负荷按净质量分配并披露敏感性。 |  |
## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `tin_semifabrication` | 材料质量 | 衡器记录 | 时间；牌号；毛重；皮重；去向 | 校准衡器 | kg | 每批 | 代表性 12 个月或披露周期 | 纳入生产线 | 求和并归一化 | 校准及核对 |
| `cp_energy` | `tin_semifabrication` | 电力 | 电表记录 | 电表；期间；能源 | 分表或有记录的分配 | kWh 或 MJ | 每月 | 生产期间 | 纳入设备 | 扣除排除项并归一化 | 账单和电表检查 |
### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | 所有行 | 分配量除以净产品质量 | 数量；净质量 | 每 kg 数量 |  |
### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_balance` | 金属流 | 核对原料、产品、废料、库存变化和内部回用。 | 衡器记录和核对表 |
## 9. 校验规则
| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考流 | 要求 1 kg 及全部限定信息。 |  |
| `validate_inventory` | 清单 | 要求原子流、UUID 状态、同期数据和质量平衡。 |  |
## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集 |
| downstream_use | 构建 process 和 lifecyclemodel |
| allowed_use | 已声明涵盖产品和路线 |
| excluded_use | 上游精炼、使用和寿命终止 |
| required_metadata | 形态；成分；尺寸；路线；地理；期间；分配 |
| required_quality_disclosure | 计量、质量平衡、未解决 UUID 和缺口 |
| update_trigger | 边界、路线、合金、能源或收率重大变化 |
## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-04 | 已核验产品身份原文 |
